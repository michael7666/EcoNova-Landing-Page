import { FooterSection as FooterSectionType } from "../../lib/contentful";

export default function FooterSection({
  copyrightText,
  socialLinks,
}: FooterSectionType) {
  const validSocialLinks = Array.isArray(socialLinks) ? socialLinks : [];

  return (
    <footer className="py-12 bg-[#89CFF0] text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-lg">© {copyrightText || "2025 EcoNova. All rights reserved."}</p>
        </div>
        <div className="flex justify-center space-x-6 mb-4 md:mb-0">
          {validSocialLinks.length > 0 ? (
            validSocialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFC1BA] transition-colors duration-300 text-2xl"
                aria-label={`Visit our ${link.platform || 'social'} page`}
              >
                <i className={`fab fa-${link.icon || 'facebook'}`} aria-hidden="true"></i>
              </a>
            ))
          ) : (
            <p className="text-sm text-[#FFE5E2]">No social links available</p>
          )}
        </div>
        <div className="text-center md:text-right">
          <p className="text-lg mb-2">Newsletter</p>
          <p className="text-sm mb-2">Receive updates on renewable energy innovations.</p>
          <div className="flex justify-end sm:flex-row gap-2">
            <button className="inline-block bg-[#00CED1] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#89CFF0] hover:text-[#1E3A8A] transition-all duration-300 shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </div>
          <p className="text-xs mt-2 text-[#D1D5DB]">By subscribing, you agree to our Privacy Policy and consent to receive updates from us.</p>
        </div>
      </div>
    </footer>
  );
}