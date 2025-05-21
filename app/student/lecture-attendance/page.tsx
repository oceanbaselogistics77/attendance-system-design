import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, Download, Search } from "lucide-react"

export default function LectureAttendancePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-tight">Lecture Attendance</h2>
        <p className="text-muted-foreground">View and track your attendance for all lecture sessions</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden border-t-4 border-t-primary shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-primary/5">
            <CardTitle className="text-sm font-medium">Overall Attendance</CardTitle>
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
        <Card className="overflow-hidden border-t-4 border-t-green-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-green-500/5">
            <CardTitle className="text-sm font-medium">Present</CardTitle>
            <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
              <Calendar className="h-4 w-4 text-green-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">17</div>
            <p className="text-xs text-muted-foreground">Sessions attended</p>
            <div className="mt-4 h-2 w-full rounded-full bg-green-500/20">
              <div className="h-2 rounded-full bg-green-500" style={{ width: "85%" }}></div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-t-4 border-t-red-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-red-500/5">
            <CardTitle className="text-sm font-medium">Absent</CardTitle>
            <div className="h-8 w-8 rounded-full bg-red-500/10 flex items-center justify-center">
              <Calendar className="h-4 w-4 text-red-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Sessions missed</p>
            <div className="mt-4 h-2 w-full rounded-full bg-red-500/20">
              <div className="h-2 rounded-full bg-red-500" style={{ width: "15%" }}></div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-t-4 border-t-blue-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-blue-500/5">
            <CardTitle className="text-sm font-medium">Next Lecture</CardTitle>
            <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Calendar className="h-4 w-4 text-blue-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-lg font-bold">Data Structures</div>
            <p className="text-xs text-muted-foreground">May 23, 10:00 AM</p>
            <div className="mt-4 flex items-center">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Room 101</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Search Attendance Records</CardTitle>
            <CardDescription>Filter your attendance records by course or date</CardDescription>
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
          <TabsTrigger value="all">All Sessions</TabsTrigger>
          <TabsTrigger value="present">Present</TabsTrigger>
          <TabsTrigger value="absent">Absent</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>All Lecture Sessions</CardTitle>
                <CardDescription>Your attendance record for all lecture sessions</CardDescription>
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
                    <TableHead>Lecturer</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      course: "Data Structures",
                      date: "May 20, 2023",
                      time: "10:00 AM - 12:00 PM",
                      location: "Room 101",
                      lecturer: "Dr. Smith",
                      status: "Present",
                    },
                    {
                      course: "Computer Networks",
                      date: "May 18, 2023",
                      time: "9:00 AM - 11:00 AM",
                      location: "Room 105",
                      lecturer: "Dr. Johnson",
                      status: "Present",
                    },
                    {
                      course: "Database Systems",
                      date: "May 15, 2023",
                      time: "1:00 PM - 3:00 PM",
                      location: "Room 102",
                      lecturer: "Dr. Williams",
                      status: "Absent",
                    },
                    {
                      course: "Software Engineering",
                      date: "May 12, 2023",
                      time: "10:00 AM - 12:00 PM",
                      location: "Room 201",
                      lecturer: "Dr. Brown",
                      status: "Present",
                    },
                    {
                      course: "Artificial Intelligence",
                      date: "May 10, 2023",
                      time: "2:00 PM - 4:00 PM",
                      location: "Room 203",
                      lecturer: "Dr. Davis",
                      status: "Present",
                    },
                    {
                      course: "Computer Graphics",
                      date: "May 8, 2023",
                      time: "11:00 AM - 1:00 PM",
                      location: "Room 204",
                      lecturer: "Dr. Wilson",
                      status: "Absent",
                    },
                    {
                      course: "Web Development",
                      date: "May 5, 2023",
                      time: "3:00 PM - 5:00 PM",
                      location: "Room 103",
                      lecturer: "Dr. Taylor",
                      status: "Present",
                    },
                  ].map((session, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{session.course}</TableCell>
                      <TableCell>{session.date}</TableCell>
                      <TableCell>{session.time}</TableCell>
                      <TableCell>{session.location}</TableCell>
                      <TableCell>{session.lecturer}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            session.status === "Present" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {session.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="present">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Present Sessions</CardTitle>
                <CardDescription>Sessions where you were marked as present</CardDescription>
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
                    <TableHead>Lecturer</TableHead>
                    <TableHead>Check-in Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      course: "Data Structures",
                      date: "May 20, 2023",
                      time: "10:00 AM - 12:00 PM",
                      location: "Room 101",
                      lecturer: "Dr. Smith",
                      checkin: "9:55 AM",
                    },
                    {
                      course: "Computer Networks",
                      date: "May 18, 2023",
                      time: "9:00 AM - 11:00 AM",
                      location: "Room 105",
                      lecturer: "Dr. Johnson",
                      checkin: "8:50 AM",
                    },
                    {
                      course: "Software Engineering",
                      date: "May 12, 2023",
                      time: "10:00 AM - 12:00 PM",
                      location: "Room 201",
                      lecturer: "Dr. Brown",
                      checkin: "9:58 AM",
                    },
                    {
                      course: "Artificial Intelligence",
                      date: "May 10, 2023",
                      time: "2:00 PM - 4:00 PM",
                      location: "Room 203",
                      lecturer: "Dr. Davis",
                      checkin: "1:55 PM",
                    },
                    {
                      course: "Web Development",
                      date: "May 5, 2023",
                      time: "3:00 PM - 5:00 PM",
                      location: "Room 103",
                      lecturer: "Dr. Taylor",
                      checkin: "2:50 PM",
                    },
                  ].map((session, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{session.course}</TableCell>
                      <TableCell>{session.date}</TableCell>
                      <TableCell>{session.time}</TableCell>
                      <TableCell>{session.location}</TableCell>
                      <TableCell>{session.lecturer}</TableCell>
                      <TableCell>{session.checkin}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="absent">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Absent Sessions</CardTitle>
                <CardDescription>Sessions where you were marked as absent</CardDescription>
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
                    <TableHead>Lecturer</TableHead>
                    <TableHead>Reason</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      course: "Database Systems",
                      date: "May 15, 2023",
                      time: "1:00 PM - 3:00 PM",
                      location: "Room 102",
                      lecturer: "Dr. Williams",
                      reason: "Not provided",
                    },
                    {
                      course: "Computer Graphics",
                      date: "May 8, 2023",
                      time: "11:00 AM - 1:00 PM",
                      location: "Room 204",
                      lecturer: "Dr. Wilson",
                      reason: "Medical (Exemption Pending)",
                    },
                    {
                      course: "Operating Systems",
                      date: "April 28, 2023",
                      time: "9:00 AM - 11:00 AM",
                      location: "Room 105",
                      lecturer: "Dr. Johnson",
                      reason: "Not provided",
                    },
                  ].map((session, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{session.course}</TableCell>
                      <TableCell>{session.date}</TableCell>
                      <TableCell>{session.time}</TableCell>
                      <TableCell>{session.location}</TableCell>
                      <TableCell>{session.lecturer}</TableCell>
                      <TableCell>{session.reason}</TableCell>
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
