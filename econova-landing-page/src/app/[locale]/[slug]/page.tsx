import { getLandingPage } from '@/lib/contentful';
import HeroSection from '../../../components/sections/HeroSection';
import FeaturesSection from '../../../components/sections/FeaturesSection';
import TestimonialsSection from '../../../components/sections/TestimonialsSection';
import CtaSection from '../../../components/sections/CtaSection';
import FooterSection from '../../../components/sections/FooterSection';
import LanguageSwitcher from '../../../components/LanguageSwitcher';

export const revalidate = 60; // ISR: Revalidate every 60 seconds

export default async function LandingPage({ params }: { params: { locale: string; slug: string } }) {
  const page = await getLandingPage(params.slug, params.locale);
  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">Error loading page. Please try again later.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <LanguageSwitcher slug={params.slug} />
      <div className="flex flex-col">
        {page.sectionsCollection.items.map((section, index) => {
          switch (section.__typename) {
            case 'HeroSection':
              return <HeroSection key={index} {...section} />;
            case 'FeaturesSection':
              return <FeaturesSection key={index} {...section} />;
            case 'TestimonialsSection':
              return <TestimonialsSection key={index} {...section} />;
            case 'CtaSection':
              return <CtaSection key={index} {...section} />;
            case 'FooterSection':
              return <FooterSection key={index} {...section} />;
            default:
              return null;
          }
        })}
      </div>
    </main>
  );
}