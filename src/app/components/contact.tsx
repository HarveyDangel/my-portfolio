import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Github, Linkedin } from "lucide-react";
import type { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  label: string;
  children: ReactNode;
}

function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="size-[68px] rounded-full bg-[#545F7F] p-[10px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
    >
      {children}
    </a>
  );
}

export default function Contact() {
  return (
    <footer id="contact" className="flex w-full bg-[#232C3D]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-5 py-[50px] lg:p-5">
        <div className="mb-5 flex justify-center">
          <h2 className="flex items-center text-4xl font-bold lg:text-[40px]">
            Contact Me
          </h2>
        </div>

        <div className="flex flex-col gap-5 py-5 font-normal lg:flex-row lg:justify-between">
          <div className="flex items-center gap-[10px]">
            <MapPinIcon className="size-[38px]" />
            <p>
              Biliran, Biliran <br /> Philippines
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <EnvelopeIcon className="size-[38px]" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=harveydangel@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#50E3C2] hover:underline"
            >
              harveydangel@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-[10px]">
            <PhoneIcon className="size-[38px]" />
            <p>+6396-7137-9690</p>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-5 pt-[70px] font-thin lg:flex-row lg:items-end lg:justify-between">
          <p>&copy; 2026 All rights reserved.</p>
          <div className="flex gap-10">
            <SocialLink
              href="https://www.linkedin.com/in/harvey-dangel-a4b09b355/"
              label="LinkedIn Profile"
            >
              <Linkedin className="size-[48px] text-[#F7F9FC]" />
            </SocialLink>
            <SocialLink
              href="https://github.com/HarveyDangel"
              label="GitHub Profile"
            >
              <Github className="size-[48px] text-[#F7F9FC]" />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
