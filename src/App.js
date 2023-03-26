import AWS from 'aws-sdk';
import { useState } from 'react';
AWS.config.update({
  accessKeyId: 'AKIARPM7H5Z25L5NL2QY',
  secretAccessKey: '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',
  region: 'us-east-1',
  signatureVersion: 'v4',
});

export default function ImageUploader() {
  const s3 = new AWS.S3();
  const [imageUrl, setImageUrl] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  }
  const uploadToS3 = async () => {
    if (!file) {
      console.log("Hello");
      alert('Hello');
      return;
    }
    const params = { 
      Bucket: 'miniproj12', 
      Key: `${Date.now()}.${file.name}`, 
      Body: file 
    };
    const { Location } = await s3.upload(params).promise();
    setImageUrl(Location);
    console.log('uploading to s3', Location);
  }
  return (
    <div style={{ marginTop: '150px' }}>
      <h1>Test Image Upload</h1>
      <input type="file" onChange={handleFileSelect} />
      {file && (
        <div style={{ marginTop: '10px' }}>
          <button onClick={uploadToS3}>Upload</button>
        </div>
      )}
      {imageUrl && (
        <div style={{ marginTop: '10px' }}>
          <img src={imageUrl} alt="uploaded" />
        </div>
      )}
    </div>
  );
}

