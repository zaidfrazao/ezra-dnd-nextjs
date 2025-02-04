import { Skeleton } from "@/components/ui/skeleton";

export default async function LoadingWikiPage() {
  return (
    <div className="px-8 py-4">
      <div className="mb-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <Skeleton className="h-10 w-48 rounded" />
          </div>
          <Skeleton className="h-8 w-12 rounded" />
        </div>
      </div>
      <Skeleton className="h-12 w-full rounded mb-4" />
      <Skeleton className="h-6 w-64 rounded mb-4" />
      <Skeleton className="h-24 w-full rounded mb-8" />
      <Skeleton className="h-8 w-48 rounded mb-4" />
      <Skeleton className="h-32 w-full rounded mb-8" />
      <Skeleton className="h-8 w-48 rounded mb-4" />
    </div>
  );
}
