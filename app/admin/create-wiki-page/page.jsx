"use client";

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { submitWikiDetails } from "./actions";
import React, { useState } from "react";

export default function CreateWikiPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [contents, setContents] = useState("");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!slug.trim()) {
      newErrors.slug = "Slug is required.";
    } else if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      newErrors.slug = "Slug must be URL-friendly.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    } else {
      console.error("Invalid event object passed to handleSubmit:", e);
      return;
    }

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});

      try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("slug", slug);
        formData.append("contents", contents);

        await submitWikiDetails(formData);

        alert("The form was successfully submitted!");
        setTitle("");
        setSlug("");
        setContents("");
      } catch (error) {
        console.error("Submission failed:", error);
        alert("The form failed to be submitted.");
      }
    }
  };

  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Create Wiki Page</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator />
      <form action={handleSubmit}>
        <div>
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>
        <div>
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
        <div>
          <Input
            id="contents"
            name="contents"
            type="text"
            placeholder="Page Contents"
            value={contents}
            onChange={(e) => setContents(e.target.value)}
          />
          {errors.contents && <p className="text-red-500">{errors.contents}</p>}
        </div>
        <Button type="submit">Add to Firebase</Button>
      </form>
    </div>
  );
}
