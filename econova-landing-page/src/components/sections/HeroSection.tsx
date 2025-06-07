import Image from "next/image";
import { HeroSection as HeroSectionType } from "../../lib/contentful";

export default function HeroSection({
  headline,
  subHeadline,
  backgroundImage,
  ctaButton,
}: HeroSectionType) {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center text-white">
      {backgroundImage?.url ? (
        <Image
          src={backgroundImage.url}
          alt="Hero Background"
          fill
          className="object-cover brightness-75"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9FAFB] to-[#89CFF0] opacity-90" />
      )}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
          {headline || "Welcome to EcoNova"}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-white">
          {subHeadline || "Sustainable innovation for a better future"}
        </p>
        {ctaButton && (
          <a
            href={ctaButton.ctaLink}
            className="inline-block bg-[#00CED1] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#89CFF0] transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label={ctaButton.ctaText}
          >
            {ctaButton.ctaText || "Learn More"}
          </a>
        )}
      </div>
    </section>
  );
}