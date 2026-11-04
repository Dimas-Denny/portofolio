import Image from "next/image";

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

export default function Footer() {
  // Keeps the copyright year up to date automatically
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 pt-8 pb-8">
      <div className="container-custom">
        {/* Social media links */}
        <ul className="flex gap-3">
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
                  width={40}
                  height={40}
                  className="size-10 object-contain"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="mt-6 text-sm text-neutral-300">
          &copy; {year} Dimas Denny Wibowo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
