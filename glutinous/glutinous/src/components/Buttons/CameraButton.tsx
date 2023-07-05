import { useRef, useState } from "react";
import { Button, Typography } from "@mui/material";
import { createScheduler, createWorker } from "tesseract.js";
import heic2any from "heic2any";

export function CameraButton() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string>("");

  const processImage = async (fileURL: string) => {
    const scheduler = createScheduler();
    const worker = await createWorker();
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    scheduler.addWorker(worker);

    console.log("Scanning Image");

    const { data: { text } } = await worker.recognize(fileURL);
    setRecognizedText(text);

    await scheduler.terminate();
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      console.log("Opening camera");
      const file = event.target.files[0];

      if (file.type === "image/heic" || file.type === "image/heic-image") {
        console.log("Detected HEIC, now converting");
        const fileURL = await convertHEICtoJPG(file);
        setImageURL(fileURL);
        console.log(fileURL);
        processImage(fileURL);
      } else {
        const resizedImageBlob = await resizeImage(file);
        console.log("Received non-HEIC image, sending to Tesseract for scanning");
        const fileURL = URL.createObjectURL(resizedImageBlob);
        setImageURL(fileURL);
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
      const blob = blobOrBlobs[0];
      return URL.createObjectURL(blob);
    } else {
      return URL.createObjectURL(blobOrBlobs);
    }
  };
  const resizeImage = async (file: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      // Create an image element
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
  
      img.onload = () => {
        // Create a canvas element
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
  
        // Set the maximum dimensions of the resized image
        const maxWidth = 750;
        const maxHeight = 750;
  
        // Calculate the new dimensions of the image while preserving its aspect ratio
        let newWidth = img.width;
        let newHeight = img.height;
  
        if (newWidth > maxWidth) {
          newHeight *= maxWidth / newWidth;
          newWidth = maxWidth;
        }
  
        if (newHeight > maxHeight) {
          newWidth *= maxHeight / newHeight;
          newHeight = maxHeight;
        }
  
        // Set the dimensions of the canvas
        canvas.width = newWidth;
        canvas.height = newHeight;
  
        // Draw the image onto the canvas
        ctx?.drawImage(img, 0, 0, newWidth, newHeight);
  
        // Convert the canvas to a Blob
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error("Failed to resize image"));
            }
          },
          "image/jpeg",
          0.8
        );
      };
    });
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
