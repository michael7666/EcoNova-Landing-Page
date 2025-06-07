
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { CtaSection as CtaSectionType } from "../../lib/contentful";

export default function CtaSection({
  headline,
  description,
  ctaButton,
}: CtaSectionType) {
  return (
    <section className="py-20 bg-gradient-to-r from-[#F9FAFB] to-[#89CFF0] opacity-90 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          {headline || "Take Action Now"}
        </h2>
        <div className="text-lg lg:text-xl mb-8">
          {description?.json ? (
            documentToReactComponents(description.json)
          ) : (
            <p>Join the sustainable revolution</p>
          )}
        </div>
        {ctaButton && (
          <a
            href={ctaButton.ctaLink}
            className="inline-block bg-[#89CFF0] text-[#1E3A8A] px-8 py-4 rounded-full font-semibold hover:bg-[#00CED1] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label={ctaButton.ctaText}
          >
            {ctaButton.ctaText || "Get Started"}
          </a>
        )}
      </div>
    </section>
  );
}