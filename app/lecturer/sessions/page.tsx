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
import { Calendar, Edit, Plus, Trash } from "lucide-react"

export default function SessionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Lecture Sessions</h2>
          <p className="text-muted-foreground">Manage your lecture sessions and schedules</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Session
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create New Session</DialogTitle>
              <DialogDescription>Add a new lecture session to your schedule</DialogDescription>
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
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input id="duration" type="number" defaultValue="120" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Room number or location" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Input id="description" placeholder="Additional details about this session" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Create Session</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="all">All Sessions</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Manage your upcoming lecture sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
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
                    {
                      course: "Database Systems",
                      date: "May 30, 2023",
                      time: "1:00 PM - 3:00 PM",
                      location: "Room 102",
                      students: 40,
                    },
                  ].map((session, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{session.course}</TableCell>
                      <TableCell>{session.date}</TableCell>
                      <TableCell>{session.time}</TableCell>
                      <TableCell>{session.location}</TableCell>
                      <TableCell>{session.students}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Calendar className="h-4 w-4" />
                            <span className="sr-only">Record Attendance</span>
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
            <CardHeader>
              <CardTitle>Past Sessions</CardTitle>
              <CardDescription>View your completed lecture sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Attendance</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
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
                    {
                      course: "Computer Graphics",
                      date: "May 12, 2023",
                      time: "11:00 AM - 1:00 PM",
                      location: "Room 204",
                      students: 30,
                      attendance: 25,
                    },
                  ].map((session, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{session.course}</TableCell>
                      <TableCell>{session.date}</TableCell>
                      <TableCell>{session.time}</TableCell>
                      <TableCell>{session.location}</TableCell>
                      <TableCell>
                        {session.attendance}/{session.students} (
                        {Math.round((session.attendance / session.students) * 100)}%)
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="icon">
                            <Calendar className="h-4 w-4" />
                            <span className="sr-only">View Attendance</span>
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
            <CardHeader>
              <CardTitle>All Sessions</CardTitle>
              <CardDescription>Complete list of all your lecture sessions</CardDescription>
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
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      course: "Data Structures",
                      date: "May 23, 2023",
                      time: "10:00 AM - 12:00 PM",
                      location: "Room 101",
                      status: "Upcoming",
                    },
                    {
                      course: "Database Systems",
                      date: "May 19, 2023",
                      time: "1:00 PM - 3:00 PM",
                      location: "Room 102",
                      status: "Completed",
                    },
                    {
                      course: "Artificial Intelligence",
                      date: "May 24, 2023",
                      time: "2:00 PM - 4:00 PM",
                      location: "Room 203",
                      status: "Upcoming",
                    },
                    {
                      course: "Software Engineering",
                      date: "May 17, 2023",
                      time: "10:00 AM - 12:00 PM",
                      location: "Room 201",
                      status: "Completed",
                    },
                  ].map((session, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{session.course}</TableCell>
                      <TableCell>{session.date}</TableCell>
                      <TableCell>{session.time}</TableCell>
                      <TableCell>{session.location}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            session.status === "Upcoming" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                          }`}
                        >
                          {session.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="icon">
                            {session.status === "Upcoming" ? (
                              <Edit className="h-4 w-4" />
                            ) : (
                              <Calendar className="h-4 w-4" />
                            )}
                            <span className="sr-only">
                              {session.status === "Upcoming" ? "Edit" : "View Attendance"}
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
    </div>
  )
}
