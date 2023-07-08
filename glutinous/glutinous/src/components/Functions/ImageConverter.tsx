import heic2any from "heic2any";

export const convertHEICtoJPG = async (file: File, imageType: string): Promise<string> => {
    const blobOrBlobs: Blob | Blob[] = await heic2any({
      blob: file,
      toType: imageType,
      quality: 0.8,
    });

    if (Array.isArray(blobOrBlobs)) {
      const blob = blobOrBlobs[0];
      return URL.createObjectURL(blob);
    } else {
      return URL.createObjectURL(blobOrBlobs);
    }
  };
