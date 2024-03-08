"use client";
import { CldUploadWidget } from "next-cloudinary";

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="loakxkgm">
      {({ open }) => (
        <button className="btn btn-primary" onClick={() => open()}>
          Upload an Image
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadPage;
