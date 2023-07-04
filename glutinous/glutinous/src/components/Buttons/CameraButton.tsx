import React, { useRef } from "react";
import { Button } from "@mui/material";
import { DirectionsCarFilled } from "@mui/icons-material";

type MediaStreamConstraints = {
  audio?: boolean;
  video?: boolean | MediaTrackConstraints;
};

export function CameraButton(props: { requestedMedia: MediaStreamConstraints }) {
  const { requestedMedia } = props;
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleButtonClick = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia(requestedMedia);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.play();

        const captureImage = () => {
          const canvas = document.createElement("canvas");
          if (videoRef.current?.videoWidth && videoRef.current?.videoHeight) {
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;
            const context = canvas.getContext("2d");
            if (context) {
              context.drawImage(
                videoRef.current,
                0,
                0,
                canvas.width,
                canvas.height
              );
              const imageDataURL = canvas.toDataURL("image/jpeg");
              console.log(imageDataURL);
            }
          }
        };

        setTimeout(captureImage, 1000); // Delay the capture by 1 second to allow the camera to start
      }
    } catch (err) {
      // Handle error
      console.log("Camera access denied");
    }
  };

  return (
    <>
      <Button onClick={handleButtonClick}>Open Camera</Button>
      <video ref={videoRef} style={{ display: "none" }} />
    </>
  );
}

export default CameraButton
