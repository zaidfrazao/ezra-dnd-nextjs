"use client";

import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { submitWikiDetails } from "./actions";
import { onAuthStateChanged } from "@/app/_lib/firebase/auth";

export default function CreateWikiPage() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [contents, setContents] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      if (!user) {
        router.replace("/login");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!category.trim()) newErrors.category = "Category is required.";
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!slug.trim()) {
      newErrors.slug = "Slug is required.";
    } else if (!/[^a-zA-Z0-9-_]/.test(slug)) {
      newErrors.slug = "Slug must be URL-friendly.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});

      try {
        setIsLoading(true);

        const formData = new FormData();

        formData.append("category", category);
        formData.append("title", title);
        formData.append("slug", slug);
        formData.append("contents", contents);

        await submitWikiDetails(formData);

        setIsLoading(false);
      } catch (error) {
        console.error("Submission failed:", error);
      }
    }
  };

  const formatSlug = (category, title) => {
    const reformattedCategory = category
      .toLowerCase()
      .replace(" ", "-")
      .replace(/[^a-zA-Z0-9-_]/g, "");
    const reformattedTitle = title
      .toLowerCase()
      .replace(" ", "-")
      .replace(/[^a-zA-Z0-9-_]/g, "");
    setSlug(`/${reformattedCategory}/${reformattedTitle}`);
  };

  if (isLoading) {
    return (
      <div className="hidden space-y-6 p-10 pb-16 md:block flex-1 lg:max-w-2xl">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">
            Create Wiki Page
          </h2>
          <p className="text-muted-foreground">
            Enter the details related to the page you'd like to add.
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

  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block flex-1 lg:max-w-2xl">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Create Wiki Page</h2>
        <p className="text-muted-foreground">
          Enter the details related to the page you'd like to add.
        </p>
      </div>
      <Separator />
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select
            id="category"
            name="category"
            value={category}
            onValueChange={(value) => {
              setCategory(value);
              formatSlug(value, title);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="races">Races</SelectItem>
              <SelectItem value="continents">Continents</SelectItem>
              <SelectItem value="classes">Classes</SelectItem>
            </SelectContent>
          </Select>
          {errors.category && <p className="text-red-500">{errors.category}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              formatSlug(category, e.target.value);
            }}
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            name="slug"
            type="text"
            placeholder="Slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
          {errors.slug && <p className="text-red-500">{errors.slug}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contents">Page Contents</Label>
          <MDEditor
            id="contents"
            name="contents"
            value={contents}
            onChange={setContents}
          />
          {errors.contents && <p className="text-red-500">{errors.contents}</p>}
        </div>
        <Button type="submit">Add new page</Button>
      </form>
    </div>
  );
}
