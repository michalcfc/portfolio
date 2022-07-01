import { createOgImage } from "~lib/og"
import type { DefaultSeoProps } from "next-seo"

const title = `Michal Jachimowski`
const description = `Welcome to my virtual world.`
const domain = `icoding.pl`
const twitter = `@m_jachimowski`

export const seo: DefaultSeoProps = {
    title,
    description,
    openGraph: {
        title,
        type: "website",
        url: `https://${domain}`,
        site_name: title,
        images: [
            {
                url: 'https://www.example.ie/og-image-01.jpg',
                width: 1600,
                height: 836,
                alt: title,
            },
        ],
    },
    twitter: {
        handle: twitter,
        cardType: "summary_large_image",
    },
}