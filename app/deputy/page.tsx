import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, CheckCircle, Download, FileText, Users, XCircle } from "lucide-react"

export default function DeputyDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-tight">Welcome, Dr. Williams</h2>
        <p className="text-muted-foreground">Deputy Registrar ID: D12345 | Department: Academic Affairs</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden border-t-4 border-t-rose-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-rose-500/5">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <div className="h-8 w-8 rounded-full bg-rose-500/10 flex items-center justify-center">
              <Users className="h-4 w-4 text-rose-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">Across all departments</p>
            <div className="mt-4 flex flex-wrap gap-1">
              <div className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">320 CS</div>
              <div className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">280 EE</div>
              <div className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800">260 ME</div>
              <div className="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">350 BA</div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-t-4 border-t-purple-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-purple-500/5">
            <CardTitle className="text-sm font-medium">Exemption Requests</CardTitle>
            <div className="h-8 w-8 rounded-full bg-purple-500/10 flex items-center justify-center">
              <FileText className="h-4 w-4 text-purple-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">12 pending review</p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="flex h-full">
                  <div className="h-full bg-yellow-400" style={{ width: "50%" }}></div>
                  <div className="h-full bg-green-500" style={{ width: "25%" }}></div>
                  <div className="h-full bg-red-500" style={{ width: "25%" }}></div>
                </div>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-3 text-xs text-center">
              <div>
                <span className="font-medium text-yellow-600">12</span> Pending
              </div>
              <div>
                <span className="font-medium text-green-600">6</span> Approved
              </div>
              <div>
                <span className="font-medium text-red-600">6</span> Rejected
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-t-4 border-t-green-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-green-500/5">
            <CardTitle className="text-sm font-medium">Approved Exemptions</CardTitle>
            <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-green-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">This semester</p>
            <div className="mt-4 grid grid-cols-6 gap-1">
              {Array(18)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-1.5 rounded-full bg-green-500"></div>
                ))}
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-t-4 border-t-red-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-red-500/5">
            <CardTitle className="text-sm font-medium">Rejected Exemptions</CardTitle>
            <div className="h-8 w-8 rounded-full bg-red-500/10 flex items-center justify-center">
              <XCircle className="h-4 w-4 text-red-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">This semester</p>
            <div className="mt-4 grid grid-cols-6 gap-1">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-1.5 rounded-full bg-red-500"></div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="exemptions">
        <TabsList className="grid w-full grid-cols-2 h-12">
          <TabsTrigger value="exemptions" className="data-[state=active]:bg-rose-500 data-[state=active]:text-white">
            Recent Exemptions
          </TabsTrigger>
          <TabsTrigger value="attendance" className="data-[state=active]:bg-rose-500 data-[state=active]:text-white">
            Attendance Overview
          </TabsTrigger>
        </TabsList>
        <TabsContent value="exemptions" className="space-y-4 mt-6">
          <Card className="overflow-hidden border shadow-md">
            <CardHeader className="bg-rose-500/5 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-rose-700">Recent Exemption Requests</CardTitle>
                <CardDescription>Latest exemption requests requiring your attention</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="text-rose-500 border-rose-500 hover:bg-rose-50">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  {
                    id: "EX-2023-001",
                    student: "John Doe (S12345)",
                    course: "CS401: Artificial Intelligence",
                    examDate: "May 25, 2023",
                    reason: "Medical",
                    status: "Pending",
                    submittedOn: "May 15, 2023",
                  },
                  {
                    id: "EX-2023-004",
                    student: "Emily Wilson (S12349)",
                    course: "CS301: Algorithms",
                    examDate: "June 2, 2023",
                    reason: "Family Emergency",
                    status: "Pending",
                    submittedOn: "May 18, 2023",
                  },
                  {
                    id: "EX-2023-002",
                    student: "Jane Smith (S12346)",
                    course: "CS301: Algorithms",
                    examDate: "April 20, 2023",
                    reason: "Family Emergency",
                    status: "Approved",
                    submittedOn: "April 10, 2023",
                  },
                  {
                    id: "EX-2023-003",
                    student: "Bob Johnson (S12347)",
                    course: "CS201: Data Structures",
                    examDate: "March 15, 2023",
                    reason: "Academic Conflict",
                    status: "Rejected",
                    submittedOn: "March 5, 2023",
                  },
                ].map((request, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 hover:bg-rose-50"
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`h-10 w-10 rounded-full flex items-center justify-center mt-1 ${
                          request.status === "Pending"
                            ? "bg-yellow-100"
                            : request.status === "Approved"
                              ? "bg-green-100"
                              : "bg-red-100"
                        }`}
                      >
                        {request.status === "Pending" ? (
                          <FileText className="h-5 w-5 text-yellow-600" />
                        ) : request.status === "Approved" ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-medium text-rose-700">{request.id}</h3>
                          <span
                            className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                              request.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : request.status === "Approved"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                            }`}
                          >
                            {request.status}
                          </span>
                        </div>
                        <p className="text-sm">
                          {request.student} - {request.course}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Exam: {request.examDate} | Reason: {request.reason}
                        </p>
                        <p className="text-xs text-muted-foreground">Submitted: {request.submittedOn}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-3 md:mt-0 ml-0 md:ml-4">
                      <Button variant="outline" size="sm" className="text-rose-500 border-rose-500 hover:bg-rose-50">
                        View Details
                      </Button>
                      {request.status === "Pending" && (
                        <>
                          <Button variant="outline" size="sm" className="border-red-500 text-red-600 hover:bg-red-50">
                            <XCircle className="mr-2 h-4 w-4" />
                            Reject
                          </Button>
                          <Button size="sm" className="bg-green-500 text-white hover:bg-green-600">
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Approve
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="attendance" className="space-y-4 mt-6">
          <Card className="overflow-hidden border shadow-md">
            <CardHeader className="bg-rose-500/5 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-rose-700">Attendance Overview</CardTitle>
                <CardDescription>Summary of attendance across departments</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="text-rose-500 border-rose-500 hover:bg-rose-50">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  {
                    department: "Computer Science",
                    students: 320,
                    lectureAttendance: "85%",
                    examAttendance: "98%",
                    exemptions: 8,
                    color: "blue",
                  },
                  {
                    department: "Electrical Engineering",
                    students: 280,
                    lectureAttendance: "82%",
                    examAttendance: "97%",
                    exemptions: 6,
                    color: "amber",
                  },
                  {
                    department: "Mechanical Engineering",
                    students: 260,
                    lectureAttendance: "80%",
                    examAttendance: "96%",
                    exemptions: 5,
                    color: "green",
                  },
                  {
                    department: "Business Administration",
                    students: 350,
                    lectureAttendance: "78%",
                    examAttendance: "95%",
                    exemptions: 10,
                    color: "purple",
                  },
                ].map((dept, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 hover:bg-rose-50"
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`h-10 w-10 rounded-full bg-${dept.color}-100 flex items-center justify-center mt-1`}
                      >
                        <Users className={`h-5 w-5 text-${dept.color}-500`} />
                      </div>
                      <div>
                        <h3 className="font-medium text-rose-700">{dept.department}</h3>
                        <p className="text-sm text-muted-foreground">{dept.students} students enrolled</p>
                        <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
                          <div>
                            <p className="text-xs font-medium">Lecture Attendance</p>
                            <div className="flex items-center mt-1">
                              <div className="h-1.5 w-16 rounded-full bg-gray-200 mr-2">
                                <div
                                  className={`h-1.5 rounded-full bg-${dept.color}-500`}
                                  style={{ width: dept.lectureAttendance }}
                                ></div>
                              </div>
                              <p className="text-xs">{dept.lectureAttendance}</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-medium">Exam Attendance</p>
                            <div className="flex items-center mt-1">
                              <div className="h-1.5 w-16 rounded-full bg-gray-200 mr-2">
                                <div
                                  className={`h-1.5 rounded-full bg-${dept.color}-500`}
                                  style={{ width: dept.examAttendance }}
                                ></div>
                              </div>
                              <p className="text-xs">{dept.examAttendance}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center mt-3 md:mt-0 ml-0 md:ml-4">
                      <div className="flex flex-col items-center">
                        <div className="text-2xl font-bold text-rose-600">{dept.exemptions}</div>
                        <p className="text-xs text-muted-foreground">Exemptions</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2 text-rose-500 border-rose-500 hover:bg-rose-50"
                      >
                        <BarChart className="mr-2 h-4 w-4" />
                        View Report
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
