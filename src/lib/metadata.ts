import type { Metadata } from "next";

export const SITE_URL = "https://www.anishkumar.online";
export const SITE_NAME = "Anish Kumar Gupta";
export const DEFAULT_TITLE = "Anish Kumar Gupta | Full Stack Software Engineer";
export const X_HANDLE = "@Anish_029";

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: DEFAULT_TITLE,
};

interface PageMetadataOptions {
  // Omit for the home page, which uses the default title.
  title?: string;
  description: string;
  keywords: string[];
  path: string;
}

export function pageMetadata({ title, description, keywords, path }: PageMetadataOptions): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;

  return {
    ...(title && { title }),
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: `${SITE_NAME} Portfolio`,
      url: path,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      creator: X_HANDLE,
      site: X_HANDLE,
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
