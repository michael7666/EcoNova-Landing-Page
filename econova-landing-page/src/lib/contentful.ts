import { GraphQLClient } from 'graphql-request';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = new GraphQLClient(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
});

interface LandingPageQueryResponse {
  landingPageCollection: {
    items: LandingPage[];
  };
}

export interface LandingPage {
  title: string;
  urlslug: string;
  language: string;
  sectionsCollection: {
    items: Array<HeroSection | FeaturesSection | TestimonialSection | CtaSection | FooterSection>;
  };
}

export interface HeroSection {
  __typename: 'HeroSection';
  headline: string;
  subHeadline?: string;
  backgroundImage?: { url: string };
  ctaButton?: SharedCtaBlock;
}

export interface FeatureItem {
  title: string;
  description: { json: any };
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

export interface TestimonialSection {
  __typename: 'TestimonialSection';
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
  socialLinks?: { platform: string; url: string; icon: string }[];
}

export interface SharedCtaBlock {
  ctaText: string;
  ctaLink: string;
}

export async function getLandingPage(urlslug: string, language: string = 'en-US'): Promise<LandingPage | null> {
  const query = `
    query($urlslug: String!, $language: String!) {
      landingPageCollection(where: { urlslug: $urlslug }, locale: $language, limit: 1) {
        items {
          title
          urlslug
          language
          sectionsCollection(limit: 10) {
            items {
              __typename
              ... on HeroSection {
                headline
                subHeadline
                backgroundImage { url }
                ctaButton {
                  ... on SharedCtaBlock {
                    ctaText
                    ctaLink
                  }
                }
              }
              ... on FeaturesSection {
                title
                featuresCollection(limit: 10) {
                  items {
                    ... on FeatureItem {
                      title
                      description { json }
                      icon { url }
                    }
                  }
                }
              }
              ... on TestimonialSection {
                title
                testimonialsCollection(limit: 10) {
                  items {
                    ... on TestimonialItem {
                      quote { json }
                      authorName
                      authorTitle
                    }
                  }
                }
              }
              ... on CtaSection {
                headline
                description { json }
                ctaButton {
                  ... on SharedCtaBlock {
                    ctaText
                    ctaLink
                  }
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
    const data = await client.request<LandingPageQueryResponse>(query, { urlslug, language });
    const page = data.landingPageCollection.items[0];
    if (!page) {
      return null;
    }
    return page;
  } catch (error: any) {
    
    return null;
  }
}