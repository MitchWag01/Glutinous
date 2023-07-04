import React, { useRef, useState } from "react";
import { Button } from "@mui/material";

type MediaStreamConstraints = {
  audio?: boolean;
  video?: boolean | MediaTrackConstraints;
};

export function CameraButton(props: { requestedMedia: MediaStreamConstraints }) {
  const { requestedMedia } = props;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);

  const handleAccessCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
      setMediaStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      // Handle error
      console.log("Camera access denied");
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
      <Button onClick={handleAccessCamera} disabled={!!mediaStream}>
        Access Camera
      </Button>
      <Button onClick={handleTakePicture} disabled={!mediaStream}>
        Take Picture
      </Button>
      {mediaStream && (
        <Button onClick={handleStopCamera}>Stop Camera</Button>
      )}
      <video
        ref={videoRef}
        width="100%"
        height="auto"
        style={{ display: mediaStream ? "block" : "none" }}
        playsInline
      />
    </>
  );
}
export default CameraButton