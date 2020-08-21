import AWS from "aws-sdk";
const s3 = new AWS.S3({
  accessKeyId: "QHGA835WJ8OXI2R32DY01",
  secretAccessKey: "kyBwRFAxB7N6pT5rKKBs3zYVtZ2wVaKYQl6uNuVfY",
  endpoint: "5c770728bf6fa1001152cbef.liara.space",
  s3ForcePathStyle: true, // needed with minio?
  signatureVersion: "v4",
});
export default s3;
