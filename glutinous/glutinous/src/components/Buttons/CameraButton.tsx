import { useRef, useState } from "react";
import { Button, Typography } from "@mui/material";
import { createScheduler, createWorker } from "tesseract.js";

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

    await worker1.loadLanguage('eng');
    await worker2.loadLanguage('eng');
    await worker1.initialize('eng');
    await worker2.initialize('eng');

    scheduler.addWorker(worker1);
    scheduler.addWorker(worker2);

    const results = await Promise.all(
      rectangles.map((rectangle) =>
        scheduler.addJob('recognize', fileURL, {
          rectangle,
        })
      )
    );



    const recognizedText = results
        .map((r) => r.data.text.replace(/[\r\n]+/g, " "))
        .join("");
      
    setRecognizedText(recognizedText);
    await scheduler.terminate();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      // Store image file in browser memory
      const fileURL = URL.createObjectURL(file);
      setImageURL(fileURL);
      // Trigger image processing
      processImage(fileURL);
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
      {/* {imageURL && <img src={imageURL} alt="Captured image" />} */}
      
    </>
  );
}

export default CameraButton
