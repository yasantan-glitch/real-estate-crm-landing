import { siteConfig } from "@/config/site";

const icons = [
  {
    label: "Instagram",
    href: siteConfig.socialLinks.instagram,
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Facebook",
    href: siteConfig.socialLinks.facebook,
    path: (
      <path d="M14 9h2.5V6H14c-1.93 0-3.5 1.57-3.5 3.5V12H8v3h2.5v6H13v-6h2.4l.6-3H13V9.5c0-.28.22-.5.5-.5H14z" />
    ),
  },
  {
    label: "X",
    href: siteConfig.socialLinks.x,
    path: <path d="M5 4l14.5 16M19.5 4L5 20" />,
  },
  {
    label: "LinkedIn",
    href: siteConfig.socialLinks.linkedin,
    path: (
      <>
        <rect x="4" y="9" width="3.2" height="10.5" />
        <circle cx="5.6" cy="5.2" r="1.6" fill="currentColor" stroke="none" />
        <path d="M11 9.5h3v1.6c.6-1 1.7-1.8 3.2-1.8 2.5 0 3.8 1.6 3.8 4.4v6.2h-3.2v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.3-.1.24-.12.58-.12.92v5.58H11V9.5z" />
      </>
    ),
  },
  {
    label: "YouTube",
    href: siteConfig.socialLinks.youtube,
    path: (
      <>
        <rect x="3" y="6.5" width="18" height="11" rx="2.5" />
        <path d="M10.5 10l4.5 2-4.5 2z" fill="currentColor" stroke="none" />
      </>
    ),
  },
];

export default function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-2.5 ${className}`}>
      {icons.map((icon) => (
        <li key={icon.label}>
          <a
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={icon.label}
            className="flex h-8 w-8 items-center justify-center border border-zinc-700 text-zinc-400 transition-colors hover:border-accent hover:text-accent"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {icon.path}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
