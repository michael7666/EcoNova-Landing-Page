import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { CtaSection as CtaSectionType } from "@/lib/contentful";

export default function CtaSection({
  headline,
  description,
  ctaButton,
}: CtaSectionType) {
  return (
    <section className="py-12 bg-green-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          {headline || "Take Action Now"}
        </h2>
        <div className="text-lg mb-6">
          {description?.json ? (
            documentToReactComponents(description.json)
          ) : (
            <p>Join the sustainable revolution</p>
          )}
        </div>
        {ctaButton && (
          <a
            href={ctaButton.ctaLink}
            className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            aria-label={ctaButton.ctaText}
          >
            {ctaButton.ctaText || "Get Started"}
          </a>
        )}
      </div>
    </section>
  );
}
