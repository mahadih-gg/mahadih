"use client";
import React from "react";
import { Label } from "@/components/common/Label";
import { Input } from "@/components/common/Input";
import { cn } from "@/utils/cn";
import { BsWhatsapp } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { MdLocalPhone } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { GrSkype } from "react-icons/gr";
import BottomGradient from "./ui/BottomGradient";
import { Textarea } from "./common/Textarea";

type ContactButtonType = {
  label: string,
  icon: any,
  extra: string,
  link: string

}

const contactButtons: ContactButtonType[] = [
  {
    label: "Phone",
    icon: <MdLocalPhone className="h-4 w-4" />,
    extra: "+88 01856-878150",
    link: "tel:+8801856878150"
  },
  {
    label: "WhatsApp",
    icon: <BsWhatsapp className="h-4 w-4 " />,
    extra: "+8801856878150",
    link: "https://wa.me/+8801856878150"
  },
  {
    label: "Gmail",
    icon: <SiGmail className="h-4 w-4" />,
    extra: "mahadih.dev@gmail.com",
    link: "mailto:mahadih.dev@gmail.com"
  },
  {
    label: "LinkedIn",
    icon: <SiLinkedin className="h-4 w-4" />,
    extra: "linkedin.com/in/mahadih",
    link: "https://www.linkedin.com/in/mahadih"
  },
  {
    label: "Skype",
    icon: <GrSkype className="h-4 w-4" />,
    extra: "join.skype.com/invite/wbLw5G0YcO5G",
    link: "https://join.skype.com/invite/wbLw5G0YcO5G"
  },
]

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

        <div className="grid  grid-cols-2 sm:grid-cols-3 gap-4">
          {
            contactButtons.map((buttonItem: ContactButtonType, i) => {
              return (
                <a
                  key={i}
                  href={buttonItem?.link}
                  target="_blank"
                  className="relative group/btn flex-start px-4 space-x-2 w-full text-light rounded-md h-10 font-medium bg-gray-50 bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                >
                  <span className="flex-start space-x-2 min-w-36">
                    {buttonItem?.icon}
                    <span className="text-base">
                      {buttonItem?.label}
                    </span>
                  </span>
                  {/* <span className="font-extralight text-gray text-sm">{buttonItem?.extra}</span> */}
                  <BottomGradient />
                </a>
              )
            })
          }
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
