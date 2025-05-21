import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <Skeleton className="h-9 w-[400px] mb-2" />
        <Skeleton className="h-4 w-[300px]" />
      </div>

      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-[200px] mb-2" />
          <Skeleton className="h-4 w-[300px]" />
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            {Array(2)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="grid gap-2">
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid w-full grid-cols-2 mb-4">
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-10 rounded-md" />
          ))}
      </div>

      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-[200px] mb-2" />
          <Skeleton className="h-4 w-[300px]" />
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full border-2 border-dashed rounded-lg flex items-center justify-center">
            <Skeleton className="h-[200px] w-[400px] rounded-lg" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <Skeleton className="h-6 w-[200px] mb-2" />
            <Skeleton className="h-4 w-[300px]" />
          </div>
          <Skeleton className="h-10 w-[100px]" />
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="h-10 border-b px-4 flex items-center">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[150px] ml-4" />
              <Skeleton className="h-4 w-[100px] ml-4" />
              <Skeleton className="h-4 w-[100px] ml-4" />
              <Skeleton className="h-4 w-[100px] ml-4" />
            </div>
            <div className="p-4 space-y-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <Skeleton className="h-6 w-[80px]" />
                    <Skeleton className="h-6 w-[150px]" />
                    <Skeleton className="h-6 w-[80px]" />
                    <Skeleton className="h-6 w-[120px]" />
                    <Skeleton className="h-6 w-[80px]" />
                    <div className="flex space-x-2">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-8 w-8 rounded-full" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
