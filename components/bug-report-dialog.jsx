"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Loader2 } from "lucide-react";

import { db } from "@/app/_lib/firebase/clientApp";
import { addBugReport } from "@/app/_lib/firebase/firestore.js";
import { Button } from "@/components/ui/button";

export function BugReportDialog({ isOpen, closeDialog, user }) {
  const [isLoading, setIsLoading] = useState(false);
  const [bugReportText, setBugReportText] = useState("");

  const handleBugReport = async () => {
    setIsLoading(true);

    await addBugReport(db, {
      details: bugReportText,
      submitterId: user.uid,
      submitterEmail: user.email,
    });
    setBugReportText("");

    closeDialog();
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onClose={closeDialog} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                <ExclamationTriangleIcon
                  aria-hidden="true"
                  className="size-6 text-red-600"
                />
              </div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <DialogTitle
                  as="h3"
                  className="text-base font-semibold text-gray-900"
                >
                  Report a bug
                </DialogTitle>
                <div className="mt-2">
                  <div>
                    <label
                      htmlFor="comment"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Please describe the bug you experienced. Try to include
                      your actions in the app leading up to the bug occuring.
                      Thanks in advance.
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="comment"
                        name="comment"
                        rows={6}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        disabled={isLoading}
                        vlue={bugReportText}
                        onChange={(e) => setBugReportText(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <Button
                type="button"
                disabled={isLoading}
                onClick={handleBugReport}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Loading
                  </>
                ) : (
                  <>Report</>
                )}
              </Button>
              <Button
                type="button"
                data-autofocus
                disabled={isLoading}
                onClick={closeDialog}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
