import imag from './cloud.png';
import './App.css';
import React, {useState} from 'react';
// import ReactS3 from 'react-s3'
import S3 from 'react-aws-s3'

const config={
  accessKeyId:'AKIARP76KWTXZEGRKVXD',
  secretAccessKey:'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',
  region:'ap-south-1',
  bucketName:'miniproj1',
}
function App() {
  var nme = "Madhavan"
  const [file, setFile] = useState()
  const handleFileInput = (e) => {
    setFile(e.target.files[0]);
  }

  const uploadfile=async(file)=> {
    const ReactS3Client = new S3(config);
    ReactS3Client.uploadFile(file,file.name).then(data=>{
      console.log(data.location)
    })
  }
  // function handleSubmit(event) {
  //   event.preventDefault()
  //   const url = 'http://localhost:3000/uploadFile';
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('fileName', file.name);
  //   const config = {
  //     headers: {
  //       'content-type': 'multipart/form-data',
  //     },
  //   };
  //   axios.post(url, formData, config).then((response) => {
  //     console.log(response.data);
  //   });
// }

  return (
    <div className="App">
      <h1>Welcome {nme}</h1>
      <div className='box'>
        <div className="card one">
          <img src={imag} alt="" />
          <div className="container">
            <h4><b>Upload</b></h4>
            <form id="fileform" >
              <input type="file" id="myFile" name="filename"onChange={handleFileInput}/>
              <div className='btn'>
                <input type="submit" id='subbtn' onClick={()=>uploadfile(file)}/>
              </div>
            </form>
          </div>
        </div>
        <div className="vertical"></div>
        <div className='boxr'>
          <div className="card two">
            <img src={imag} alt="" />
            <div className="container">
              <h4><b>Retrieve</b></h4>
              <form id=''>
                <p>Link</p>
                <input type="text" id="txt" />
                <div className='btn'>
                  <input type="submit" id='subbtn' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;


