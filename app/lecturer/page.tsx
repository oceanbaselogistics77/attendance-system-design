import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, BookOpen, Calendar, Download, FileText, Users } from "lucide-react"

export default function LecturerDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-tight">Welcome, Dr. Smith</h2>
        <p className="text-muted-foreground">Lecturer ID: L12345 | Department: Computer Science</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden border-t-4 border-t-blue-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-blue-500/5">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Calendar className="h-4 w-4 text-blue-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">4 courses, 6 sessions each</p>
            <div className="mt-4 grid grid-cols-6 gap-1">
              {Array(24)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full ${i < 18 ? "bg-blue-500" : "bg-blue-200"}`}></div>
                ))}
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-t-4 border-t-indigo-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-indigo-500/5">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <div className="h-8 w-8 rounded-full bg-indigo-500/10 flex items-center justify-center">
              <Users className="h-4 w-4 text-indigo-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Across all courses</p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
              <div className="text-xs">42 in Data Structures</div>
            </div>
            <div className="mt-1.5 flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
              <div className="text-xs">38 in Artificial Intelligence</div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-t-4 border-t-teal-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-teal-500/5">
            <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
            <div className="h-8 w-8 rounded-full bg-teal-500/10 flex items-center justify-center">
              <BarChart3 className="h-4 w-4 text-teal-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground text-teal-600">+2.5% from last semester</p>
            <div className="mt-4 h-2 w-full rounded-full bg-teal-100">
              <div className="h-2 rounded-full bg-teal-500" style={{ width: "78%" }}></div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-t-4 border-t-amber-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-amber-500/5">
            <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
            <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center">
              <Calendar className="h-4 w-4 text-amber-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Next: Data Structures</p>
            <div className="mt-4 flex items-center">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                Tomorrow, 10:00 AM
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList className="grid w-full grid-cols-2 h-12">
          <TabsTrigger value="upcoming" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            Upcoming Sessions
          </TabsTrigger>
          <TabsTrigger value="recent" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            Recent Sessions
          </TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4 mt-6">
          <Card className="overflow-hidden border shadow-md">
            <CardHeader className="bg-blue-500/5 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-blue-700">Upcoming Lecture Sessions</CardTitle>
                <CardDescription>Your scheduled lectures for the next 7 days</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                <FileText className="mr-2 h-4 w-4" />
                View All
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  {
                    course: "Data Structures",
                    date: "May 23, 2023",
                    time: "10:00 AM - 12:00 PM",
                    location: "Room 101",
                    students: 42,
                  },
                  {
                    course: "Artificial Intelligence",
                    date: "May 24, 2023",
                    time: "2:00 PM - 4:00 PM",
                    location: "Room 203",
                    students: 38,
                  },
                  {
                    course: "Computer Networks",
                    date: "May 26, 2023",
                    time: "9:00 AM - 11:00 AM",
                    location: "Room 105",
                    students: 35,
                  },
                ].map((session, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 hover:bg-blue-50"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                        <BookOpen className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-blue-700">{session.course}</h3>
                        <p className="text-sm text-muted-foreground">
                          {session.date}, {session.time}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {session.location} | {session.students} students
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-3 md:mt-0 ml-0 md:ml-4">
                      <Button variant="outline" size="sm" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                        Edit
                      </Button>
                      <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
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
            <CardHeader className="bg-blue-500/5 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-blue-700">Recent Lecture Sessions</CardTitle>
                <CardDescription>Your completed lectures from the past 7 days</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  {
                    course: "Database Systems",
                    date: "May 19, 2023",
                    time: "1:00 PM - 3:00 PM",
                    location: "Room 102",
                    students: 40,
                    attendance: 32,
                  },
                  {
                    course: "Software Engineering",
                    date: "May 17, 2023",
                    time: "10:00 AM - 12:00 PM",
                    location: "Room 201",
                    students: 45,
                    attendance: 38,
                  },
                  {
                    course: "Web Development",
                    date: "May 15, 2023",
                    time: "3:00 PM - 5:00 PM",
                    location: "Room 103",
                    students: 36,
                    attendance: 30,
                  },
                ].map((session, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 hover:bg-blue-50"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                        <BookOpen className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-blue-700">{session.course}</h3>
                        <p className="text-sm text-muted-foreground">
                          {session.date}, {session.time}
                        </p>
                        <div className="mt-1 flex items-center">
                          <div className="h-1.5 w-20 rounded-full bg-gray-200 mr-2">
                            <div
                              className="h-1.5 rounded-full bg-blue-500"
                              style={{ width: `${(session.attendance / session.students) * 100}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {session.attendance}/{session.students} (
                            {Math.round((session.attendance / session.students) * 100)}%)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-3 md:mt-0 ml-0 md:ml-4">
                      <Button variant="outline" size="sm" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="text-blue-500 border-blue-500 hover:bg-blue-50">
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
