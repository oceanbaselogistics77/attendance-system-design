import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Download, FileText, PieChart, TrendingUp } from "lucide-react"

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-tight">Attendance Reports</h2>
        <p className="text-muted-foreground">Generate and analyze attendance reports for your courses</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Generate Report</CardTitle>
          <CardDescription>Select parameters to generate an attendance report</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="grid gap-2">
              <Label htmlFor="course">Course</Label>
              <Select>
                <SelectTrigger id="course">
                  <SelectValue placeholder="Select course" />
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
            <div className="grid gap-2">
              <Label htmlFor="report-type">Report Type</Label>
              <Select>
                <SelectTrigger id="report-type">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="summary">Summary Report</SelectItem>
                  <SelectItem value="detailed">Detailed Report</SelectItem>
                  <SelectItem value="student">Student-wise Report</SelectItem>
                  <SelectItem value="session">Session-wise Report</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
              <FileText className="mr-2 h-4 w-4" />
              Preview
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Download className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses">Course Analysis</TabsTrigger>
          <TabsTrigger value="students">Student Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4 mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden border-t-4 border-t-blue-500 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-blue-500/5">
                <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
                <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <BarChart className="h-4 w-4 text-blue-500" />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-muted-foreground text-blue-600">+2.5% from last semester</p>
                <div className="mt-4 h-2 w-full rounded-full bg-blue-100">
                  <div className="h-2 rounded-full bg-blue-500" style={{ width: "78%" }}></div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-t-4 border-t-green-500 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-green-500/5">
                <CardTitle className="text-sm font-medium">Highest Attendance</CardTitle>
                <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">92%</div>
                <p className="text-xs text-muted-foreground">CS101: Introduction to Programming</p>
                <div className="mt-4 h-2 w-full rounded-full bg-green-100">
                  <div className="h-2 rounded-full bg-green-500" style={{ width: "92%" }}></div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-t-4 border-t-amber-500 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-amber-500/5">
                <CardTitle className="text-sm font-medium">Lowest Attendance</CardTitle>
                <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-amber-500 rotate-180" />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">65%</div>
                <p className="text-xs text-muted-foreground">CS401: Artificial Intelligence</p>
                <div className="mt-4 h-2 w-full rounded-full bg-amber-100">
                  <div className="h-2 rounded-full bg-amber-500" style={{ width: "65%" }}></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Attendance Trend</CardTitle>
              <CardDescription>Weekly attendance trend across all courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full bg-blue-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart className="h-16 w-16 text-blue-300 mx-auto mb-4" />
                  <p className="text-muted-foreground">Attendance trend chart would appear here</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Showing weekly attendance data for the current semester
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Attendance by Course</CardTitle>
                <CardDescription>Percentage of attendance for each course</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full bg-blue-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="h-16 w-16 text-blue-300 mx-auto mb-4" />
                    <p className="text-muted-foreground">Course attendance chart would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Attendance by Time of Day</CardTitle>
                <CardDescription>Attendance patterns based on session timing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full bg-blue-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart className="h-16 w-16 text-blue-300 mx-auto mb-4" />
                    <p className="text-muted-foreground">Time-based attendance chart would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="courses" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Course-wise Attendance Analysis</CardTitle>
              <CardDescription>Detailed attendance statistics for each course</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {[
                  {
                    course: "CS101: Introduction to Programming",
                    attendance: 92,
                    sessions: 12,
                    students: 45,
                    color: "blue",
                  },
                  {
                    course: "CS201: Data Structures",
                    attendance: 85,
                    sessions: 10,
                    students: 42,
                    color: "green",
                  },
                  {
                    course: "CS301: Algorithms",
                    attendance: 78,
                    sessions: 8,
                    students: 38,
                    color: "purple",
                  },
                  {
                    course: "CS401: Artificial Intelligence",
                    attendance: 65,
                    sessions: 6,
                    students: 35,
                    color: "amber",
                  },
                ].map((course, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">{course.course}</h3>
                      <Button variant="outline" size="sm" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                      </Button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="bg-blue-50 p-3 rounded-md text-center">
                        <p className="text-muted-foreground">Sessions</p>
                        <p className="text-xl font-bold text-blue-600">{course.sessions}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-md text-center">
                        <p className="text-muted-foreground">Students</p>
                        <p className="text-xl font-bold text-blue-600">{course.students}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-md text-center">
                        <p className="text-muted-foreground">Avg. Attendance</p>
                        <p className="text-xl font-bold text-blue-600">{course.attendance}%</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Attendance Rate</span>
                        <span>{course.attendance}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-blue-100">
                        <div
                          className={`h-2 rounded-full bg-${course.color}-500`}
                          style={{ width: `${course.attendance}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="h-[150px] w-full bg-blue-50 rounded-lg flex items-center justify-center mt-2">
                      <div className="text-center">
                        <BarChart className="h-10 w-10 text-blue-300 mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Session-wise attendance chart</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="students" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Student Attendance Analysis</CardTitle>
              <CardDescription>Analyze attendance patterns for individual students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="grid gap-2">
                    <Label htmlFor="course-select">Select Course</Label>
                    <Select defaultValue="cs201">
                      <SelectTrigger id="course-select">
                        <SelectValue placeholder="Select course" />
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
                    <Label htmlFor="attendance-filter">Attendance Filter</Label>
                    <Select defaultValue="all">
                      <SelectTrigger id="attendance-filter">
                        <SelectValue placeholder="Filter by attendance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Students</SelectItem>
                        <SelectItem value="high">High Attendance &gt;85%</SelectItem>
                        <SelectItem value="medium">Medium Attendance 75-85%</SelectItem>
                        <SelectItem value="low">Low Attendance &lt;75%</SelectItem>
                        <SelectItem value="critical">Critical Attendance &lt;65%</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="search-student">Search Student</Label>
                    <div className="flex space-x-2">
                      <Input id="search-student" placeholder="Search by name or ID" />
                      <Button className="bg-blue-500 hover:bg-blue-600">Search</Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="p-4 bg-blue-50 border-b">
                    <h3 className="font-medium">CS201: Data Structures - Student Attendance</h3>
                  </div>
                  <div className="p-0">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="py-3 px-4 text-left font-medium">Student ID</th>
                          <th className="py-3 px-4 text-left font-medium">Name</th>
                          <th className="py-3 px-4 text-left font-medium">Attendance</th>
                          <th className="py-3 px-4 text-left font-medium">Status</th>
                          <th className="py-3 px-4 text-left font-medium">Last Attended</th>
                          <th className="py-3 px-4 text-right font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            id: "S12345",
                            name: "John Doe",
                            attendance: 92,
                            status: "Excellent",
                            lastAttended: "May 20, 2023",
                            statusColor: "green",
                          },
                          {
                            id: "S12346",
                            name: "Jane Smith",
                            attendance: 88,
                            status: "Good",
                            lastAttended: "May 20, 2023",
                            statusColor: "green",
                          },
                          {
                            id: "S12347",
                            name: "Bob Johnson",
                            attendance: 78,
                            status: "Average",
                            lastAttended: "May 18, 2023",
                            statusColor: "yellow",
                          },
                          {
                            id: "S12348",
                            name: "Alice Brown",
                            attendance: 85,
                            status: "Good",
                            lastAttended: "May 20, 2023",
                            statusColor: "green",
                          },
                          {
                            id: "S12349",
                            name: "Emily Wilson",
                            attendance: 62,
                            status: "Poor",
                            lastAttended: "May 15, 2023",
                            statusColor: "red",
                          },
                        ].map((student, index) => (
                          <tr key={index} className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4">{student.id}</td>
                            <td className="py-3 px-4 font-medium">{student.name}</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <div className="h-1.5 w-16 rounded-full bg-gray-200 mr-2">
                                  <div
                                    className={`h-1.5 rounded-full ${
                                      student.attendance > 85
                                        ? "bg-green-500"
                                        : student.attendance > 75
                                          ? "bg-yellow-500"
                                          : "bg-red-500"
                                    }`}
                                    style={{ width: `${student.attendance}%` }}
                                  ></div>
                                </div>
                                <span>{student.attendance}%</span>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  student.statusColor === "green"
                                    ? "bg-green-100 text-green-800"
                                    : student.statusColor === "yellow"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-red-100 text-red-800"
                                }`}
                              >
                                {student.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">{student.lastAttended}</td>
                            <td className="py-3 px-4 text-right">
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-blue-500 border-blue-500 hover:bg-blue-50"
                              >
                                View Details
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
