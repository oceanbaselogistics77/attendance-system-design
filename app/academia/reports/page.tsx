"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { BarChart, Download, FileText, Printer, Search, TrendingUp, UserX } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function AcademiaReportsPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("overview")

  const generateReport = () => {
    toast({
      title: "Report Generated",
      description: "The report has been generated and is ready for download.",
    })
  }

  const printReport = () => {
    toast({
      title: "Printing Report",
      description: "The report has been sent to the printer.",
    })
  }

  const exportReport = (format = "PDF") => {
    toast({
      title: "Report Exported",
      description: `The report has been exported as ${format} and is ready for download.`,
    })
  }

  const viewDetails = (id) => {
    toast({
      title: "Viewing Details",
      description: `Details for item ${id} are being loaded.`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-tight">Exam Attendance Reports</h2>
        <p className="text-muted-foreground">Generate and analyze attendance reports for exams</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Generate Report</CardTitle>
          <CardDescription>Select parameters to generate an attendance report</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="grid gap-2">
              <Label htmlFor="exam">Exam</Label>
              <Select>
                <SelectTrigger id="exam">
                  <SelectValue placeholder="Select exam" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Exams</SelectItem>
                  <SelectItem value="os">Operating Systems (May 15, 2025)</SelectItem>
                  <SelectItem value="db">Database Management (May 28, 2025)</SelectItem>
                  <SelectItem value="algo">Advanced Algorithms (May 25, 2025)</SelectItem>
                  <SelectItem value="ai">Artificial Intelligence (June 8, 2025)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date-from">From Date</Label>
              <Input id="date-from" type="date" defaultValue="2025-05-01" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date-to">To Date</Label>
              <Input id="date-to" type="date" defaultValue="2025-06-30" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="report-type">Report Type</Label>
              <Select defaultValue="summary">
                <SelectTrigger id="report-type">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="summary">Summary Report</SelectItem>
                  <SelectItem value="detailed">Detailed Report</SelectItem>
                  <SelectItem value="student">Student-wise Report</SelectItem>
                  <SelectItem value="exam">Exam-wise Report</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <Button
              variant="outline"
              className="text-amber-500 border-amber-500 hover:bg-amber-50"
              onClick={() => printReport()}
            >
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
            <Button
              variant="outline"
              className="text-amber-500 border-amber-500 hover:bg-amber-50"
              onClick={() => exportReport("PDF")}
            >
              <FileText className="mr-2 h-4 w-4" />
              Export PDF
            </Button>
            <Button className="bg-amber-500 hover:bg-amber-600" onClick={() => generateReport()}>
              <Download className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="exams">Exam Analysis</TabsTrigger>
          <TabsTrigger value="students">Student Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4 mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden border-t-4 border-t-amber-500 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-amber-500/5">
                <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
                <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <BarChart className="h-4 w-4 text-amber-500" />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">94%</div>
                <p className="text-xs text-muted-foreground text-amber-600">+3.2% from last semester</p>
                <div className="mt-4 h-2 w-full rounded-full bg-amber-100">
                  <div className="h-2 rounded-full bg-amber-500" style={{ width: "94%" }}></div>
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
                <div className="text-2xl font-bold">98%</div>
                <p className="text-xs text-muted-foreground">Operating Systems (May 15, 2025)</p>
                <div className="mt-4 h-2 w-full rounded-full bg-green-100">
                  <div className="h-2 rounded-full bg-green-500" style={{ width: "98%" }}></div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-t-4 border-t-red-500 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-red-500/5">
                <CardTitle className="text-sm font-medium">Lowest Attendance</CardTitle>
                <div className="h-8 w-8 rounded-full bg-red-500/10 flex items-center justify-center">
                  <UserX className="h-4 w-4 text-red-500" />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">88%</div>
                <p className="text-xs text-muted-foreground">Computer Graphics (May 8, 2025)</p>
                <div className="mt-4 h-2 w-full rounded-full bg-red-100">
                  <div className="h-2 rounded-full bg-red-500" style={{ width: "88%" }}></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Attendance Trend</CardTitle>
              <CardDescription>Monthly attendance trend across all exams</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full bg-amber-50 rounded-lg flex items-center justify-center relative">
                <div className="absolute inset-x-0 bottom-0 h-64 px-6">
                  <div className="relative h-full w-full">
                    {/* Month labels */}
                    <div className="absolute bottom-0 inset-x-0 flex justify-between text-xs text-muted-foreground">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                    </div>

                    {/* Attendance bars */}
                    <div className="absolute bottom-6 inset-x-0 flex justify-between items-end h-48">
                      <div className="w-10 bg-amber-300 rounded-t" style={{ height: "70%" }}></div>
                      <div className="w-10 bg-amber-300 rounded-t" style={{ height: "75%" }}></div>
                      <div className="w-10 bg-amber-300 rounded-t" style={{ height: "85%" }}></div>
                      <div className="w-10 bg-amber-300 rounded-t" style={{ height: "80%" }}></div>
                      <div className="w-10 bg-amber-500 rounded-t" style={{ height: "95%" }}></div>
                      <div className="w-10 bg-amber-500 rounded-t" style={{ height: "90%" }}></div>
                    </div>

                    {/* Percentage labels */}
                    <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-muted-foreground">
                      <span>100%</span>
                      <span>80%</span>
                      <span>60%</span>
                      <span>40%</span>
                      <span>20%</span>
                      <span>0%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Attendance by Exam</CardTitle>
                <CardDescription>Percentage of attendance for each exam</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full rounded-lg flex justify-center relative">
                  <div className="h-64 w-64 relative">
                    {/* Pie chart simulation */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-amber-500 transform origin-center rotate-0"></div>
                      <div className="absolute inset-0 bg-blue-500 transform origin-center rotate-[72deg]"></div>
                      <div className="absolute inset-0 bg-green-500 transform origin-center rotate-[144deg]"></div>
                      <div className="absolute inset-0 bg-purple-500 transform origin-center rotate-[216deg]"></div>
                      <div className="absolute inset-0 bg-red-500 transform origin-center rotate-[288deg]"></div>

                      {/* Center white circle to create donut effect */}
                      <div className="absolute inset-[25%] bg-white rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold">94%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 justify-center mt-4">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-amber-500 mr-1"></div>
                    <span className="text-xs">Operating Systems</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-blue-500 mr-1"></div>
                    <span className="text-xs">Database Mgmt</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-1"></div>
                    <span className="text-xs">Algorithms</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-purple-500 mr-1"></div>
                    <span className="text-xs">AI</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-red-500 mr-1"></div>
                    <span className="text-xs">Graphics</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Attendance by Time of Day</CardTitle>
                <CardDescription>Attendance patterns based on exam timing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full bg-amber-50 rounded-lg flex items-center justify-center relative">
                  <div className="absolute inset-x-0 bottom-0 h-64 px-6">
                    <div className="relative h-full w-full">
                      {/* Time labels */}
                      <div className="absolute bottom-0 inset-x-0 flex justify-between text-xs text-muted-foreground">
                        <span>9 AM</span>
                        <span>11 AM</span>
                        <span>1 PM</span>
                        <span>3 PM</span>
                      </div>

                      {/* Attendance bars */}
                      <div className="absolute bottom-6 inset-x-0 flex justify-between items-end h-48">
                        <div className="w-16 bg-green-500 rounded-t" style={{ height: "95%" }}></div>
                        <div className="w-16 bg-green-400 rounded-t" style={{ height: "90%" }}></div>
                        <div className="w-16 bg-amber-500 rounded-t" style={{ height: "88%" }}></div>
                        <div className="w-16 bg-amber-400 rounded-t" style={{ height: "85%" }}></div>
                      </div>

                      {/* Percentage labels */}
                      <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-muted-foreground">
                        <span>100%</span>
                        <span>80%</span>
                        <span>60%</span>
                        <span>40%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="exams" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Exam-wise Attendance Analysis</CardTitle>
              <CardDescription>Detailed attendance statistics for each exam</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {[
                  {
                    exam: "Operating Systems (May 15, 2025)",
                    attendance: 98,
                    students: 36,
                    exemptions: 1,
                    color: "amber",
                  },
                  {
                    exam: "Database Management (May 28, 2025)",
                    attendance: 92,
                    students: 42,
                    exemptions: 3,
                    color: "blue",
                  },
                  {
                    exam: "Advanced Algorithms (May 25, 2025)",
                    attendance: 94,
                    students: 38,
                    exemptions: 2,
                    color: "green",
                  },
                  {
                    exam: "Artificial Intelligence (June 8, 2025)",
                    attendance: 90,
                    students: 40,
                    exemptions: 4,
                    color: "purple",
                  },
                ].map((exam, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">{exam.exam}</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-amber-500 border-amber-500 hover:bg-amber-50"
                        onClick={() => exportReport("Excel")}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Export
                      </Button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="bg-amber-50 p-3 rounded-md text-center">
                        <p className="text-muted-foreground">Students</p>
                        <p className="text-xl font-bold text-amber-600">{exam.students}</p>
                      </div>
                      <div className="bg-amber-50 p-3 rounded-md text-center">
                        <p className="text-muted-foreground">Attendance</p>
                        <p className="text-xl font-bold text-amber-600">{exam.attendance}%</p>
                      </div>
                      <div className="bg-amber-50 p-3 rounded-md text-center">
                        <p className="text-muted-foreground">Exemptions</p>
                        <p className="text-xl font-bold text-amber-600">{exam.exemptions}</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Attendance Rate</span>
                        <span>{exam.attendance}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-amber-100">
                        <div
                          className={`h-2 rounded-full bg-${exam.color}-500`}
                          style={{ width: `${exam.attendance}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="h-[150px] w-full bg-amber-50 rounded-lg flex items-center justify-center mt-2 relative">
                      <div className="absolute inset-x-0 bottom-0 h-32 px-6">
                        <div className="relative h-full w-full">
                          <div className="absolute bottom-0 inset-x-0 flex justify-between text-xs text-muted-foreground">
                            <span>Section A</span>
                            <span>Section B</span>
                            <span>Section C</span>
                            <span>Section D</span>
                          </div>

                          <div className="absolute bottom-6 inset-x-0 flex justify-between items-end h-20">
                            <div className={`w-16 bg-${exam.color}-500 rounded-t`} style={{ height: "95%" }}></div>
                            <div className={`w-16 bg-${exam.color}-500 rounded-t`} style={{ height: "98%" }}></div>
                            <div className={`w-16 bg-${exam.color}-500 rounded-t`} style={{ height: "92%" }}></div>
                            <div className={`w-16 bg-${exam.color}-500 rounded-t`} style={{ height: "94%" }}></div>
                          </div>
                        </div>
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
                    <Label htmlFor="exam-select">Select Exam</Label>
                    <Select defaultValue="os">
                      <SelectTrigger id="exam-select">
                        <SelectValue placeholder="Select exam" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Exams</SelectItem>
                        <SelectItem value="os">Operating Systems (May 15, 2025)</SelectItem>
                        <SelectItem value="db">Database Management (May 28, 2025)</SelectItem>
                        <SelectItem value="algo">Advanced Algorithms (May 25, 2025)</SelectItem>
                        <SelectItem value="ai">Artificial Intelligence (June 8, 2025)</SelectItem>
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
                        <SelectItem value="present">Present</SelectItem>
                        <SelectItem value="absent">Absent</SelectItem>
                        <SelectItem value="exempted">Exempted</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="search-student">Search Student</Label>
                    <div className="flex space-x-2">
                      <Input id="search-student" placeholder="Search by name or ID" />
                      <Button className="bg-amber-500 hover:bg-amber-600">
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="p-4 bg-amber-50 border-b">
                    <h3 className="font-medium">Operating Systems (May 15, 2025) - Student Attendance</h3>
                  </div>
                  <div className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Student ID</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Check-in Time</TableHead>
                          <TableHead>Verification Method</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            id: "S12345",
                            name: "John Doe",
                            status: "Present",
                            checkin: "8:45 AM",
                            method: "Facial Recognition",
                            statusColor: "green",
                          },
                          {
                            id: "S12346",
                            name: "Jane Smith",
                            status: "Present",
                            checkin: "8:40 AM",
                            method: "Barcode",
                            statusColor: "green",
                          },
                          {
                            id: "S12347",
                            name: "Bob Johnson",
                            status: "Present",
                            checkin: "8:50 AM",
                            method: "Facial Recognition",
                            statusColor: "green",
                          },
                          {
                            id: "S12348",
                            name: "Alice Brown",
                            status: "Present",
                            checkin: "8:42 AM",
                            method: "Barcode",
                            statusColor: "green",
                          },
                          {
                            id: "S12349",
                            name: "Emily Wilson",
                            status: "Exempted",
                            checkin: "N/A",
                            method: "N/A",
                            statusColor: "amber",
                          },
                          {
                            id: "S12350",
                            name: "Michael Davis",
                            status: "Absent",
                            checkin: "N/A",
                            method: "N/A",
                            statusColor: "red",
                          },
                        ].map((student, index) => (
                          <TableRow key={index}>
                            <TableCell>{student.id}</TableCell>
                            <TableCell className="font-medium">{student.name}</TableCell>
                            <TableCell>
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  student.statusColor === "green"
                                    ? "bg-green-100 text-green-800"
                                    : student.statusColor === "amber"
                                      ? "bg-amber-100 text-amber-800"
                                      : "bg-red-100 text-red-800"
                                }`}
                              >
                                {student.status}
                              </span>
                            </TableCell>
                            <TableCell>{student.checkin}</TableCell>
                            <TableCell>{student.method}</TableCell>
                            <TableCell>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-amber-500 border-amber-500 hover:bg-amber-50"
                                onClick={() => viewDetails(student.id)}
                              >
                                View Details
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
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
