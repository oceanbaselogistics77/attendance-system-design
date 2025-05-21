import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Calendar, CheckCircle, Download, FileText } from "lucide-react"

export default function AcademiaDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-tight">Welcome, Ms. Johnson</h2>
        <p className="text-muted-foreground">Academia Staff ID: A12345 | Department: Examinations</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden border-t-4 border-t-amber-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-amber-500/5">
            <CardTitle className="text-sm font-medium">Total Exams</CardTitle>
            <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center">
              <Calendar className="h-4 w-4 text-amber-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">This semester</p>
            <div className="mt-4 grid grid-cols-6 gap-1">
              {Array(18)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full ${i < 13 ? "bg-amber-500" : "bg-amber-200"}`}></div>
                ))}
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-t-4 border-t-emerald-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-emerald-500/5">
            <CardTitle className="text-sm font-medium">Upcoming Exams</CardTitle>
            <div className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Next: Advanced Algorithms</p>
            <div className="mt-4 flex items-center">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">May 25</span>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-t-4 border-t-orange-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-orange-500/5">
            <CardTitle className="text-sm font-medium">Exemption Requests</CardTitle>
            <div className="h-8 w-8 rounded-full bg-orange-500/10 flex items-center justify-center">
              <FileText className="h-4 w-4 text-orange-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">8 pending review</p>
            <div className="mt-4 flex space-x-2">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-yellow-400 mr-1"></div>
                <span className="text-xs">Pending</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-1"></div>
                <span className="text-xs">Approved</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-1"></div>
                <span className="text-xs">Rejected</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-t-4 border-t-violet-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-violet-500/5">
            <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
            <div className="h-8 w-8 rounded-full bg-violet-500/10 flex items-center justify-center">
              <BarChart className="h-4 w-4 text-violet-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground text-violet-600">+2% from last semester</p>
            <div className="mt-4 h-2 w-full rounded-full bg-violet-100">
              <div className="h-2 rounded-full bg-violet-500" style={{ width: "94%" }}></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList className="grid w-full grid-cols-2 h-12">
          <TabsTrigger value="upcoming" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
            Upcoming Exams
          </TabsTrigger>
          <TabsTrigger value="recent" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
            Recent Exams
          </TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4 mt-6">
          <Card className="overflow-hidden border shadow-md">
            <CardHeader className="bg-amber-500/5 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-amber-700">Upcoming Exam Sessions</CardTitle>
                <CardDescription>Exams scheduled for the next 14 days</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="text-amber-500 border-amber-500 hover:bg-amber-50">
                <Calendar className="mr-2 h-4 w-4" />
                View Calendar
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  {
                    course: "Advanced Algorithms",
                    date: "May 25, 2023",
                    time: "9:00 AM - 12:00 PM",
                    location: "Exam Hall A",
                    students: 38,
                  },
                  {
                    course: "Database Management",
                    date: "May 28, 2023",
                    time: "1:00 PM - 4:00 PM",
                    location: "Exam Hall B",
                    students: 42,
                  },
                  {
                    course: "Computer Networks",
                    date: "June 2, 2023",
                    time: "9:00 AM - 12:00 PM",
                    location: "Exam Hall A",
                    students: 35,
                  },
                  {
                    course: "Software Engineering",
                    date: "June 5, 2023",
                    time: "1:00 PM - 4:00 PM",
                    location: "Exam Hall C",
                    students: 45,
                  },
                  {
                    course: "Artificial Intelligence",
                    date: "June 8, 2023",
                    time: "9:00 AM - 12:00 PM",
                    location: "Exam Hall B",
                    students: 40,
                  },
                ].map((exam, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 hover:bg-amber-50"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mt-1">
                        <Calendar className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-amber-700">{exam.course}</h3>
                        <p className="text-sm text-muted-foreground">
                          {exam.date}, {exam.time}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exam.location} | {exam.students} students
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-3 md:mt-0 ml-0 md:ml-4">
                      <Button variant="outline" size="sm" className="text-amber-500 border-amber-500 hover:bg-amber-50">
                        Edit
                      </Button>
                      <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
                        Record Attendance
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="recent" className="space-y-4 mt-6">
          <Card className="overflow-hidden border shadow-md">
            <CardHeader className="bg-amber-500/5 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-amber-700">Recent Exam Sessions</CardTitle>
                <CardDescription>Completed exams from the past 14 days</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="text-amber-500 border-amber-500 hover:bg-amber-50">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  {
                    course: "Operating Systems",
                    date: "May 15, 2023",
                    time: "9:00 AM - 12:00 PM",
                    location: "Exam Hall B",
                    students: 36,
                    attendance: 35,
                    exemptions: 1,
                  },
                  {
                    course: "Web Development",
                    date: "May 12, 2023",
                    time: "1:00 PM - 4:00 PM",
                    location: "Exam Hall A",
                    students: 40,
                    attendance: 38,
                    exemptions: 2,
                  },
                  {
                    course: "Computer Graphics",
                    date: "May 8, 2023",
                    time: "9:00 AM - 12:00 PM",
                    location: "Exam Hall C",
                    students: 32,
                    attendance: 30,
                    exemptions: 1,
                  },
                ].map((exam, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 hover:bg-amber-50"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mt-1">
                        <CheckCircle className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-amber-700">{exam.course}</h3>
                        <p className="text-sm text-muted-foreground">
                          {exam.date}, {exam.time}
                        </p>
                        <div className="mt-1 flex flex-wrap items-center gap-2">
                          <div className="flex items-center">
                            <div className="h-1.5 w-16 rounded-full bg-gray-200 mr-1">
                              <div
                                className="h-1.5 rounded-full bg-amber-500"
                                style={{ width: `${(exam.attendance / exam.students) * 100}%` }}
                              ></div>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {exam.attendance}/{exam.students}
                            </p>
                          </div>
                          <div className="text-xs px-1.5 py-0.5 rounded bg-purple-100 text-purple-800">
                            {exam.exemptions} exemptions
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-3 md:mt-0 ml-0 md:ml-4">
                      <Button variant="outline" size="sm" className="text-amber-500 border-amber-500 hover:bg-amber-50">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="text-amber-500 border-amber-500 hover:bg-amber-50">
                        <Download className="mr-2 h-4 w-4" />
                        Report
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
