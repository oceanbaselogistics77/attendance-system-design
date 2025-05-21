"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Camera, Save, Trash, AlertCircle, CheckCircle } from "lucide-react"
import * as faceapi from "face-api.js"

interface FacialEnrollmentProps {
  studentId?: string
  studentName?: string
  onEnrollmentComplete?: (success: boolean) => void
}

export default function FacialEnrollment({
  studentId = "",
  studentName = "",
  onEnrollmentComplete,
}: FacialEnrollmentProps) {
  const [isStreaming, setIsStreaming] = useState(false)
  const [capturedImages, setCapturedImages] = useState<string[]>([])
  const [permissionDenied, setPermissionDenied] = useState(false)
  const [modelsLoaded, setModelsLoaded] = useState(false)
  const [loadingModels, setLoadingModels] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [id, setId] = useState(studentId)
  const [name, setName] = useState(studentName)
  const [processing, setProcessing] = useState(false)

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

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

  const captureImage = async () => {
    if (!videoRef.current || !canvasRef.current) return

    try {
      setError(null)

      const context = canvasRef.current.getContext("2d")
      if (!context) return

      // Draw the current video frame to the canvas
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height)

      // Detect faces in the captured image
      const detections = await faceapi
        .detectAllFaces(canvasRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()

      if (detections.length === 0) {
        setError("No face detected. Please ensure your face is clearly visible.")
        return
      }

      if (detections.length > 1) {
        setError("Multiple faces detected. Please ensure only one person is in frame.")
        return
      }

      // Get the image data
      const imageSrc = canvasRef.current.toDataURL("image/png")

      // Add to captured images array
      setCapturedImages((prev) => [...prev, imageSrc])

      // Show success message
      setSuccess("Image captured successfully. Please capture at least 3 images from different angles.")

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(null), 3000)
    } catch (err) {
      console.error("Error capturing image:", err)
      setError("An error occurred while capturing the image. Please try again.")
    }
  }

  const removeImage = (index: number) => {
    setCapturedImages((prev) => prev.filter((_, i) => i !== index))
  }

  const saveEnrollment = async () => {
    if (capturedImages.length < 3) {
      setError("Please capture at least 3 images for accurate facial recognition.")
      return
    }

    if (!id || !name) {
      setError("Student ID and name are required.")
      return
    }

    try {
      setProcessing(true)
      setError(null)

      // In a real application, this would:
      // 1. Extract facial descriptors from each image
      // 2. Store them in a database associated with the student ID
      // 3. Potentially train or update the recognition model

      // Simulate processing time
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Show success message
      setSuccess("Facial enrollment completed successfully!")

      // Notify parent component
      if (onEnrollmentComplete) {
        onEnrollmentComplete(true)
      }

      // Reset form after successful enrollment
      setTimeout(() => {
        setCapturedImages([])
        if (!studentId) setId("")
        if (!studentName) setName("")
        setSuccess(null)
      }, 3000)
    } catch (err) {
      console.error("Error saving enrollment:", err)
      setError("An error occurred while saving the enrollment. Please try again.")

      if (onEnrollmentComplete) {
        onEnrollmentComplete(false)
      }
    } finally {
      setProcessing(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Facial Recognition Enrollment</CardTitle>
        <CardDescription>
          Capture multiple facial images to enroll a student in the facial recognition system
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Student Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="student-id">Student ID</Label>
            <Input
              id="student-id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter student ID"
              disabled={!!studentId}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="student-name">Student Name</Label>
            <Input
              id="student-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter student name"
              disabled={!!studentName}
            />
          </div>
        </div>

        {/* Webcam Section */}
        <div className="space-y-4">
          <div className="relative rounded-lg overflow-hidden bg-gray-100 h-[300px]">
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
              width="100%"
              height="100%"
              className={`${isStreaming ? "block" : "hidden"} object-cover h-full w-full`}
              muted
              playsInline
            />

            <canvas ref={canvasRef} width={640} height={480} className="hidden" />
          </div>

          {isStreaming && (
            <div className="flex justify-between">
              <Button onClick={captureImage} className="bg-primary">
                <Camera className="mr-2 h-4 w-4" />
                Capture Image
              </Button>

              <Button onClick={stopWebcam} variant="outline">
                Stop Camera
              </Button>
            </div>
          )}
        </div>

        {/* Error and Success Messages */}
        {error && (
          <div className="bg-red-100 border border-red-500 rounded-lg p-3 flex items-center">
            <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
            <span className="font-medium text-red-800">{error}</span>
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-500 rounded-lg p-3 flex items-center">
            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
            <span className="font-medium text-green-800">{success}</span>
          </div>
        )}

        {/* Captured Images */}
        {capturedImages.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Captured Images ({capturedImages.length}/5)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {capturedImages.map((src, index) => (
                <div key={index} className="relative group">
                  <img
                    src={src || "/placeholder.svg"}
                    alt={`Captured face ${index + 1}`}
                    className="h-24 w-24 object-cover rounded-md border"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removeImage(index)}
                  >
                    <Trash className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => {
            setCapturedImages([])
            if (!studentId) setId("")
            if (!studentName) setName("")
          }}
        >
          Reset
        </Button>
        <Button
          onClick={saveEnrollment}
          disabled={capturedImages.length < 3 || !id || !name || processing}
          className="bg-primary"
        >
          {processing ? (
            <>
              <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
              Processing...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Enrollment
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
