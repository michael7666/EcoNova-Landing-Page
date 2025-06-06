import { GraphQLClient } from 'graphql-request';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Initialize GraphQL client
const client = new GraphQLClient(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
});

// TypeScript interfaces for content types
export interface LandingPage {
  title: string;
  slug: string;
  locale: string;
  sectionsCollection: {
    items: Array<HeroSection | FeaturesSection | TestimonialsSection | CtaSection | FooterSection>;
  };
}

export interface HeroSection {
  __typename: 'HeroSection';
  headline: string;
  subHeadline: string;
  backgroundImage?: { url: string };
  ctaButton?: SharedCtaBlock;
}

export interface FeatureItem {
  title: string;
  description: { json: any }; // Consider using contentful's Document type for richer typing
  icon?: { url: string };
}

export interface FeaturesSection {
  __typename: 'FeaturesSection';
  title: string;
  featuresCollection: { items: FeatureItem[] };
}

export interface TestimonialItem {
  quote: { json: any };
  authorName: string;
  authorTitle: string;
}

export interface TestimonialsSection {
  __typename: 'TestimonialsSection';
  title: string;
  testimonialsCollection: { items: TestimonialItem[] };
}

export interface CtaSection {
  __typename: 'CtaSection';
  headline: string;
  description: { json: any };
  ctaButton?: SharedCtaBlock;
}

export interface FooterSection {
  __typename: 'FooterSection';
  copyrightText: string;
  socialLinks: { platform: string; url: string; icon: string }[];
}

export interface SharedCtaBlock {
  ctaText: string;
  ctaLink: string;
}

// Interface for the GraphQL response
interface LandingPageResponse {
  landingPageCollection: {
    items: LandingPage[];
  };
}

export async function getLandingPage(slug: string, locale: string = 'en-US'): Promise<LandingPage | null> {
  const query = `
    query($slug: String!, $locale: String!) {
      landingPageCollection(where: { slug: $slug }, locale: $locale, limit: 1) {
        items {
          title
          slug
          locale
          sectionsCollection(limit: 10) {
            items {
              __typename
              ... on HeroSection {
                headline
                subHeadline
                backgroundImage { url }
                ctaButton {
                  ctaText
                  ctaLink
                }
              }
              ... on FeaturesSection {
                title
                featuresCollection(limit: 10) {
                  items {
                    title
                    description { json }
                    icon { url }
                  }
                }
              }
              ... on TestimonialsSection {
                title
                testimonialsCollection(limit: 10) {
                  items {
                    quote { json }
                    authorName
                    authorTitle
                  }
                }
              }
              ... on CtaSection {
                headline
                description { json }
                ctaButton {
                  ctaText
                  ctaLink
                }
              }
              ... on FooterSection {
                copyrightText
                socialLinks
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await client.request<LandingPageResponse>(query, { slug, locale });
    return data.landingPageCollection.items[0] || null;
  } catch (error) {
    console.error('Contentful fetch error:', error);
    return null;
  }
}