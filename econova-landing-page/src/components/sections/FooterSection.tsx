import { FooterSection as FooterSectionType } from "@/lib/contentful";

export default function FooterSection({
  copyrightText,
  socialLinks,
}: FooterSectionType) {
  return (
    <footer className="py-6 bg-rose-800 text-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          {/* {socialLinks?.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FFC1BA] transition-colors duration-300"
              aria-label={`Visit our ${link.platform} page`}
            >
              <i className={`fab fa-${link.icon.split('/').pop()?.split('.')[0] || 'facebook'}`} aria-hidden="true"></i>
            </a>
          )) || null} */}
        </div>
        <p>{copyrightText || "© 2025 EcoNova. All rights reserved."}</p>
      </div>
    </footer>
  );
}
