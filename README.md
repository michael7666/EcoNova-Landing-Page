# EcoNova-Landing-Page

Welcome to the EcoNova Landing Page project! This is a Next.js application designed to showcase a sustainable energy company's offerings with support for multiple locales (English and Spanish). The page features a modern design with a blue/cyan color palette, optimized for performance and accessibility. A dynamic, responsive landing page for the fictional EcoNova product, built with Next.js, TypeScript, Tailwind CSS, and Contentful as a headless CMS. The page supports dynamic section rendering, localization (English and Spanish), and adheres to headless CMS best practices.

Project Overview:
EcoNova is a fictional renewable energy company aiming to promote sustainable innovation. This landing page serves as a showcase for its features, testimonials, call-to-action, and footer with social links and a newsletter signup.
    - Technologies: Next.js, Tailwind CSS, Contentful (headless CMS)
    - Locales: English (en-US), Spanish (es)
    - Color Palette: Sky Blue (#87CEEB), Baby Blue (#89CFF0), Cyan (#00CED1), Deep Blue (#1E3A8A)

Features:
    - Hero Section: Full-screen background with a headline, subheadline, and CTA button.
    - Features Section: Grid of cards highlighting key offerings with icons.
    - Testimonials Section: Display of customer reviews in a card layout.
    - CTA Section: Prominent call-to-action with a gradient background.
    - Footer Section: Includes copyright, social links, and a newsletter signup.
    - Language Switcher: Toggle between English and Spanish locales.

Setup Instructions

1. Clone the Repository:
    git clone https://github.com/Michael7666/EcoNova-Landing-Page.git
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
