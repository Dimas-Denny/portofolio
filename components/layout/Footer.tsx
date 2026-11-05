import Image from "next/image";
import { cacheLife } from "next/cache";

const socials = [
  {
    name: "Facebook",
    icon: "/icons/facebook.svg",
    href: "https://facebook.com",
  },
  {
    name: "Instagram",
    icon: "/icons/instagram.svg",
    href: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    icon: "/icons/linkedin.svg",
    href: "https://linkedin.com",
  },
  { name: "TikTok", icon: "/icons/tiktok.svg", href: "https://tiktok.com" },
];

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  return (
    <footer className="bg-neutral-950 py-8 lg:py-6">
      <div className="container-custom flex flex-col gap-6 lg:flex-row-reverse lg:items-center lg:justify-between">
        {/* Social media links */}
        <ul className="flex gap-3 lg:gap-4">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex size-10 items-center justify-center rounded-full border border-neutral-800 transition-colors hover:border-primary-300 hover:bg-primary-300"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 object-contain"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-sm text-neutral-300">
          &copy; <CopyrightYear /> Dimas Denny Wibowo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
