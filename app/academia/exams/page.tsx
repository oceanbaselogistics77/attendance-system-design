import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, CheckCircle, Download, Edit, FileText, Plus, Search, Trash, Users } from "lucide-react"

export default function ExamsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Exam Sessions</h2>
          <p className="text-muted-foreground">Manage and schedule exam sessions</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-amber-500 hover:bg-amber-600">
              <Plus className="mr-2 h-4 w-4" />
              New Exam
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Create New Exam Session</DialogTitle>
              <DialogDescription>Add details to schedule a new exam session</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
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
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="exam-date">Exam Date</Label>
                  <Input id="exam-date" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="exam-time">Exam Time</Label>
                  <Input id="exam-time" type="time" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input id="duration" type="number" defaultValue="180" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Select>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="exam-hall-a">Exam Hall A</SelectItem>
                      <SelectItem value="exam-hall-b">Exam Hall B</SelectItem>
                      <SelectItem value="exam-hall-c">Exam Hall C</SelectItem>
                      <SelectItem value="lecture-hall-1">Lecture Hall 1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="exam-type">Exam Type</Label>
                <Select>
                  <SelectTrigger id="exam-type">
                    <SelectValue placeholder="Select exam type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="midterm">Midterm Exam</SelectItem>
                    <SelectItem value="final">Final Exam</SelectItem>
                    <SelectItem value="quiz">Quiz</SelectItem>
                    <SelectItem value="supplementary">Supplementary Exam</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="invigilators">Invigilators</Label>
                <Textarea id="invigilators" placeholder="Enter names of invigilators" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="instructions">Special Instructions</Label>
                <Textarea id="instructions" placeholder="Enter any special instructions for this exam" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" className="text-amber-500 border-amber-500 hover:bg-amber-50">
                Cancel
              </Button>
              <Button className="bg-amber-500 hover:bg-amber-600">Create Exam</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Exams</CardTitle>
          <CardDescription>Filter exams by course, date, or location</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="grid gap-2">
              <Label htmlFor="search-course">Course</Label>
              <Select>
                <SelectTrigger id="search-course">
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
              <Label htmlFor="search-date-from">From Date</Label>
              <Input id="search-date-from" type="date" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="search-date-to">To Date</Label>
              <Input id="search-date-to" type="date" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="search-location">Location</Label>
              <Select>
                <SelectTrigger id="search-location">
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="exam-hall-a">Exam Hall A</SelectItem>
                  <SelectItem value="exam-hall-b">Exam Hall B</SelectItem>
                  <SelectItem value="exam-hall-c">Exam Hall C</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button className="bg-amber-500 hover:bg-amber-600">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Exams</TabsTrigger>
          <TabsTrigger value="past">Past Exams</TabsTrigger>
          <TabsTrigger value="all">All Exams</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Upcoming Exam Sessions</CardTitle>
                <CardDescription>Exams scheduled in the next 30 days</CardDescription>
              </div>
              <Button variant="outline" className="text-amber-500 border-amber-500 hover:bg-amber-50">
                <Calendar className="mr-2 h-4 w-4" />
                View Calendar
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
                    <TableHead>Type</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      course: "Advanced Algorithms",
                      date: "May 25, 2023",
                      time: "9:00 AM - 12:00 PM",
                      location: "Exam Hall A",
                      type: "Final",
                      students: 38,
                    },
                    {
                      course: "Database Management",
                      date: "May 28, 2023",
                      time: "1:00 PM - 4:00 PM",
                      location: "Exam Hall B",
                      type: "Final",
                      students: 42,
                    },
                    {
                      course: "Computer Networks",
                      date: "June 2, 2023",
                      time: "9:00 AM - 12:00 PM",
                      location: "Exam Hall A",
                      type: "Final",
                      students: 35,
                    },
                    {
                      course: "Software Engineering",
                      date: "June 5, 2023",
                      time: "1:00 PM - 4:00 PM",
                      location: "Exam Hall C",
                      type: "Final",
                      students: 45,
                    },
                    {
                      course: "Artificial Intelligence",
                      date: "June 8, 2023",
                      time: "9:00 AM - 12:00 PM",
                      location: "Exam Hall B",
                      type: "Final",
                      students: 40,
                    },
                  ].map((exam, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{exam.course}</TableCell>
                      <TableCell>{exam.date}</TableCell>
                      <TableCell>{exam.time}</TableCell>
                      <TableCell>{exam.location}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          {exam.type}
                        </span>
                      </TableCell>
                      <TableCell>{exam.students}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Users className="h-4 w-4" />
                            <span className="sr-only">Manage Students</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">Generate Seating Plan</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="past">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Past Exam Sessions</CardTitle>
                <CardDescription>Completed exam sessions</CardDescription>
              </div>
              <Button variant="outline" className="text-amber-500 border-amber-500 hover:bg-amber-50">
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
                    <TableHead>Type</TableHead>
                    <TableHead>Attendance</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      course: "Operating Systems",
                      date: "May 15, 2023",
                      time: "9:00 AM - 12:00 PM",
                      location: "Exam Hall B",
                      type: "Final",
                      students: 36,
                      attendance: 35,
                    },
                    {
                      course: "Web Development",
                      date: "May 12, 2023",
                      time: "1:00 PM - 4:00 PM",
                      location: "Exam Hall A",
                      type: "Final",
                      students: 40,
                      attendance: 38,
                    },
                    {
                      course: "Computer Graphics",
                      date: "May 8, 2023",
                      time: "9:00 AM - 12:00 PM",
                      location: "Exam Hall C",
                      type: "Final",
                      students: 32,
                      attendance: 30,
                    },
                    {
                      course: "Data Mining",
                      date: "May 5, 2023",
                      time: "1:00 PM - 4:00 PM",
                      location: "Exam Hall B",
                      type: "Final",
                      students: 28,
                      attendance: 27,
                    },
                    {
                      course: "Mobile App Development",
                      date: "May 2, 2023",
                      time: "9:00 AM - 12:00 PM",
                      location: "Exam Hall A",
                      type: "Final",
                      students: 34,
                      attendance: 31,
                    },
                  ].map((exam, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{exam.course}</TableCell>
                      <TableCell>{exam.date}</TableCell>
                      <TableCell>{exam.time}</TableCell>
                      <TableCell>{exam.location}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          {exam.type}
                        </span>
                      </TableCell>
                      <TableCell>
                        {exam.attendance}/{exam.students} ({Math.round((exam.attendance / exam.students) * 100)}%)
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="icon">
                            <CheckCircle className="h-4 w-4" />
                            <span className="sr-only">View Attendance</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">View Report</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Download</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="all">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>All Exam Sessions</CardTitle>
                <CardDescription>Complete list of all exam sessions</CardDescription>
              </div>
              <Button variant="outline" className="text-amber-500 border-amber-500 hover:bg-amber-50">
                <Download className="mr-2 h-4 w-4" />
                Export List
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
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      course: "Advanced Algorithms",
                      date: "May 25, 2023",
                      time: "9:00 AM - 12:00 PM",
                      location: "Exam Hall A",
                      type: "Final",
                      status: "Upcoming",
                    },
                    {
                      course: "Operating Systems",
                      date: "May 15, 2023",
                      time: "9:00 AM - 12:00 PM",
                      location: "Exam Hall B",
                      type: "Final",
                      status: "Completed",
                    },
                    {
                      course: "Database Management",
                      date: "May 28, 2023",
                      time: "1:00 PM - 4:00 PM",
                      location: "Exam Hall B",
                      type: "Final",
                      status: "Upcoming",
                    },
                    {
                      course: "Web Development",
                      date: "May 12, 2023",
                      time: "1:00 PM - 4:00 PM",
                      location: "Exam Hall A",
                      type: "Final",
                      status: "Completed",
                    },
                    {
                      course: "Computer Networks",
                      date: "June 2, 2023",
                      time: "9:00 AM - 12:00 PM",
                      location: "Exam Hall A",
                      type: "Final",
                      status: "Upcoming",
                    },
                    {
                      course: "Computer Graphics",
                      date: "May 8, 2023",
                      time: "9:00 AM - 12:00 PM",
                      location: "Exam Hall C",
                      type: "Final",
                      status: "Completed",
                    },
                  ].map((exam, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{exam.course}</TableCell>
                      <TableCell>{exam.date}</TableCell>
                      <TableCell>{exam.time}</TableCell>
                      <TableCell>{exam.location}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          {exam.type}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            exam.status === "Upcoming" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                          }`}
                        >
                          {exam.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="icon">
                            {exam.status === "Upcoming" ? (
                              <Edit className="h-4 w-4" />
                            ) : (
                              <CheckCircle className="h-4 w-4" />
                            )}
                            <span className="sr-only">{exam.status === "Upcoming" ? "Edit" : "View Attendance"}</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">
                              {exam.status === "Upcoming" ? "Generate Seating Plan" : "View Report"}
                            </span>
                          </Button>
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="overflow-hidden border-t-4 border-t-amber-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-amber-500/5">
            <CardTitle className="text-sm font-medium">Upcoming Exams</CardTitle>
            <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center">
              <Calendar className="h-4 w-4 text-amber-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Next: Advanced Algorithms (May 25)</p>
            <div className="mt-4 grid grid-cols-5 gap-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full ${i < 2 ? "bg-amber-500" : "bg-amber-200"}`}></div>
                ))}
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-t-4 border-t-green-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-green-500/5">
            <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
            <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-green-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground text-green-600">+2% from last semester</p>
            <div className="mt-4 h-2 w-full rounded-full bg-green-100">
              <div className="h-2 rounded-full bg-green-500" style={{ width: "94%" }}></div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-t-4 border-t-blue-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-blue-500/5">
            <CardTitle className="text-sm font-medium">Exemption Requests</CardTitle>
            <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
              <FileText className="h-4 w-4 text-blue-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">5 pending approval</p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">5 Pending</div>
              <div className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">3 Approved</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
