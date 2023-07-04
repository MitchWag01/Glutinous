import { useRef, useState } from "react";
import { Button } from "@mui/material";

export function CameraButton() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      // Store image file in browser memory
      const fileURL = URL.createObjectURL(file);
      setImageURL(fileURL);
    }
  };

  const handleTakePicture = () => {
    if (videoRef.current && mediaStream) {
      const video = videoRef.current;
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageDataURL = canvas.toDataURL("image/jpeg");
        console.log(imageDataURL);
      }
    }
  };

  const handleStopCamera = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop());
      setMediaStream(null);
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
      {imageURL && <img src={imageURL} alt="Captured image" />}
    </>
  );
}
export default CameraButton;
