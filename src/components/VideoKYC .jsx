import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const VideoKYC = () => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [videoSaved, setVideoSaved] = useState(false);
  const [isCameraStarted, setIsCameraStarted] = useState(false);

  const startCamera = () => {
    setIsCameraStarted(true);
  };

  const stopCamera = () => {
    setIsCameraStarted(false);
  };

  const startRecording = () => {
    if (webcamRef.current && webcamRef.current.stream) {
      const mediaRecorder = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm",
      });
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.ondataavailable = handleDataAvailable;
      mediaRecorder.start();
      setIsRecording(true);
      setVideoSaved(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
    stopCamera(); // Stop the camera when recording stops
  };

  const handleDataAvailable = (event) => {
    if (event.data && event.data.size > 0) {
      setRecordedChunks((prev) => prev.concat(event.data));
    }
  };

  const handleSave = () => {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const videoURL = URL.createObjectURL(blob);

    // Example: Upload to backend
    const formData = new FormData();
    formData.append("video", blob, "kyc-video.webm");

    fetch("https://your-backend-endpoint/kyc-upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Upload success:", data);
      })
      .catch((error) => {
        console.error("Upload error:", error);
      });

    setVideoSaved(true);
    alert(`Video saved and uploaded successfully!`);
  };

  const handleDelete = () => {
    setRecordedChunks([]);
    setVideoSaved(false);
    startCamera(); // Restart the camera for re-recording
  };

  return (
    <div className="video-kyc">
      {/* Button to start or stop the camera */}
      {!isCameraStarted ? (
        <button
          style={{
            fontSize: 16,
            fontWeight: "bold",
            borderRadius: 30,
            borderWidth: 0,
            marginTop: 15,
            padding: "10px 32px",
            color: "white",
            backgroundColor: "green",
          }}
          onClick={startCamera}
        >
          Start Camera
        </button>
      ) : (
        <button
          style={{
            fontSize: 16,
            fontWeight: "bold",
            borderRadius: 30,
            borderWidth: 0,
            marginTop: 15,
            padding: "10px 32px",
            color: "white",
            backgroundColor: "green",
          }}
          onClick={stopCamera}
        >
          Stop Camera
        </button>
      )}

      {/* Webcam live feed */}
      {isCameraStarted && !videoSaved && (
        <div style={{ margin: "10px" }}>
          <Webcam
            ref={webcamRef}
            audio={true}
            style={{
              width: "70%", // Adjust the width as needed for smaller size
              height: "auto",
              borderRadius: "15px", // Makes the edges rounded
              overflow: "hidden", // Ensures content stays within the rounded edges
            }}
          />
        </div>
      )}

      {/* Buttons for recording flow */}
      {!isRecording &&
        recordedChunks.length === 0 &&
        !videoSaved &&
        isCameraStarted && (
          <button
            style={{
              fontSize: 16,
              fontWeight: "bold",
              borderRadius: 30,
              borderWidth: 0,
              marginTop: 15,
              padding: "10px 32px",
              color: "white",
              backgroundColor: "green",
            }}
            onClick={startRecording}
          >
            Start Recording
          </button>
        )}
      {isRecording && (
        <button
          style={{
            fontSize: 16,
            fontWeight: "bold",
            borderRadius: 30,
            borderWidth: 0,
            marginTop: 15,
            padding: "10px 32px",
            color: "white",
            backgroundColor: "green",
          }}
          onClick={stopRecording}
        >
          Stop Recording
        </button>
      )}
      {!isRecording && recordedChunks.length > 0 && !videoSaved && (
        <div>
          <button
            style={{
              fontSize: 16,
              fontWeight: "bold",
              borderRadius: 30,
              borderWidth: 0,
              marginTop: 15,
              padding: "10px 32px",
              color: "white",
              backgroundColor: "green",
            }}
            onClick={handleDelete}
          >
            Delete & Re-record
          </button>
          <div
            className="bottom-fix-btn onboarding-next-btn-new-payment update-info-btn"
            onClick={handleSave}
          >
            Update Changes
          </div>
        </div>
      )}

      {/* Preview of saved video */}
      {videoSaved && (
        <div>
          <h3>Recorded Video</h3>
          <video
            src={URL.createObjectURL(
              new Blob(recordedChunks, { type: "video/webm" })
            )}
            controls
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
};

export default VideoKYC;
