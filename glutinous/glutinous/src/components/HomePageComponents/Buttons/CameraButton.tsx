import { useRef, useState } from "react";
import { Button, CircularProgress, Typography } from "@mui/material";
import { createScheduler, createWorker } from "tesseract.js";
import heic2any from "heic2any";

const API_KEY = "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"; // this needs to become an environment variable

export function CameraButton() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string>("");
  const [isGlutenFree, setIsGlutenFree] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log(imageURL)
  console.log(recognizedText)

  const processImage = async (fileURL: string) => {
    setIsLoading(true);

    const scheduler = createScheduler();
    const worker = await createWorker();
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    scheduler.addWorker(worker);

    console.log("Scanning Image");

    const { data: { text } } = await worker.recognize(fileURL);
    setRecognizedText(text);

    // Call the API with the recognized text
    const prompt = `Is ${text} gluten-free, Yes or No?`;

    const APIBody = {
      model: "text-davinci-003",
      prompt,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: [" "]
    };

    try {
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify(APIBody)
      });

      const data = await response.json();
      console.log(data);

      if (data.choices && data.choices.length > 0) {
        const generatedText = data.choices[0].text.trim();
        setIsGlutenFree(generatedText);
      } else {
        setIsGlutenFree("No response from the API");
      }
    } catch (error) {
      console.error("Error:", error);
      setIsGlutenFree("API call failed");
    }

    setIsLoading(false);
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
<Button
          sx={{
            position: "fixed",
            bottom: "16px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            padding: "0",
            bgcolor: "transparent",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "calc(100% - 0px)",
              height: "calc(100% - 0px)",
              borderRadius: "50%",
              border: "4px solid orange",
              borderColor: "primary.main",
            },
            "&:hover": {
              bgcolor: "primary.main",
            },
            "&:focus": {
              outline: "none",
            },
          }}
          component="span"
        >
          <img
            src="/images/LogoMakr-2ND0aW.png"
            alt="Button Icon"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "70%",
              height: "70%",
              objectFit: "cover",
            }}
          />
        </Button>
      </label>
      <video ref={videoRef} />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {isGlutenFree && (
            <Typography variant="body1">
              Are the ingredients gluten-free? {isGlutenFree}
            </Typography>
          )}
        </>
      )}
    </>
  );
}

export default CameraButton;
