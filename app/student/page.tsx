import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, CheckCircle, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-tight">Welcome, John Doe</h2>
        <p className="text-muted-foreground">Student ID: S12345 | Department: Computer Science</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden border-t-4 border-t-primary shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-primary/5">
            <CardTitle className="text-sm font-medium">Lecture Attendance</CardTitle>
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">17/20 lectures attended</p>
            <div className="mt-4 h-2 w-full rounded-full bg-primary/20">
              <div className="h-2 rounded-full bg-primary" style={{ width: "85%" }}></div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-t-4 border-t-blue-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-blue-500/5">
            <CardTitle className="text-sm font-medium">Exam Attendance</CardTitle>
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
        <Card className="overflow-hidden border-t-4 border-t-amber-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-amber-500/5">
            <CardTitle className="text-sm font-medium">Exemption Requests</CardTitle>
            <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center">
              <FileText className="h-4 w-4 text-amber-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">1 pending request</p>
            <div className="mt-4 flex items-center">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Pending</span>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-t-4 border-t-rose-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-rose-500/5">
            <CardTitle className="text-sm font-medium">Upcoming Exams</CardTitle>
            <div className="h-8 w-8 rounded-full bg-rose-500/10 flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-rose-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Next: Advanced Algorithms (May 25)</p>
            <div className="mt-4 flex items-center">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800">In 5 days</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="lectures">
        <TabsList className="grid w-full grid-cols-2 h-12">
          <TabsTrigger
            value="lectures"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Recent Lectures
          </TabsTrigger>
          <TabsTrigger
            value="exams"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Recent Exams
          </TabsTrigger>
        </TabsList>
        <TabsContent value="lectures" className="space-y-4 mt-6">
          <Card className="overflow-hidden border shadow-md">
            <CardHeader className="bg-primary/5 flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Lecture Attendance</CardTitle>
                <CardDescription>Your attendance for the last 5 lectures</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary/10">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  { course: "Data Structures", date: "May 20, 2023", status: "Present" },
                  { course: 'Computer Networks  date: "May 20, 2023', status: "Present" },
                  { course: "Computer Networks", date: "May 18, 2023", status: "Present" },
                  { course: "Database Systems", date: "May 15, 2023", status: "Absent" },
                  { course: "Software Engineering", date: "May 12, 2023", status: "Present" },
                  { course: "Artificial Intelligence", date: "May 10, 2023", status: "Present" },
                ].map((lecture, index) => (
                  <div key={index} className="flex items-center justify-between p-4 hover:bg-muted/20">
                    <div>
                      <p className="font-medium">{lecture.course}</p>
                      <p className="text-sm text-muted-foreground">{lecture.date}</p>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        lecture.status === "Present" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {lecture.status}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="exams" className="space-y-4 mt-6">
          <Card className="overflow-hidden border shadow-md">
            <CardHeader className="bg-primary/5 flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Exam Attendance</CardTitle>
                <CardDescription>Your attendance for the last 5 exams</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary/10">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  { course: "Operating Systems", date: "May 5, 2023", status: "Present" },
                  { course: "Computer Architecture", date: "May 2, 2023", status: "Present" },
                  { course: "Programming Languages", date: "April 28, 2023", status: "Present" },
                  { course: "Web Development", date: "April 25, 2023", status: "Present" },
                  { course: "Computer Graphics", date: "April 20, 2023", status: "Present" },
                ].map((exam, index) => (
                  <div key={index} className="flex items-center justify-between p-4 hover:bg-muted/20">
                    <div>
                      <p className="font-medium">{exam.course}</p>
                      <p className="text-sm text-muted-foreground">{exam.date}</p>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      {exam.status}
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
