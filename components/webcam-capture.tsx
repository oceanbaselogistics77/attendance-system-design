"use client"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Camera, RefreshCw, UserCheck } from "lucide-react"

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

  const startRecognition = () => {
    setIsRecognizing(true)

    // Simulate facial recognition process
    setTimeout(() => {
      // Mock detection - in a real app, this would use actual facial recognition
      const mockStudentIds = ["S12345", "S12346", "S12347", "S12348"]
      const detectedId = mockStudentIds[Math.floor(Math.random() * mockStudentIds.length)]

      setDetectedUser(detectedId)
      if (onDetect) {
        onDetect(detectedId)
      }

      setIsRecognizing(false)
    }, 2000)
  }

  const resetDetection = () => {
    setDetectedUser(null)
  }

  useEffect(() => {
    return () => {
      stopWebcam()
    }
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div className="relative rounded-lg overflow-hidden bg-gray-100 mb-4">
        {!isStreaming && !permissionDenied && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <Button onClick={startWebcam} className="bg-primary">
              <Camera className="mr-2 h-4 w-4" />
              Start Camera
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
      </div>

      {isStreaming && !detectedUser && (
        <div className="flex gap-2">
          <Button onClick={captureImage} variant="outline" className="border-primary text-primary">
            <Camera className="mr-2 h-4 w-4" />
            Capture Image
          </Button>

          <Button onClick={startRecognition} disabled={isRecognizing} className="bg-primary">
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
