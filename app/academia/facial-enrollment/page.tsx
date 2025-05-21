"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, UserPlus, Edit, Trash } from "lucide-react"
import FacialEnrollment from "@/components/facial-enrollment"
import { useToast } from "@/components/ui/use-toast"

export default function FacialEnrollmentPage() {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStudent, setSelectedStudent] = useState<{ id: string; name: string } | null>(null)
  const [enrolledStudents, setEnrolledStudents] = useState([
    { id: "S12345", name: "John Doe", enrolled: true, date: "May 10, 2025" },
    { id: "S12346", name: "Jane Smith", enrolled: true, date: "May 11, 2025" },
    { id: "S12349", name: "Emily Wilson", enrolled: false, date: "" },
    { id: "S12350", name: "Michael Davis", enrolled: false, date: "" },
  ])

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter a student ID or name",
        variant: "destructive",
      })
      return
    }

    // Simulate student lookup
    const foundStudent = enrolledStudents.find(
      (student) =>
        student.id.toLowerCase() === searchQuery.toLowerCase() ||
        student.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    if (foundStudent) {
      setSelectedStudent({ id: foundStudent.id, name: foundStudent.name })
      toast({
        title: "Student Found",
        description: `${foundStudent.name} (${foundStudent.id}) has been selected for enrollment`,
      })
    } else {
      toast({
        title: "Student Not Found",
        description: "No student found with the provided ID or name",
        variant: "destructive",
      })
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const handleEnrollmentComplete = (success: boolean) => {
    if (success && selectedStudent) {
      // Update the enrolled students list
      setEnrolledStudents(
        enrolledStudents.map((student) =>
          student.id === selectedStudent.id
            ? {
                ...student,
                enrolled: true,
                date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
              }
            : student,
        ),
      )

      toast({
        title: "Enrollment Successful",
        description: `${selectedStudent.name} has been enrolled in facial recognition`,
      })

      // Reset selected student
      setSelectedStudent(null)
      setSearchQuery("")
    } else {
      toast({
        title: "Enrollment Failed",
        description: "There was an error enrolling the student. Please try again.",
        variant: "destructive",
      })
    }
  }

  const deleteEnrollment = (id: string) => {
    setEnrolledStudents(
      enrolledStudents.map((student) => (student.id === id ? { ...student, enrolled: false, date: "" } : student)),
    )

    toast({
      title: "Enrollment Deleted",
      description: `Facial recognition enrollment has been removed for student ${id}`,
    })
  }

  const editEnrollment = (id: string, name: string) => {
    setSelectedStudent({ id, name })

    toast({
      title: "Edit Enrollment",
      description: `You can now update the facial recognition enrollment for ${name}`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-tight">Facial Recognition Enrollment</h2>
        <p className="text-muted-foreground">
          Enroll students in the facial recognition system for automated attendance
        </p>
      </div>

      <Tabs defaultValue="enroll">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="enroll">Enroll Student</TabsTrigger>
          <TabsTrigger value="manage">Manage Enrollments</TabsTrigger>
        </TabsList>

        <TabsContent value="enroll" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Student Search</CardTitle>
              <CardDescription>Search for a student to enroll in facial recognition</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter student ID or name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <Button onClick={handleSearch}>
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          {selectedStudent ? (
            <FacialEnrollment
              studentId={selectedStudent.id}
              studentName={selectedStudent.name}
              onEnrollmentComplete={handleEnrollmentComplete}
            />
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>New Student Enrollment</CardTitle>
                <CardDescription>Enroll a new student in the facial recognition system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-10 text-center">
                  <UserPlus className="h-10 w-10 text-muted-foreground mb-4" />
                  <h3 className="font-medium text-lg">No Student Selected</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Search for a student above or manually enter student details below
                  </p>
                  <Button onClick={() => setSelectedStudent({ id: "", name: "" })}>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Manual Enrollment
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="manage">
          <Card>
            <CardHeader>
              <CardTitle>Manage Facial Recognition Enrollments</CardTitle>
              <CardDescription>View and manage student enrollments in the facial recognition system</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Enrollment Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {enrolledStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.id}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>
                        {student.enrolled ? (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Enrolled
                          </span>
                        ) : (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            Not Enrolled
                          </span>
                        )}
                      </TableCell>
                      <TableCell>{student.date || "—"}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          {student.enrolled ? (
                            <>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => editEnrollment(student.id, student.name)}
                              >
                                <Edit className="h-4 w-4 text-blue-600" />
                                <span className="sr-only">Edit</span>
                              </Button>
                              <Button variant="ghost" size="icon" onClick={() => deleteEnrollment(student.id)}>
                                <Trash className="h-4 w-4 text-red-600" />
                                <span className="sr-only">Delete</span>
                              </Button>
                            </>
                          ) : (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => setSelectedStudent({ id: student.id, name: student.name })}
                            >
                              <UserPlus className="h-4 w-4 text-green-600" />
                              <span className="sr-only">Enroll</span>
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
