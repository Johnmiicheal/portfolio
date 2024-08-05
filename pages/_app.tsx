/* eslint-disable @next/next/no-sync-scripts */
import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";
import React, {useEffect} from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../themes";
import Router, { useRouter } from "next/router";
import TopBarProgress from "react-topbar-progress-indicator"
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Johnmicheal Elijah — Frontend Engineer",
    description:
      "Frontend Engineer and Interface Designer. Focused on building web and mobile software interface, working remotely from Lagos, Nigeria.",
    generator: "Next.js",
    applicationName: "Johnmicheal Elijah",
    keywords: [
      "freelance",  
      "developer",
      "freelance developer",
      "frontend",
      "react",
      "frontend developer",
      "frontend engineer",
      "creative",
      "creative developer",
      "creative engineer",
      "tech",
      "nigeria",
      "software",
      "software developer",
      "portfolio",
      "frontend developer portfolio",
      "creative developer portfolio",
    ],
    colorScheme: "light",
    openGraph: {
      title: "Johnmicheal Elijah — Frontend Engineer",
      description:
        "Frontend Engineer and Interface Designer. Focused on building web and mobile software interface, working remotely from Lagos, Nigeria.",
      url: "https://johnmicheal.vercel.app/",
      siteName: "johnmiicheal.vercel.app",
      images: [
        {
          url: "/website.png",
          width: 1200,
          height: 630,
          alt: "Johnmicheal Elijah — Frontend Engineer",
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Johnmicheal Elijah — Frontend Engineer",
      description:
        "Frontend Engineer and Interface Designer. Focused on building web and mobile software interface, working remotely from Lagos, Nigeria.",
      creator: "johnmiiiicheal",
      images: [
        "/images/jmm.png",
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "technology",
  };

function MyApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = React.useState(false)
  Router.events.on("routeChangeStart", () => { setProgress(true) })
  Router.events.on("routeChangeComplete", () => { setProgress(false) })
  TopBarProgress.config({
    barColors: {
      "0": "#FFCE83",
      "1.0": "#8E6930"
    }
  })
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
  `
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
          <link rel="shortcut icon" href="/assets/favicon.svg" />
          <title>Johnmicheal Elijah - Portfolio Website</title>
        </Head>
          <ChakraProvider theme={theme}>
            {progress && <TopBarProgress />}
          <Component {...pageProps} />
        </ChakraProvider>
        
        </ThemeProvider>
    );
  }
}


export default MyApp;
