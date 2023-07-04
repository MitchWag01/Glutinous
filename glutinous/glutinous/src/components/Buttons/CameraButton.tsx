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
