import { Request, Response } from "express";
import s3 from "Utils/minioConf";

interface MulterRequest extends Request {
  file: any;
}

/**
 * get listBuckets /s3/listBuckets
 * s3 list buckets.
 */
export const getListBuckets = async (req: Request, res: Response) => {
  return s3.listBuckets((err, data) => {
    if (err) {
      console.log("Error", err);
      return res.send({ msg: err });
    } else {
      return res.send({ msg: "ok", data: data.Buckets });
    }
  });
};

/**
 * post uploadfile /s3/upload
 * s3 upload file.
 */
export const s3UploadFile = async (req: MulterRequest, res: Response) => {
  return s3.putObject(
    { Bucket: "place", Key: "dsdsd", Body: req.file.buffer },
    (err, etag) => {
      if (err) {
        res.send({ msg: err });
      }
      res.send({ msg: req.file, etag });
    }
  );
};
