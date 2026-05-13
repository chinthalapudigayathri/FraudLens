import { S3Client } from "@aws-sdk/client-s3";

// Create and export a reusable S3 client
export const s3 = new S3Client({
  region: "us-east-1", // change to your AWS region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ""
  }
});
