import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <h2 className="text-xl font-semibold leading-none tracking-tight">
        Not Found
      </h2>
      <p className="text-sm text-muted-foreground">
        Could not find requested resource
      </p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
