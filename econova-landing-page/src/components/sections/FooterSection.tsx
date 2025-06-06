import { FooterSection as FooterSectionType } from "@/lib/contentful";

export default function FooterSection({
  copyrightText,
  socialLinks,
}: FooterSectionType) {
  return (
    <footer className="py-6 bg-gray-800 text-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center space-x-4 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-white hover:text-green-400"
              aria-label={`Visit our ${link.platform} page`}
            >
              <i className={`fa ${link.icon}`} aria-hidden="true"></i>
            </a>
          ))}
        </div>
        <p>{copyrightText || "© 2025 EcoNova. All rights reserved."}</p>
      </div>
    </footer>
  );
}
