import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { AtSign, BookOpen, Calendar, Mail, MapPin, BoneIcon as Mortarboard, Phone, User } from "lucide-react"

export default function LecturerProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-tight">Your Profile</h2>
        <p className="text-muted-foreground">View and manage your personal information</p>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
        <Card className="overflow-hidden">
          <CardHeader className="bg-blue-500/5 flex flex-col items-center">
            <div className="h-24 w-24 rounded-full bg-blue-500/10 flex items-center justify-center mb-2">
              <User className="h-12 w-12 text-blue-500" />
            </div>
            <CardTitle>Dr. Jane Smith</CardTitle>
            <CardDescription>Lecturer ID: L12345</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>Computer Science Department</span>
              </div>
              <div className="flex items-center">
                <Mortarboard className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>Ph.D. in Computer Science</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>Joined 2018</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>jane.smith@university.edu</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>+1 (555) 987-6543</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>Office 302, Computer Science Building</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-blue-500/5 p-6 flex justify-center">
            <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
              <AtSign className="mr-2 h-4 w-4" />
              Change Password
            </Button>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Tabs defaultValue="personal">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="academic">Academic Info</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="personal" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" defaultValue="Jane" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" defaultValue="Smith" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="jane.smith@university.edu" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="+1 (555) 987-6543" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="office">Office Location</Label>
                    <Input id="office" defaultValue="Office 302, Computer Science Building" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="office-hours">Office Hours</Label>
                    <Textarea
                      id="office-hours"
                      defaultValue="Monday: 10:00 AM - 12:00 PM&#10;Wednesday: 2:00 PM - 4:00 PM&#10;Friday: By appointment"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-blue-500 hover:bg-blue-600">Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="academic" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Information</CardTitle>
                  <CardDescription>View and update your academic details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Input id="department" defaultValue="Computer Science" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lecturer-id">Lecturer ID</Label>
                      <Input id="lecturer-id" defaultValue="L12345" readOnly />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialization">Specialization</Label>
                    <Input id="specialization" defaultValue="Artificial Intelligence & Machine Learning" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="education">Highest Education</Label>
                    <Input id="education" defaultValue="Ph.D. in Computer Science" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="join-date">Join Date</Label>
                      <Input id="join-date" type="date" defaultValue="2018-08-15" readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <Select defaultValue="full-time">
                        <SelectTrigger id="status">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Full-time</SelectItem>
                          <SelectItem value="part-time">Part-time</SelectItem>
                          <SelectItem value="visiting">Visiting</SelectItem>
                          <SelectItem value="adjunct">Adjunct</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="courses">Courses Teaching</Label>
                    <Textarea
                      id="courses"
                      defaultValue="CS101: Introduction to Programming&#10;CS201: Data Structures&#10;CS401: Artificial Intelligence"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="research">Research Interests</Label>
                    <Textarea
                      id="research"
                      defaultValue="Machine Learning, Natural Language Processing, Computer Vision, Neural Networks"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-blue-500 hover:bg-blue-600">Update Academic Info</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="settings" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Preferred Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notifications">Email Notifications</Label>
                    <Select defaultValue="all">
                      <SelectTrigger id="notifications">
                        <SelectValue placeholder="Select notification preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Notifications</SelectItem>
                        <SelectItem value="important">Important Only</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="theme">Theme</Label>
                    <Select defaultValue="light">
                      <SelectTrigger id="theme">
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System Default</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                    <Select defaultValue="app">
                      <SelectTrigger id="two-factor">
                        <SelectValue placeholder="Select two-factor authentication" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="disabled">Disabled</SelectItem>
                        <SelectItem value="sms">SMS</SelectItem>
                        <SelectItem value="app">Authenticator App</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accessibility">Accessibility Settings</Label>
                    <Select defaultValue="default">
                      <SelectTrigger id="accessibility">
                        <SelectValue placeholder="Select accessibility settings" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="high-contrast">High Contrast</SelectItem>
                        <SelectItem value="large-text">Large Text</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">
                    Delete Account
                  </Button>
                  <Button className="bg-blue-500 hover:bg-blue-600">Save Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
