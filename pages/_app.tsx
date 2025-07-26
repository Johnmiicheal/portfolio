/* eslint-disable @next/next/no-sync-scripts */
import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../themes";
import Router, { useRouter } from "next/router";
import TopBarProgress from "react-topbar-progress-indicator";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Johnmicheal Elijah - AI Engineer & Full-Stack Developer",
  description:
    "Founding AI Engineer at AI Rankia building multi-agent systems. Expert full-stack developer specializing in React, Next.js, TypeScript.",
  generator: "Next.js",
  applicationName: "Johnmicheal Elijah Portfolio",
  keywords: [
    "Johnmicheal Elijah",
    "AI Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Expert",
    "TypeScript Developer",
    "Frontend Engineer",
    "Remote Developer",
    "Global Freelancer",
    "AI Rankia Engineer",
    "Multi-agent AI Systems",
    "Machine Learning Engineer",
    "Web Development",
    "Mobile App Developer",
    "JavaScript Expert",
    "Python Developer",
    "GraphQL Developer",
    "UI/UX Designer",
    "Software Engineer",
    "Nottingham Trent University",
    "Covenant University",
    "NTU Graduate",
    "Creative Developer",
    "Interface Designer",
    "Contract Developer",
    "Remote Work Specialist",
    "International Developer",
    "Startup Engineer",
    "Tech Consultant",
    "Figma Expert",
    "Node.js Developer",
    "PostgreSQL Expert",
    "Modern Web Interfaces",
    "Production-ready Applications",
    "Experimental Design",
    "Digital Product Development",
    "SaaS Development",
    "API Development",
    "Cloud Solutions",
    "Agile Development",
    "Technical Leadership",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Johnmicheal Elijah - AI Engineer & Full-Stack Developer",
    description:
      "Founding AI Engineer building multi-agent systems at AI Rankia. Expert in React, Next.js, TypeScript with Masters in Software Engineering from NTU.",
    url: "https://johnmicheal.xyz/",
    siteName: "Johnmicheal Elijah Portfolio",
    images: [
      {
        url: "/jm-seo.png",
        width: 1007.08,
        height: 566.48,
        alt: "Johnmicheal Elijah - AI Engineer and Full-Stack Developer Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Johnmicheal Elijah - AI Engineer & Full-Stack Developer",
    description:
      "Founding AI Engineer at AI Rankia 🤖 Building multi-agent systems & modern web interfaces with React, Next.js & TypeScript.",
    creator: "@johnmiiiicheal",
    images: ["/jm-seo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  alternates: {
    canonical: "https://johnmicheal.xyz",
    languages: {
      "en-US": "https://johnmicheal.xyz",
      "x-default": "https://johnmicheal.xyz",
    },
  },
  verification: {
    google: "your-google-verification-code-here",
    yandex: "your-yandex-verification-code-here",
    yahoo: "your-yahoo-verification-code-here",
  },
  authors: [{ name: "Johnmicheal Elijah", url: "https://johnmicheal.xyz" }],
  creator: "Johnmicheal Elijah",
  publisher: "Johnmicheal Elijah",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://johnmicheal.xyz"),
  bookmarks: ["https://johnmicheal.xyz"],
  classification: "AI Engineering, Software Development, Technology",
};

function MyApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = React.useState(false);
  Router.events.on("routeChangeStart", () => {
    setProgress(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setProgress(false);
  });
  TopBarProgress.config({
    barColors: {
      "0": "#FFCE83",
      "1.0": "#8E6930",
    },
  });
  const [showChild, setShowChild] = React.useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  const message = `
  %cWebsite designed by Johnmiicheal\n
   #####    #####   ######    ######  ######   ##  ##   ##  ##   
  #######  #######  #######  #######  #######  ### ##   ## ##    
  ##   ##  ##   ##       ##  ##            ##  ######   ####     
  ##       ##   ##  ##   ##  #######  ######   ######   ####     
  ##   ##  ##   ##  ##   ##  ##       ##       ## ###   ## ##    
  #######  #######  #######  #######  ##       ##  ##   ##  ##   
   #####    #####   ######    ######  ##       ##  ##   ##   ## 
  `;
  console.log(message, "color: pink;");

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <title>
            Johnmicheal Elijah {">"} For Humans
          </title>

          {/* Basic Meta Tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="author" content="Johnmicheal Elijah" />
          <meta name="publisher" content="Johnmicheal Elijah" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          <meta name="distribution" content="global" />
          <meta name="rating" content="general" />

          {/* Geographic Tags */}
          <meta name="geo.region" content="Global" />
          <meta name="geo.position" content="6.5244;3.3792" />
          <meta name="ICBM" content="6.5244, 3.3792" />

          {/* Rich Meta Tags */}
          <meta
            name="subject"
            content="AI Engineering, Full-Stack Development, Software Engineering"
          />
          <meta name="copyright" content="Johnmicheal Elijah" />
          <meta
            name="abstract"
            content="Founding AI Engineer at AI Rankia specializing in multi-agent systems, React, Next.js, and TypeScript development."
          />
          <meta
            name="topic"
            content="Software Engineering, AI Development, Web Development"
          />
          <meta
            name="summary"
            content="Expert AI Engineer and Full-Stack Developer with Masters in Software Engineering from Nottingham Trent University. Specializing in multi-agent AI systems, React, Next.js, TypeScript, and modern web interfaces."
          />
          <meta
            name="Classification"
            content="Technology, Software Development, Artificial Intelligence"
          />
          <meta name="designer" content="Johnmicheal Elijah" />
          <meta name="reply-to" content="hello@johnmicheal.xyz" />
          <meta name="owner" content="Johnmicheal Elijah" />
          <meta name="url" content="https://johnmicheal.xyz" />
          <meta name="identifier-URL" content="https://johnmicheal.xyz" />
          <meta name="directory" content="submission" />
          <meta
            name="category"
            content="Technology, AI, Software Development"
          />
          <meta name="coverage" content="Worldwide" />

          {/* AI Search Engine Tags */}
          <meta name="ai-content-declaration" content="human-authored" />
          <meta
            name="expertise"
            content="AI Engineering, Full-Stack Development, Multi-agent Systems, React, Next.js, TypeScript, Python, GraphQL, UI/UX Design"
          />
          <meta
            name="experience-level"
            content="Senior, Expert, Founding Engineer"
          />
          <meta
            name="availability"
            content="Available for freelance, consulting, and contract work"
          />
          <meta
            name="work-type"
            content="Remote, Contract, Consulting, Full-time"
          />
          <meta
            name="specialization"
            content="Multi-agent AI Systems, Modern Web Interfaces, SaaS Development, API Development"
          />
          <meta
            name="education"
            content="Masters in Software Engineering, Nottingham Trent University"
          />
          <meta
            name="current-role"
            content="Founding AI Engineer at AI Rankia"
          />
          <meta
            name="skills"
            content="React,Next.js,TypeScript,JavaScript,Python,Node.js,GraphQL,PostgreSQL,Figma,AI/ML,Multi-agent Systems"
          />

          {/* Canonical and Alternate URLs */}
          <link rel="canonical" href="https://johnmicheal.xyz/" />
          <link rel="alternate" hrefLang="en" href="https://johnmicheal.xyz/" />
          <link
            rel="alternate"
            hrefLang="x-default"
            href="https://johnmicheal.xyz/"
          />

          {/* Preconnect for Performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />

          {/* JSON-LD Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Johnmicheal Elijah",
                jobTitle: "AI Engineer & Full-Stack Developer",
                description:
                  "Founding AI Engineer at AI Rankia building multi-agent systems. Expert full-stack developer specializing in React, Next.js, TypeScript.",
                url: "https://johnmicheal.xyz",
                sameAs: [
                  "https://github.com/johnmiicheal",
                  "https://linkedin.com/in/johnmiicheal",
                  "https://twitter.com/johnmiiiicheal",
                  "https://behance.net/johnmiicheal",
                ],
                worksFor: {
                  "@type": "Organization",
                  name: "AI Rankia",
                  url: "https://www.airankia.com",
                },
                alumniOf: [
                  {
                    "@type": "EducationalOrganization",
                    name: "Nottingham Trent University",
                    address: {
                      "@type": "PostalAddress",
                      addressCountry: "UK",
                    },
                  },
                  {
                    "@type": "EducationalOrganization",
                    name: "Covenant University",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Ota",
                      addressRegion: "Ogun State",
                      addressCountry: "Nigeria",
                    },
                  },
                ],
                knowsAbout: [
                  "Artificial Intelligence",
                  "Multi-agent Systems",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "Python",
                  "Node.js",
                  "GraphQL",
                  "PostgreSQL",
                  "UI/UX Design",
                  "Software Engineering",
                  "Full-Stack Development",
                  "Web Development",
                  "API Development",
                  "SaaS Development",
                ],
                hasOccupation: {
                  "@type": "Occupation",
                  name: "AI Engineer",
                  occupationLocation: {
                    "@type": "Place",
                    name: "Remote, Worldwide",
                  },
                  skills:
                    "AI Engineering, Full-Stack Development, React, Next.js, TypeScript, Python, Multi-agent Systems",
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Lagos",
                  addressCountry: "Nigeria",
                },
                nationality: "Nigerian",
                email: "hello@johnmicheal.xyz",
                image: "https://johnmicheal.xyz/jm-seo.png",
                birthPlace: "Nigeria",
                workLocation: "Remote, Worldwide",
                seeks: {
                  "@type": "Demand",
                  name: "Freelance and Contract Opportunities",
                  description:
                    "Available for AI engineering, full-stack development, and consulting projects worldwide",
                },
              }),
            }}
          />

          {/* Professional Profile Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "Johnmicheal Elijah - AI Engineering & Development Services",
                description:
                  "Expert AI engineering and full-stack development services specializing in multi-agent systems, React, Next.js, and modern web interfaces.",
                provider: {
                  "@type": "Person",
                  name: "Johnmicheal Elijah",
                },
                areaServed: "Worldwide",
                availableLanguage: "English",
                serviceType: [
                  "AI Engineering",
                  "Multi-agent Systems Development",
                  "Full-Stack Development",
                  "React Development",
                  "Next.js Development",
                  "TypeScript Development",
                  "UI/UX Design",
                  "API Development",
                  "SaaS Development",
                  "Technical Consulting",
                ],
                url: "https://johnmicheal.xyz",
                telephone: "+234-XXX-XXX-XXXX",
                email: "hello@johnmicheal.xyz",
              }),
            }}
          />

          {/* Website Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Johnmicheal Elijah Portfolio",
                description:
                  "Portfolio website of Johnmicheal Elijah, AI Engineer and Full-Stack Developer",
                url: "https://johnmicheal.xyz",
                author: {
                  "@type": "Person",
                  name: "Johnmicheal Elijah",
                },
                inLanguage: "en-US",
                copyrightYear: "2025",
                copyrightHolder: {
                  "@type": "Person",
                  name: "Johnmicheal Elijah",
                },
              }),
            }}
          />
        </Head>
        <ChakraProvider theme={theme}>
          {progress && <TopBarProgress />}
          <Component {...pageProps} />
          <Analytics />
          <SpeedInsights />
        </ChakraProvider>
      </ThemeProvider>
    );
  }
}

export default MyApp;
