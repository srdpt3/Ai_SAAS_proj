import { PutObjectCommand, S3, S3Client } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";
import uniqid from "uniqid";
export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");
  const { name, type } = file;
  const data = await file.arrayBuffer();
  const s3Client = new S3Client({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.AWS_ACCES_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCES_KEY,
    },
  });
  const id = uniqid();
  const ext = name.split(".").slice(-1);
  const newFile = id + "." + ext;
  const uploadCommand = new PutObjectCommand({
    Bucket: process.env.BUCKET_NAME,
    Body: data,
    ACL: "public-read",
    ContentType: type,
    Key: newFile,
  });
  console.log(file);

  s3Client.send(uploadCommand);

  return NextResponse.json({
    name,
    ext,
    newFile,
  });
}
