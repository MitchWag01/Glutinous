export const resizeImage = async (file: File): Promise<Blob> => {
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