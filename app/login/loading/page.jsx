"use client";

import { Loader2 } from "lucide-react";
import React, { useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default async function LoadingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required.";
    if (!password.trim()) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }
    return newErrors;
  };

  if (object.keys(validateForm).length > 0) {
    setErrors(validateForm);
  } else { setErrors({});
    setIsLoading(true);
    try {
      await signIn(email, password);
      redirect("/");

      setIsLoading(false);
    } catch (error) {
      throw error;
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-52 w-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Login to your account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Skeleton className="h-8 w-48 rounded" />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Skeleton className="h-8 w-48 rounded" />
                </div>
                <a
                  href="#"
                  className="inline-block text-sm text-center underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
                <Button disabled>
                  <Loader2 className="animate-spin" />
                  Loading
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}
