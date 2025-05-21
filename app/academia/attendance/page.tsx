"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Barcode, Camera, Check, Download, Search, X } from "lucide-react"
import WebcamCapture from "@/components/webcam-capture"
import { useToast } from "@/components/ui/use-toast"

export default function ExamAttendancePage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("barcode")
  const [studentId, setStudentId] = useState("")
  const [attendanceList, setAttendanceList] = useState([
    {
      id: "S12345",
      name: "John Doe",
      time: "8:45 AM",
      method: "Barcode",
      status: "Present",
    },
    {
      id: "S12346",
      name: "Jane Smith",
      time: "8:42 AM",
      method: "Facial Recognition",
      status: "Present",
    },
  ])

  const handleSearch = () => {
    if (studentId.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter a student ID",
        variant: "destructive",
      })
      return
    }

    // Check if student already exists in the list
    if (attendanceList.some((student) => student.id === studentId)) {
      toast({
        title: "Student Already Marked",
        description: `${studentId} is already marked present`,
        variant: "destructive",
      })
      return
    }

    // Simulate student lookup from database
    const knownStudents = {
      S12347: "Bob Johnson",
      S12348: "Alice Brown",
      S12349: "Emily Wilson",
      S12350: "Michael Davis",
    }

    if (knownStudents[studentId]) {
      addStudentToAttendance(studentId, knownStudents[studentId], "Barcode")
    } else {
      toast({
        title: "Student Not Found",
        description: `No student found with ID ${studentId}`,
        variant: "destructive",
      })
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const addStudentToAttendance = (id, name, method) => {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const ampm = hours >= 12 ? "PM" : "AM"
    const formattedHours = hours % 12 || 12
    const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, "0")} ${ampm}`

    const newStudent = {
      id,
      name,
      time: formattedTime,
      method,
      status: "Present",
    }

    setAttendanceList([newStudent, ...attendanceList])
    setStudentId("")

    toast({
      title: "Attendance Recorded",
      description: `${name} (${id}) has been marked present`,
    })
  }

  const handleFacialRecognition = (detectedId) => {
    // Simulate student lookup based on the detected ID
    const knownStudents = {
      S12347: "Bob Johnson",
      S12348: "Alice Brown",
      S12349: "Emily Wilson",
      S12350: "Michael Davis",
    }

    if (attendanceList.some((student) => student.id === detectedId)) {
      toast({
        title: "Student Already Marked",
        description: `${detectedId} is already marked present`,
        variant: "destructive",
      })
      return
    }

    if (knownStudents[detectedId]) {
      addStudentToAttendance(detectedId, knownStudents[detectedId], "Facial Recognition")
    }
  }

  const markAttendance = (id, status) => {
    setAttendanceList(attendanceList.map((student) => (student.id === id ? { ...student, status } : student)))

    toast({
      title: `Student ${status}`,
      description: `${id} has been marked ${status.toLowerCase()}`,
    })
  }

  const exportAttendance = () => {
    toast({
      title: "Attendance Exported",
      description: "The attendance record has been exported as CSV.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-tight">Record Exam Attendance</h2>
        <p className="text-muted-foreground">
          Record student attendance for exams using barcode scanning or facial recognition
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select Exam Session</CardTitle>
          <CardDescription>Choose the exam for which you want to record attendance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="course">Exam</Label>
              <Select>
                <SelectTrigger id="course">
                  <SelectValue placeholder="Select exam" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="os">Operating Systems (May 15, 2025)</SelectItem>
                  <SelectItem value="db">Database Management (May 28, 2025)</SelectItem>
                  <SelectItem value="algo">Advanced Algorithms (May 25, 2025)</SelectItem>
                  <SelectItem value="ai">Artificial Intelligence (June 8, 2025)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Select>
                <SelectTrigger id="location">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hall-a">Exam Hall A</SelectItem>
                  <SelectItem value="hall-b">Exam Hall B</SelectItem>
                  <SelectItem value="hall-c">Exam Hall C</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="barcode">
            <Barcode className="mr-2 h-4 w-4" />
            Barcode Scanner
          </TabsTrigger>
          <TabsTrigger value="facial">
            <Camera className="mr-2 h-4 w-4" />
            Facial Recognition
          </TabsTrigger>
        </TabsList>
        <TabsContent value="barcode" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Barcode Scanner</CardTitle>
              <CardDescription>Scan student ID cards to record attendance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-10 text-center">
                <Barcode className="h-10 w-10 text-muted-foreground mb-4" />
                <h3 className="font-medium text-lg">Scan Student ID</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Position the barcode in front of the camera or enter ID manually
                </p>
                <div className="w-full max-w-sm">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Student ID"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      onKeyDown={handleKeyPress}
                    />
                    <Button onClick={handleSearch}>
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="facial" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Facial Recognition</CardTitle>
              <CardDescription>Use facial recognition to record attendance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-10 text-center">
                <WebcamCapture
                  width={400}
                  height={300}
                  onDetect={(detectedId) => handleFacialRecognition(detectedId)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Attendance Record</CardTitle>
            <CardDescription>Students marked present for this exam</CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={exportAttendance}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceList.map((student, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.time}</TableCell>
                  <TableCell>{student.method}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        student.status === "Present" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {student.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="icon" onClick={() => markAttendance(student.id, "Present")}>
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="sr-only">Mark Present</span>
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => markAttendance(student.id, "Absent")}>
                        <X className="h-4 w-4 text-red-600" />
                        <span className="sr-only">Mark Absent</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
