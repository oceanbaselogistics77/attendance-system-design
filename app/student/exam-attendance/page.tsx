import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, CheckCircle, Download, FileText, Search } from "lucide-react"

export default function ExamAttendancePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-tight">Exam Attendance</h2>
        <p className="text-muted-foreground">View and track your attendance for all exam sessions</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden border-t-4 border-t-blue-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-blue-500/5">
            <CardTitle className="text-sm font-medium">Overall Attendance</CardTitle>
            <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Calendar className="h-4 w-4 text-blue-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">100%</div>
            <p className="text-xs text-muted-foreground">5/5 exams attended</p>
            <div className="mt-4 h-2 w-full rounded-full bg-blue-500/20">
              <div className="h-2 rounded-full bg-blue-500" style={{ width: "100%" }}></div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-t-4 border-t-green-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-green-500/5">
            <CardTitle className="text-sm font-medium">Present</CardTitle>
            <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-green-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Exams attended</p>
            <div className="mt-4 h-2 w-full rounded-full bg-green-500/20">
              <div className="h-2 rounded-full bg-green-500" style={{ width: "100%" }}></div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-t-4 border-t-amber-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-amber-500/5">
            <CardTitle className="text-sm font-medium">Exemptions</CardTitle>
            <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center">
              <FileText className="h-4 w-4 text-amber-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Approved exemption</p>
            <div className="mt-4 flex items-center">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Approved</span>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-t-4 border-t-rose-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-rose-500/5">
            <CardTitle className="text-sm font-medium">Next Exam</CardTitle>
            <div className="h-8 w-8 rounded-full bg-rose-500/10 flex items-center justify-center">
              <Calendar className="h-4 w-4 text-rose-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-lg font-bold">Advanced Algorithms</div>
            <p className="text-xs text-muted-foreground">May 25, 9:00 AM</p>
            <div className="mt-4 flex items-center">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800">Exam Hall A</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Search Exam Records</CardTitle>
            <CardDescription>Filter your exam attendance records by course or date</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="grid gap-2">
              <Label htmlFor="course">Course</Label>
              <Select>
                <SelectTrigger id="course">
                  <SelectValue placeholder="All Courses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courses</SelectItem>
                  <SelectItem value="cs101">CS101: Introduction to Programming</SelectItem>
                  <SelectItem value="cs201">CS201: Data Structures</SelectItem>
                  <SelectItem value="cs301">CS301: Algorithms</SelectItem>
                  <SelectItem value="cs401">CS401: Artificial Intelligence</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date-from">From Date</Label>
              <Input id="date-from" type="date" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date-to">To Date</Label>
              <Input id="date-to" type="date" />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Exams</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Exams</TabsTrigger>
          <TabsTrigger value="exemptions">Exemptions</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>All Exam Sessions</CardTitle>
                <CardDescription>Your attendance record for all exam sessions</CardDescription>
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
                    <TableHead>Course</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Check-in Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      course: "Operating Systems",
                      date: "May 5, 2023",
                      time: "9:00 AM - 12:00 PM",
                      location: "Exam Hall B",
                      status: "Present",
                      checkin: "8:45 AM",
                    },
                    {
                      course: "Computer Architecture",
                      date: "May 2, 2023",
                      time: "1:00 PM - 4:00 PM",
                      location: "Exam Hall A",
                      status: "Present",
                      checkin: "12:45 PM",
                    },
                    {
                      course: "Programming Languages",
                      date: "April 28, 2023",
                      time: "9:00 AM - 12:00 PM",
                      location: "Exam Hall C",
                      status: "Present",
                      checkin: "8:40 AM",
                    },
                    {
                      course: "Web Development",
                      date: "April 25, 2023",
                      time: "1:00 PM - 4:00 PM",
                      location: "Exam Hall A",
                      status: "Present",
                      checkin: "12:50 PM",
                    },
                    {
                      course: "Computer Graphics",
                      date: "April 20, 2023",
                      time: "9:00 AM - 12:00 PM",
                      location: "Exam Hall B",
                      status: "Present",
                      checkin: "8:35 AM",
                    },
                    {
                      course: "Database Management",
                      date: "April 15, 2023",
                      time: "1:00 PM - 4:00 PM",
                      location: "Exam Hall C",
                      status: "Exempted",
                      checkin: "N/A",
                    },
                  ].map((exam, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{exam.course}</TableCell>
                      <TableCell>{exam.date}</TableCell>
                      <TableCell>{exam.time}</TableCell>
                      <TableCell>{exam.location}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            exam.status === "Present"
                              ? "bg-green-100 text-green-800"
                              : exam.status === "Exempted"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {exam.status}
                        </span>
                      </TableCell>
                      <TableCell>{exam.checkin}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="upcoming">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Upcoming Exams</CardTitle>
                <CardDescription>Your scheduled upcoming exams</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Seat Number</TableHead>
                    <TableHead>Instructions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      course: "Advanced Algorithms",
                      date: "May 25, 2023",
                      time: "9:00 AM - 12:00 PM",
                      location: "Exam Hall A",
                      seat: "A-15",
                      instructions: "Bring calculator and student ID",
                    },
                    {
                      course: "Database Management",
                      date: "May 28, 2023",
                      time: "1:00 PM - 4:00 PM",
                      location: "Exam Hall B",
                      seat: "B-22",
                      instructions: "Bring student ID",
                    },
                  ].map((exam, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{exam.course}</TableCell>
                      <TableCell>{exam.date}</TableCell>
                      <TableCell>{exam.time}</TableCell>
                      <TableCell>{exam.location}</TableCell>
                      <TableCell>{exam.seat}</TableCell>
                      <TableCell>{exam.instructions}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="exemptions">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Exemption Requests</CardTitle>
                <CardDescription>Your exam exemption requests and their status</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Request ID</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Exam Date</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Submitted On</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "EX-2023-001",
                      course: "CS401: Artificial Intelligence",
                      examDate: "May 25, 2023",
                      reason: "Medical",
                      submittedOn: "May 15, 2023",
                      status: "Pending",
                    },
                    {
                      id: "EX-2023-002",
                      course: "CS301: Algorithms",
                      examDate: "April 20, 2023",
                      reason: "Family Emergency",
                      submittedOn: "April 10, 2023",
                      status: "Approved",
                    },
                    {
                      id: "EX-2023-003",
                      course: "CS201: Data Structures",
                      examDate: "March 15, 2023",
                      reason: "Academic Conflict",
                      submittedOn: "March 5, 2023",
                      status: "Rejected",
                    },
                  ].map((request, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{request.id}</TableCell>
                      <TableCell>{request.course}</TableCell>
                      <TableCell>{request.examDate}</TableCell>
                      <TableCell>{request.reason}</TableCell>
                      <TableCell>{request.submittedOn}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            request.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : request.status === "Approved"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {request.status}
                        </span>
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
