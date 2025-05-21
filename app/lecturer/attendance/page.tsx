"use client"

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

export default function AttendancePage() {
  const { toast } = useToast()

  const markAttendance = (studentId, status) => {
    toast({
      title: `Student ${status}`,
      description: `${studentId} has been marked ${status.toLowerCase()}`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-tight">Record Attendance</h2>
        <p className="text-muted-foreground">Record student attendance using barcode scanning or facial recognition</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select Session</CardTitle>
          <CardDescription>Choose the session for which you want to record attendance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="course">Course</Label>
              <Select>
                <SelectTrigger id="course">
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cs101">CS101: Introduction to Programming</SelectItem>
                  <SelectItem value="cs201">CS201: Data Structures</SelectItem>
                  <SelectItem value="cs301">CS301: Algorithms</SelectItem>
                  <SelectItem value="cs401">CS401: Artificial Intelligence</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="session">Session</Label>
              <Select>
                <SelectTrigger id="session">
                  <SelectValue placeholder="Select session" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="may23">May 23, 2025 (10:00 AM)</SelectItem>
                  <SelectItem value="may24">May 24, 2025 (2:00 PM)</SelectItem>
                  <SelectItem value="may26">May 26, 2025 (9:00 AM)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="barcode">
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
                <p className="text-sm text-muted-foreground mb-4">Position the barcode in front of the camera</p>
                <div className="w-full max-w-sm">
                  <div className="flex space-x-2">
                    <Input placeholder="Student ID" />
                    <Button>
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
                <Camera className="h-10 w-10 text-muted-foreground mb-4" />
                <h3 className="font-medium text-lg">Camera Feed</h3>
                <p className="text-sm text-muted-foreground mb-4">Position students in front of the camera</p>
                <WebcamCapture
                  width={400}
                  height={300}
                  onDetect={(studentId) => {
                    console.log(`Student detected: ${studentId}`)
                    // In a real app, this would call an API to mark attendance
                    toast({
                      title: "Student Identified",
                      description: `${studentId} has been marked present`,
                    })
                  }}
                />
                <Button className="mt-4">Start Recognition</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Attendance Record</CardTitle>
            <CardDescription>Students marked present for this session</CardDescription>
          </div>
          <Button variant="outline" size="sm">
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
              {[
                {
                  id: "S12345",
                  name: "John Doe",
                  time: "10:05 AM",
                  method: "Barcode",
                  status: "Present",
                },
                {
                  id: "S12346",
                  name: "Jane Smith",
                  time: "10:02 AM",
                  method: "Facial Recognition",
                  status: "Present",
                },
                {
                  id: "S12347",
                  name: "Bob Johnson",
                  time: "10:10 AM",
                  method: "Barcode",
                  status: "Present",
                },
                {
                  id: "S12348",
                  name: "Alice Brown",
                  time: "10:08 AM",
                  method: "Facial Recognition",
                  status: "Present",
                },
              ].map((student, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.time}</TableCell>
                  <TableCell>{student.method}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
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
