import { getLandingPage } from '../../../lib/contentful';
import HeroSection from '../../../components/sections/HeroSection';
import FeaturesSection from '../../../components/sections/FeaturesSection';
import TestimonialsSection from '../../../components/sections/TestimonialsSection';
import CtaSection from '../../../components/sections/CtaSection';
import FooterSection from '../../../components/sections/FooterSection';
import LanguageSwitcher from '../../../components/LanguageSwitcher';

export const revalidate = 60;

interface Params {
  locale: string;
  slug: string;
}

// Update the props interface to match Next.js 15 requirements
interface PageProps {
  params: Promise<Params>;
}

export default async function LandingPage({ params }: PageProps) {
  // Await the params Promise
  const { slug, locale } = await params || { slug: 'econova', locale: 'en-US' };
  
  const page = await getLandingPage(slug, locale);
  if (!page || !page.sectionsCollection?.items) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">Error loading page. Please check Contentful data or try again later.</p>
      </div>
    );
  }
  
  return (
    <main className="min-h-screen flex flex-col">
      <LanguageSwitcher slug={slug} />
      {page.sectionsCollection.items.map((section, index) => {
        try {
          switch (section.__typename) {
            case 'HeroSection':
              return <HeroSection key={index} {...section} />;
            case 'FeaturesSection':
              return <FeaturesSection key={index} {...section} />;
            case 'TestimonialSection':
              return <TestimonialsSection key={index} {...section} />;
            case 'CtaSection':
              return <CtaSection key={index} {...section} />;
            case 'FooterSection':
              return <FooterSection key={index} {...section} />;
            default:
              return null;
          }
        } catch (error) {
          console.error(`Error rendering section ${section.__typename} at index ${index}:`, error);
          return null;
        }
      })}
    </main>
  );
}