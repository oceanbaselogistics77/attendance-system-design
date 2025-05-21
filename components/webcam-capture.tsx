"use client"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Camera, RefreshCw, UserCheck, AlertCircle } from "lucide-react"
import * as faceapi from "face-api.js"

interface WebcamCaptureProps {
  onCapture?: (imageSrc: string) => void
  onDetect?: (studentId: string) => void
  width?: number
  height?: number
}

export default function WebcamCapture({ onCapture, onDetect, width = 640, height = 480 }: WebcamCaptureProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isStreaming, setIsStreaming] = useState(false)
  const [isRecognizing, setIsRecognizing] = useState(false)
  const [detectedUser, setDetectedUser] = useState<string | null>(null)
  const [permissionDenied, setPermissionDenied] = useState(false)
  const [modelsLoaded, setModelsLoaded] = useState(false)
  const [loadingModels, setLoadingModels] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Load face-api models
  const loadModels = async () => {
    try {
      setLoadingModels(true)
      setError(null)

      // Set the path to the models
      const MODEL_URL = "/models"

      // Load the required models
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
      ])

      setModelsLoaded(true)
      console.log("Face recognition models loaded successfully")
    } catch (err) {
      console.error("Error loading face recognition models:", err)
      setError("Failed to load facial recognition models. Please refresh and try again.")
    } finally {
      setLoadingModels(false)
    }
  }

  useEffect(() => {
    loadModels()

    return () => {
      stopWebcam()
    }
  }, [])

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()
        setIsStreaming(true)
        setPermissionDenied(false)
      }
    } catch (error) {
      console.error("Error accessing webcam:", error)
      setPermissionDenied(true)
    }
  }

  const stopWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      const tracks = stream.getTracks()

      tracks.forEach((track) => {
        track.stop()
      })

      videoRef.current.srcObject = null
      setIsStreaming(false)
    }
  }

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d")

      if (context) {
        context.drawImage(videoRef.current, 0, 0, width, height)
        const imageSrc = canvasRef.current.toDataURL("image/png")

        if (onCapture) {
          onCapture(imageSrc)
        }
      }
    }
  }

  // Function to load student facial data
  const loadLabeledDescriptors = async () => {
    // In a real application, this would load from a database
    // For this example, we'll use mock data

    // Mock student data with facial descriptors
    // In a real system, these would be actual 128-dimensional face descriptors
    const studentData = [
      {
        id: "S12345",
        name: "John Doe",
        descriptors: [new Float32Array(128).fill(0.1)], // Mock descriptor
      },
      {
        id: "S12346",
        name: "Jane Smith",
        descriptors: [new Float32Array(128).fill(0.2)], // Mock descriptor
      },
      {
        id: "S12347",
        name: "Bob Johnson",
        descriptors: [new Float32Array(128).fill(0.3)], // Mock descriptor
      },
      {
        id: "S12348",
        name: "Alice Brown",
        descriptors: [new Float32Array(128).fill(0.4)], // Mock descriptor
      },
    ]

    // Convert to LabeledFaceDescriptors format
    return Promise.all(
      studentData.map(async (student) => {
        return new faceapi.LabeledFaceDescriptors(student.id, student.descriptors)
      }),
    )
  }

  const startRecognition = async () => {
    if (!modelsLoaded) {
      setError("Face recognition models not loaded. Please wait or refresh.")
      return
    }

    if (!videoRef.current || !isStreaming) {
      setError("Webcam not active. Please start the camera first.")
      return
    }

    try {
      setIsRecognizing(true)
      setError(null)

      // Get the face detector options
      const detectionOptions = new faceapi.TinyFaceDetectorOptions({ inputSize: 320 })

      // Detect all faces in the video stream with landmarks and descriptors
      const detections = await faceapi
        .detectAllFaces(videoRef.current, detectionOptions)
        .withFaceLandmarks()
        .withFaceDescriptors()

      if (detections.length === 0) {
        setError("No face detected. Please ensure your face is clearly visible.")
        setIsRecognizing(false)
        return
      }

      if (detections.length > 1) {
        setError("Multiple faces detected. Please ensure only one person is in frame.")
        setIsRecognizing(false)
        return
      }

      // Load the labeled face descriptors (student database)
      const labeledDescriptors = await loadLabeledDescriptors()

      // Create face matcher with labeled descriptors
      const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.6) // 0.6 is the distance threshold

      // Get the best match for the detected face
      const descriptor = detections[0].descriptor
      const match = faceMatcher.findBestMatch(descriptor)

      // If we have a match that's not "unknown"
      if (match && match.label !== "unknown") {
        setDetectedUser(match.label)
        if (onDetect) {
          onDetect(match.label)
        }
      } else {
        setError("Face not recognized. Please try again or use manual entry.")
      }
    } catch (err) {
      console.error("Error during facial recognition:", err)
      setError("An error occurred during facial recognition. Please try again.")
    } finally {
      setIsRecognizing(false)
    }
  }

  const resetDetection = () => {
    setDetectedUser(null)
    setError(null)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative rounded-lg overflow-hidden bg-gray-100 mb-4">
        {!isStreaming && !permissionDenied && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <Button onClick={startWebcam} className="bg-primary" disabled={loadingModels}>
              {loadingModels ? (
                <>
                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                  Loading Models...
                </>
              ) : (
                <>
                  <Camera className="mr-2 h-4 w-4" />
                  Start Camera
                </>
              )}
            </Button>
          </div>
        )}

        {permissionDenied && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 flex-col p-4">
            <div className="text-red-500 mb-2">Camera permission denied</div>
            <p className="text-sm text-gray-500 text-center mb-4">
              Please allow camera access in your browser settings to use facial recognition
            </p>
            <Button onClick={startWebcam} variant="outline">
              Try Again
            </Button>
          </div>
        )}

        <video
          ref={videoRef}
          width={width}
          height={height}
          className={`${isStreaming ? "block" : "hidden"}`}
          muted
          playsInline
        />

        <canvas ref={canvasRef} width={width} height={height} className="hidden" />

        {detectedUser && (
          <div className="absolute bottom-4 left-4 right-4 bg-green-100 border border-green-500 rounded-lg p-3 flex items-center justify-between">
            <div className="flex items-center">
              <UserCheck className="h-5 w-5 text-green-600 mr-2" />
              <span className="font-medium text-green-800">Identified Student: {detectedUser}</span>
            </div>
            <Button size="sm" variant="ghost" onClick={resetDetection}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        )}

        {error && (
          <div className="absolute bottom-4 left-4 right-4 bg-red-100 border border-red-500 rounded-lg p-3 flex items-center justify-between">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
              <span className="font-medium text-red-800">{error}</span>
            </div>
            <Button size="sm" variant="ghost" onClick={resetDetection}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {isStreaming && !detectedUser && (
        <div className="flex gap-2">
          <Button onClick={captureImage} variant="outline" className="border-primary text-primary">
            <Camera className="mr-2 h-4 w-4" />
            Capture Image
          </Button>

          <Button onClick={startRecognition} disabled={isRecognizing || !modelsLoaded} className="bg-primary">
            {isRecognizing ? (
              <>
                <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                Recognizing...
              </>
            ) : (
              <>
                <UserCheck className="mr-2 h-4 w-4" />
                Recognize Student
              </>
            )}
          </Button>

          <Button onClick={stopWebcam} variant="destructive">
            Stop Camera
          </Button>
        </div>
      )}
    </div>
  )
}
