import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingCreateWikiPage() {
  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block flex-1 lg:max-w-2xl">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Create Wiki Page</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator />
      <div className="space-y-8">
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Skeleton className="h-8 w-48 rounded" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Skeleton className="h-8 rounded" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="slug">Slug</Label>
          <Skeleton className="h-8 rounded" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contents">Page Contents</Label>
          <Skeleton className="h-32 rounded" />
        </div>
        <Button disabled>
          <Loader2 className="animate-spin" />
          Loading
        </Button>
      </div>
    </div>
  );
}
