import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { submitWikiDetails } from "./actions";

export default function CreateWikiPage() {
  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Create Wiki Page</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator />
      <form action={submitWikiDetails}>
        <Input id="title" name="title" type="text" placeholder="Title" />
        <Input id="slug" name="slug" type="text" placeholder="Slug" />
        <Input
          id="contents"
          name="contents"
          type="text"
          placeholder="Page Contents"
        />
        <Button type="submit">Add to Firebase</Button>
      </form>
    </div>
  );
}
