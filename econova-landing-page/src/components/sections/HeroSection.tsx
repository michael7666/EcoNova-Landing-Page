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
        <div className="absolute inset-0 bg-[#F56A5D]" />
      )}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl sm:text-6xl md:text-6xl text-[#FFD1CC] font-bold mb-6 text-corals-200 drop-shadow-lg">
          {headline || "Welcome to EcoNova"}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-[#FFE5E2]">
          {subHeadline || "Sustainable innovation for a better future"}
        </p>
        {ctaButton && (
          <a
            href={ctaButton.ctaLink}
            className="inline-block bg-salmon-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-salmon-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label={ctaButton.ctaText}
          >
            {ctaButton.ctaText || "Learn More"}
          </a>
        )}
      </div>
    </section>
  );
}
