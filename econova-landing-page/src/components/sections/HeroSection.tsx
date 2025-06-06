import Image from "next/image";
import { HeroSection as HeroSectionType } from "@/lib/contentful";

export default function HeroSection({
  headline,
  subHeadline,
  backgroundImage,
  ctaButton,
}: HeroSectionType) {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
      {backgroundImage?.url ? (
        <Image
          src={backgroundImage.url}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-green-800" />
      )}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {headline || "Welcome to EcoNova"}
        </h1>
        <p className="text-lg md:text-xl mb-6">
          {subHeadline || "Sustainable innovation for a better future"}
        </p>
        {ctaButton && (
          <a
            href={ctaButton.ctaLink}
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            aria-label={ctaButton.ctaText}
          >
            {ctaButton.ctaText || "Learn More"}
          </a>
        )}
      </div>
    </section>
  );
}
