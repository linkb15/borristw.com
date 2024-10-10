import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "borristw.com",
  tagline: "Built. Ship. Optimize.",
  description:
    "I am a senior frontend engineer with 6+ years of experience interested in building websites, scaling systems up, and shipping reliable applications focusing on clean user interfaces and clean codebase with great development experiences.",
  description_short:
    "I am a senior frontend engineer with 6+ years of experience.",
  url: "https://borristw.com",
  author: "Borris Trendy Wiria",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Built. Ship. Optimize.`,
  description:
    "I am a senior frontend engineer with 6+ years of experience interested in building websites, scaling systems up, and shipping reliable applications focusing on clean user interfaces and clean codebase with great development experiences.",
  image: ogImageSrc,
};
