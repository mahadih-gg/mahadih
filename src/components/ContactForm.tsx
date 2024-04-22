"use client";
import React from "react";
import { Label } from "@/components/common/Label";
import { Input } from "@/components/common/Input";
import { cn } from "@/utils/cn";
// import {
//   IconBrandGithub,
//   IconBrandGoogle,
//   IconBrandOnlyfans,
// } from "@tabler/icons-react";
import BottomGradient from "./ui/BottomGradient";
import { Textarea } from "./common/Textarea";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", e);


  };
  return (
    <div className="">
      <form className="grid gap-4" onSubmit={handleSubmit}>

        <LabelInputContainer>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Enter your name" type="text" />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="Enter your valid mail" type="email" />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="Enter your mail subject" />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Enter your message here..." />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-darkLight to-dark block bg-dark w-full text-light rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-dark rounded-md h-10 font-medium bg-gray-50 bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          >
            {/* <IconBrandGithub className="h-4 w-4 text-neutral-300" /> */}
            <span className="text-neutral-300 text-sm">
              WhatsApp
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-dark rounded-md h-10 font-medium bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          >
            {/* <IconBrandGoogle className="h-4 w-4 text-neutral-300" /> */}
            <span className="text-neutral-300 text-sm">
              Linked In
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-dark rounded-md h-10 font-medium bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          >
            {/* <IconBrandOnlyfans className="h-4 w-4 text-neutral-300" /> */}
            <span className="text-neutral-300 text-sm">
              Skype
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
