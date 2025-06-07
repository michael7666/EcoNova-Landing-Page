# EcoNova-Landing-Page

A dynamic, responsive landing page for the fictional EcoNova product, built with Next.js, TypeScript, Tailwind CSS, and Contentful as a headless CMS. The page supports dynamic section rendering, localization (English and Spanish), and adheres to headless CMS best practices.

Setup Instructions

1. Clone the Repository:
    git clone https://github.com/YourNewGitUsername/EcoNova-Landing-Page.git
    cd EcoNova-Landing-Page

2. Install Dependencies:
    npm install

3. Set Up Contentful:
    - Create a Contentful account and a new space.
    - Generate Content Delivery and Preview API tokens.
    - Create the following content types in Contentful:
        + Landing Page: title (Short Text), urlslug (Short Text), language (Short Text), sections (Reference, Many).
        + Hero Section: headline (Short Text, Localized), subHeadline (Short Text, Localized), backgroundImage (Media), ctaButton (Reference to Shared CTA Block).
        + Feature Item: title (Short Text, Localized), description (Rich Text, Localized), icon (Media).
        + Features Section: title (Short Text, Localized), features (Reference, Many).
        + Testimonial Item: quote (Rich Text, Localized), authorName (Short Text, Localized), authorTitle (Short Text, Localized).
        + Testimonials Section: title (Short Text, Localized), testimonials (Reference, Many).
        + CTA Section: headline (Short Text, Localized), description (Rich Text, Localized), ctaButton (Reference to Shared CTA Block).
        + Footer Section: copyrightText (Short Text, Localized), socialLinks (JSON Object).
        + Shared CTA Block: ctaText (Short Text, Localized), ctaLink (Short Text).
    - Enable localization for English (en-US) and Spanish (es).
    - Populate a sample Landing Page (slug: econova) with Hero, Features, Testimonials,   and CTA sections in both languages.
    - Add API keys to .env:
        CONTENTFUL_SPACE_ID=your_space_id
        CONTENTFUL_ACCESS_TOKEN=your_access_token
        CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token
        CONTENTFUL_ENVIRONMENT=master

4. Run Locally:
    npm run dev
