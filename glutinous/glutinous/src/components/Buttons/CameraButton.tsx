import { useRef, useState } from "react";
import { Button, Typography } from "@mui/material";
import { createScheduler, createWorker } from "tesseract.js";
import  heic2any  from "heic2any";

export function CameraButton() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string>("");

  const processImage = async (fileURL: string) => {
    const scheduler = createScheduler();
    const worker1 = await createWorker();
    const worker2 = await createWorker();

    const rectangles = [
      {
        left: 0,
        top: 0,
        width: 500,
        height: 250,
      },
      {
        left: 500,
        top: 0,
        width: 500,
        height: 250,
      },
    ];

    await worker1.loadLanguage("eng");
    await worker2.loadLanguage("eng");
    await worker1.initialize("eng");
    await worker2.initialize("eng");

    scheduler.addWorker(worker1);
    scheduler.addWorker(worker2);

    console.log('Scanning Image part 1')

    const results = await Promise.all(
      rectangles.map((rectangle) =>
        scheduler.addJob("recognize", fileURL, {
          rectangle,
        })
      )
    );
    console.log('Scanning Image part 2')

    const recognizedText = results
      .map((r) => r.data.text.replace(/[\r\n]+/g, " "))
      .join("");

    setRecognizedText(recognizedText);
    await scheduler.terminate();
  };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {

      console.log("Opening camera")
      const file = event.target.files[0];
      // Check if file is in HEIC format
      if (file.type === "image/heic"|| file.type === 'image/heic-image') {

        console.log("Detected HEIC, now converting")
        // Convert HEIC to JPG
        const fileURL = await convertHEICtoJPG(file);
        setImageURL(fileURL);
        console.log(fileURL)
        // Trigger image processing
        processImage(fileURL);
      } else {
        console.log('Recieved non HEIC image, sending to tesseract for scanning')
        // Use the file directly
        const fileURL = URL.createObjectURL(file);
        setImageURL(fileURL);
        // Trigger image processing
        processImage(fileURL);
      }
    }
  };



  const convertHEICtoJPG = async (file: File): Promise<string> => {
    const blobOrBlobs: Blob | Blob[] = await heic2any({
      blob: file,
      toType: "image/jpeg",
      quality: 0.8,
    });

    if (Array.isArray(blobOrBlobs)) {
      // Handle array of Blobs
      const blob = blobOrBlobs[0];
      return URL.createObjectURL(blob);
    } else {
      // Handle single Blob
      return URL.createObjectURL(blobOrBlobs);
    }
  };
  return (
    <>
      <label>
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <Button component="span">Open Camera</Button>
      </label>
      <video ref={videoRef} />
      {recognizedText && (
        <Typography variant="body1">{recognizedText}</Typography>
      )}
    </>
  );
}

export default CameraButton;
