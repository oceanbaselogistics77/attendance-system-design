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
import { Textarea } from "@/components/ui/textarea"
import { FileText, Plus } from "lucide-react"

export default function ExemptionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Exemption Requests</h2>
          <p className="text-muted-foreground">Request and track exam exemptions</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Request
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>New Exemption Request</DialogTitle>
              <DialogDescription>
                Submit a request for exam exemption. Provide all required details and documentation.
              </DialogDescription>
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
                <Textarea id="details" placeholder="Provide additional details about your exemption request" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="document">Supporting Document</Label>
                <Input id="document" type="file" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Submit Request</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Exemption Requests</CardTitle>
          <CardDescription>Track the status of your exemption requests</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request ID</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Exam Date</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Submitted On</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">EX-2023-001</TableCell>
                <TableCell>CS401: Artificial Intelligence</TableCell>
                <TableCell>May 25, 2023</TableCell>
                <TableCell>Medical</TableCell>
                <TableCell>May 15, 2023</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <FileText className="h-4 w-4" />
                    <span className="sr-only">View details</span>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">EX-2023-002</TableCell>
                <TableCell>CS301: Algorithms</TableCell>
                <TableCell>April 20, 2023</TableCell>
                <TableCell>Family Emergency</TableCell>
                <TableCell>April 10, 2023</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Approved
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <FileText className="h-4 w-4" />
                    <span className="sr-only">View details</span>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">EX-2023-003</TableCell>
                <TableCell>CS201: Data Structures</TableCell>
                <TableCell>March 15, 2023</TableCell>
                <TableCell>Academic Conflict</TableCell>
                <TableCell>March 5, 2023</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">Rejected</span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <FileText className="h-4 w-4" />
                    <span className="sr-only">View details</span>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
