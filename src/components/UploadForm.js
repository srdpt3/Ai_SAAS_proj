"use client";
import axios from "axios";
import UploadIcon from "./uploadIcon";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadForm() {
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();
  async function upload(ev) {
    ev.preventDefault();
    const files = ev.target?.files;
    if (files.length > 0) {
      const file = files[0];
      setIsUploading(true);
      const res = await axios.postForm("/api/upload", {
        file,
      });
      setIsUploading(false);
      console.log(res.data);
      const newFile = res.data.newFile;
      router.push("/" + newFile);
    }
  }
  return (
    <>
      {isUploading && (
        <div className="bg-black/90 text-white fixed inset-0 flex items-center">
          <div className="w-full text-center">
            <h2 className="text-4xl mb-4">Uploading</h2>
            <h3 className="text-xl">Please wait...</h3>
          </div>
        </div>
      )}
      <label className="bg-green-500 px-6 py-3 rounded-full inline-flex gap-2  border-3 border-purple-700/50 cursor-pointer">
        <UploadIcon />
        <span> Choose file</span>
        <input onChange={upload} type="file" className="hidden"></input>
      </label>
    </>
  );
}
