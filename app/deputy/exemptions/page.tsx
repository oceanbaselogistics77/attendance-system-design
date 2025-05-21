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
import { CheckCircle, Download, Eye, FileText, Plus, Search, XCircle } from "lucide-react"

export default function DeputyExemptionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Manage Exemptions</h2>
          <p className="text-muted-foreground">Review and process student exemption requests</p>
        </div>
        <div className="flex space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Exemption
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Create New Exemption</DialogTitle>
                <DialogDescription>Create a new exemption for a student</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="student">Student</Label>
                  <Select>
                    <SelectTrigger id="student">
                      <SelectValue placeholder="Select student" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="s12345">S12345: John Doe</SelectItem>
                      <SelectItem value="s12346">S12346: Jane Smith</SelectItem>
                      <SelectItem value="s12347">S12347: Bob Johnson</SelectItem>
                      <SelectItem value="s12348">S12348: Alice Brown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
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
                <div className="grid gap-2">
                  <Label htmlFor="exam-date">Exam Date</Label>
                  <Input id="exam-date" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="reason">Reason for Exemption</Label>
                  <Select>
                    <SelectTrigger id="reason">
                      <SelectValue placeholder="Select reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medical">Medical</SelectItem>
                      <SelectItem value="family">Family Emergency</SelectItem>
                      <SelectItem value="academic">Academic Conflict</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="details">Additional Details</Label>
                  <Textarea id="details" placeholder="Provide additional details about the exemption" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Create Exemption</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export List
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Exemptions</CardTitle>
          <CardDescription>Find exemption requests by student ID, name, or course</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input placeholder="Search by student ID, name, or course..." className="flex-1" />
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="pending">
        <TabsList>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
          <TabsTrigger value="all">All Requests</TabsTrigger>
        </TabsList>
        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Pending Exemption Requests</CardTitle>
              <CardDescription>Exemption requests awaiting your review</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Request ID</TableHead>
                    <TableHead>Student</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Exam Date</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Submitted On</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "EX-2023-001",
                      student: "John Doe (S12345)",
                      course: "CS401: Artificial Intelligence",
                      examDate: "May 25, 2023",
                      reason: "Medical",
                      submittedOn: "May 15, 2023",
                    },
                    {
                      id: "EX-2023-004",
                      student: "Emily Wilson (S12349)",
                      course: "CS301: Algorithms",
                      examDate: "June 2, 2023",
                      reason: "Family Emergency",
                      submittedOn: "May 18, 2023",
                    },
                    {
                      id: "EX-2023-005",
                      student: "Michael Brown (S12350)",
                      course: "CS201: Data Structures",
                      examDate: "May 28, 2023",
                      reason: "Medical",
                      submittedOn: "May 19, 2023",
                    },
                  ].map((request, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{request.id}</TableCell>
                      <TableCell>{request.student}</TableCell>
                      <TableCell>{request.course}</TableCell>
                      <TableCell>{request.examDate}</TableCell>
                      <TableCell>{request.reason}</TableCell>
                      <TableCell>{request.submittedOn}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">View details</span>
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[500px]">
                              <DialogHeader>
                                <DialogTitle>Exemption Request Details</DialogTitle>
                                <DialogDescription>Request ID: {request.id}</DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label className="text-right">Student:</Label>
                                  <div className="col-span-3">{request.student}</div>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label className="text-right">Course:</Label>
                                  <div className="col-span-3">{request.course}</div>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label className="text-right">Exam Date:</Label>
                                  <div className="col-span-3">{request.examDate}</div>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label className="text-right">Reason:</Label>
                                  <div className="col-span-3">{request.reason}</div>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label className="text-right">Submitted:</Label>
                                  <div className="col-span-3">{request.submittedOn}</div>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label className="text-right">Details:</Label>
                                  <div className="col-span-3">
                                    Student has provided medical documentation for their condition.
                                  </div>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label className="text-right">Documents:</Label>
                                  <div className="col-span-3">
                                    <Button variant="outline" size="sm">
                                      <FileText className="mr-2 h-4 w-4" />
                                      View Medical Certificate
                                    </Button>
                                  </div>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label className="text-right">Comments:</Label>
                                  <div className="col-span-3">
                                    <Textarea placeholder="Add your comments or notes" />
                                  </div>
                                </div>
                              </div>
                              <DialogFooter className="flex space-x-2">
                                <Button variant="outline" className="w-full">
                                  <XCircle className="mr-2 h-4 w-4" />
                                  Reject
                                </Button>
                                <Button className="w-full">
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Approve
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          <Button variant="ghost" size="icon" className="text-green-600">
                            <CheckCircle className="h-4 w-4" />
                            <span className="sr-only">Approve</span>
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-600">
                            <XCircle className="h-4 w-4" />
                            <span className="sr-only">Reject</span>
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
        <TabsContent value="approved">
          <Card>
            <CardHeader>
              <CardTitle>Approved Exemption Requests</CardTitle>
              <CardDescription>Exemption requests that have been approved</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Request ID</TableHead>
                    <TableHead>Student</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Exam Date</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Approved By</TableHead>
                    <TableHead>Approved On</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "EX-2023-002",
                      student: "Jane Smith (S12346)",
                      course: "CS301: Algorithms",
                      examDate: "April 20, 2023",
                      reason: "Family Emergency",
                      approvedBy: "Dr. Williams",
                      approvedOn: "April 15, 2023",
                    },
                    {
                      id: "EX-2023-006",
                      student: "Sarah Johnson (S12351)",
                      course: "CS401: Artificial Intelligence",
                      examDate: "May 15, 2023",
                      reason: "Medical",
                      approvedBy: "Dr. Williams",
                      approvedOn: "May 10, 2023",
                    },
                  ].map((request, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{request.id}</TableCell>
                      <TableCell>{request.student}</TableCell>
                      <TableCell>{request.course}</TableCell>
                      <TableCell>{request.examDate}</TableCell>
                      <TableCell>{request.reason}</TableCell>
                      <TableCell>{request.approvedBy}</TableCell>
                      <TableCell>{request.approvedOn}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View details</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rejected">
          <Card>
            <CardHeader>
              <CardTitle>Rejected Exemption Requests</CardTitle>
              <CardDescription>Exemption requests that have been rejected</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Request ID</TableHead>
                    <TableHead>Student</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Exam Date</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Rejected By</TableHead>
                    <TableHead>Rejected On</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "EX-2023-003",
                      student: "Bob Johnson (S12347)",
                      course: "CS201: Data Structures",
                      examDate: "March 15, 2023",
                      reason: "Academic Conflict",
                      rejectedBy: "Dr. Williams",
                      rejectedOn: "March 10, 2023",
                    },
                  ].map((request, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{request.id}</TableCell>
                      <TableCell>{request.student}</TableCell>
                      <TableCell>{request.course}</TableCell>
                      <TableCell>{request.examDate}</TableCell>
                      <TableCell>{request.reason}</TableCell>
                      <TableCell>{request.rejectedBy}</TableCell>
                      <TableCell>{request.rejectedOn}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View details</span>
                        </Button>
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
              <CardTitle>All Exemption Requests</CardTitle>
              <CardDescription>Complete list of all exemption requests</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Request ID</TableHead>
                    <TableHead>Student</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Exam Date</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "EX-2023-001",
                      student: "John Doe (S12345)",
                      course: "CS401: Artificial Intelligence",
                      examDate: "May 25, 2023",
                      reason: "Medical",
                      status: "Pending",
                    },
                    {
                      id: "EX-2023-002",
                      student: "Jane Smith (S12346)",
                      course: "CS301: Algorithms",
                      examDate: "April 20, 2023",
                      reason: "Family Emergency",
                      status: "Approved",
                    },
                    {
                      id: "EX-2023-003",
                      student: "Bob Johnson (S12347)",
                      course: "CS201: Data Structures",
                      examDate: "March 15, 2023",
                      reason: "Academic Conflict",
                      status: "Rejected",
                    },
                    {
                      id: "EX-2023-004",
                      student: "Emily Wilson (S12349)",
                      course: "CS301: Algorithms",
                      examDate: "June 2, 2023",
                      reason: "Family Emergency",
                      status: "Pending",
                    },
                  ].map((request, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{request.id}</TableCell>
                      <TableCell>{request.student}</TableCell>
                      <TableCell>{request.course}</TableCell>
                      <TableCell>{request.examDate}</TableCell>
                      <TableCell>{request.reason}</TableCell>
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
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View details</span>
                        </Button>
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
