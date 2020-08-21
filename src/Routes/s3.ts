import express from "express";
import { getListBuckets, s3UploadFile } from "Controllers/s3";
import Multer from "multer";
const s3Route = (app: express.Application) => {
  app.get("/s3/listbuckets", getListBuckets);
  app.post(
    "/s3/upload",
    Multer({ storage: Multer.memoryStorage() }).single("upload"),
    s3UploadFile
  );
};
export default s3Route;
