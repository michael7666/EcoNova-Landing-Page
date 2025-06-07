import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { CtaSection as CtaSectionType } from "@/lib/contentful";

export default function CtaSection({
  headline,
  description,
  ctaButton,
}: CtaSectionType) {
  return (
    <section className="py-16 bg-gradient-to-r from-[#F88379] to-[#FF6F61] text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">
          {headline || "Take Action Now"}
        </h2>
        <div className="text-lg mb-8">
          {description?.json ? (
            documentToReactComponents(description.json)
          ) : (
            <p>Join the sustainable revolution</p>
          )}
        </div>
        {ctaButton && (
          <a
            href={ctaButton.ctaLink}
            className="inline-block bg-[#FFC1BA] text-[#F56A5D] px-8 py-4 rounded-lg font-semibold hover:bg-[#FF9A8F] transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label={ctaButton.ctaText}
          >
            {ctaButton.ctaText || "Get Started"}
          </a>
        )}
      </div>
    </section>
  );
}
