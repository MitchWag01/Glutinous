import { useRef, useState } from "react";
import { Button, CircularProgress, Typography } from "@mui/material";
import { sendTextToGPT } from "../../Functions/ChatGPT";
import { processImage } from "../../Functions/PicturetoText";
import { resizeImage } from "../../Functions/ImageResizing";
import { convertHEICtoJPG } from "../../Functions/ImageConverter";


export function CameraButton() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isGlutenFree, setIsGlutenFree] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  

  const processImaging = async (fileURL: string) => {
    setIsLoading(true);
    try{
      // this line calls the tesseract Image Scanning function 
    const ScannedResult= await processImage(fileURL)
    // this line calls the GPT API 
      const data = await sendTextToGPT(ScannedResult)
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
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      console.log("Opening camera");
      const file = event.target.files[0];
      setIsLoading(true);
      if (file.type === "image/heic" || file.type === "image/heic-image") {
        console.log("Detected HEIC, now converting");
        const fileURL = await convertHEICtoJPG(file,"image/jpeg");
        console.log(fileURL);
        processImaging(fileURL);
      } else {
        const resizedImageBlob = await resizeImage(file);
        console.log("Received non-HEIC image, sending to Tesseract for scanning");
        const fileURL = URL.createObjectURL(resizedImageBlob);
        processImaging(fileURL);
      }
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
