"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, PieChart, BarChart3, Filter } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data for charts
const attendanceByMethodData = [
  { name: "Barcode", value: 65 },
  { name: "Facial Recognition", value: 35 },
]

const attendanceByMonthData = [
  { month: "Jan", lectures: 92, exams: 0 },
  { month: "Feb", lectures: 88, exams: 0 },
  { month: "Mar", lectures: 85, exams: 95 },
  { month: "Apr", lectures: 90, exams: 0 },
  { month: "May", lectures: 87, exams: 92 },
  { month: "Jun", lectures: 0, exams: 90 },
  { month: "Jul", lectures: 0, exams: 0 },
  { month: "Aug", lectures: 0, exams: 0 },
  { month: "Sep", lectures: 91, exams: 0 },
  { month: "Oct", lectures: 89, exams: 0 },
  { month: "Nov", lectures: 86, exams: 0 },
  { month: "Dec", lectures: 0, exams: 94 },
]

const COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444"]

export default function ReportsPage() {
  const { toast } = useToast()
  const [reportType, setReportType] = useState("attendance")
  const [dateRange, setDateRange] = useState("academic-year")
  const [course, setCourse] = useState("")
  const [program, setProgram] = useState("")

  const generateReport = () => {
    toast({
      title: "Report Generated",
      description: "Your report has been generated and is ready to download.",
    })
  }

  const downloadReport = (format: string) => {
    toast({
      title: "Report Downloaded",
      description: `Your report has been downloaded in ${format.toUpperCase()} format.`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
        <p className="text-muted-foreground">Generate and view attendance and exam reports</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Report Parameters</CardTitle>
          <CardDescription>Configure the parameters for your report</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="grid gap-2">
              <Label htmlFor="report-type">Report Type</Label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger id="report-type">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="attendance">Attendance Report</SelectItem>
                  <SelectItem value="exam">Exam Report</SelectItem>
                  <SelectItem value="exemption">Exemption Report</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date-range">Date Range</Label>
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger id="date-range">
                  <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="academic-year">Academic Year 2024-2025</SelectItem>
                  <SelectItem value="semester-1">Semester 1 (Fall 2024)</SelectItem>
                  <SelectItem value="semester-2">Semester 2 (Spring 2025)</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="course">Course</Label>
              <Select value={course} onValueChange={setCourse}>
                <SelectTrigger id="course">
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courses</SelectItem>
                  <SelectItem value="cs101">CS101: Introduction to Programming</SelectItem>
                  <SelectItem value="cs201">CS201: Data Structures</SelectItem>
                  <SelectItem value="cs301">CS301: Database Systems</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="program">Program</Label>
              <Select value={program} onValueChange={setProgram}>
                <SelectTrigger id="program">
                  <SelectValue placeholder="Select program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Programs</SelectItem>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="ee">Electrical Engineering</SelectItem>
                  <SelectItem value="me">Mechanical Engineering</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {dateRange === "custom" && (
            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              <div className="grid gap-2">
                <Label htmlFor="start-date">Start Date</Label>
                <div className="flex">
                  <Input id="start-date" type="date" defaultValue="2024-09-01" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="end-date">End Date</Label>
                <div className="flex">
                  <Input id="end-date" type="date" defaultValue="2025-06-30" />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end mt-4">
            <Button onClick={generateReport}>
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="charts">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="charts">
            <PieChart className="mr-2 h-4 w-4" />
            Charts
          </TabsTrigger>
          <TabsTrigger value="data">
            <BarChart3 className="mr-2 h-4 w-4" />
            Data Tables
          </TabsTrigger>
        </TabsList>
        <TabsContent value="charts" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Attendance by Method</CardTitle>
                <CardDescription>Distribution of attendance recording methods</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ChartContainer
                  config={{
                    barcode: {
                      label: "Barcode",
                      color: "hsl(var(--chart-1))",
                    },
                    facial: {
                      label: "Facial Recognition",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={attendanceByMethodData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {attendanceByMethodData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Attendance by Month</CardTitle>
                <CardDescription>Monthly attendance rates for lectures and exams</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ChartContainer
                  config={{
                    lectures: {
                      label: "Lectures",
                      color: "hsl(var(--chart-1))",
                    },
                    exams: {
                      label: "Exams",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={attendanceByMonthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="lectures" fill="var(--color-lectures)" name="Lectures" />
                      <Bar dataKey="exams" fill="var(--color-exams)" name="Exams" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="data">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Attendance Data</CardTitle>
                <CardDescription>Detailed attendance records</CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" onClick={() => downloadReport("csv")}>
                  <Download className="mr-2 h-4 w-4" />
                  Export CSV
                </Button>
                <Button variant="outline" size="sm" onClick={() => downloadReport("pdf")}>
                  <Download className="mr-2 h-4 w-4" />
                  Export PDF
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 border-b px-4 py-2 font-medium">
                  <div>Date</div>
                  <div>Course</div>
                  <div>Students Present</div>
                  <div>Students Absent</div>
                  <div>Attendance Rate</div>
                </div>
                <div className="divide-y">
                  <div className="grid grid-cols-5 px-4 py-3">
                    <div>May 15, 2025</div>
                    <div>CS101: Introduction to Programming</div>
                    <div>42</div>
                    <div>3</div>
                    <div>93%</div>
                  </div>
                  <div className="grid grid-cols-5 px-4 py-3">
                    <div>May 12, 2025</div>
                    <div>CS201: Data Structures</div>
                    <div>38</div>
                    <div>2</div>
                    <div>95%</div>
                  </div>
                  <div className="grid grid-cols-5 px-4 py-3">
                    <div>May 10, 2025</div>
                    <div>CS301: Database Systems</div>
                    <div>35</div>
                    <div>5</div>
                    <div>88%</div>
                  </div>
                  <div className="grid grid-cols-5 px-4 py-3">
                    <div>May 8, 2025</div>
                    <div>CS101: Introduction to Programming</div>
                    <div>40</div>
                    <div>5</div>
                    <div>89%</div>
                  </div>
                  <div className="grid grid-cols-5 px-4 py-3">
                    <div>May 5, 2025</div>
                    <div>CS201: Data Structures</div>
                    <div>36</div>
                    <div>4</div>
                    <div>90%</div>
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
