import Revista from "@/components/Revista";
import Valores from "@/components/Valores";
import Podcast from "@/components/Podcast";
import PostList from "@/components/server/PostList";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Artivista Home',
    description: 'Artivista es una web de arte actual y alternativo',
    authors: [{name: 'Manuel Glez', url: 'https://mglopez.com'}],
    icons: [
        {rel: "icon", url: "favicons/favicon-32x32.png", sizes: "32x32"},
        {rel: "apple-touch-icon", url: "favicons/apple-touch-icon.png"},
        {rel: "mask-icon", url: "favicons/safari-pinned-tab.svg"}
    ],
    openGraph: {
        type: "website",
        url: "https://example.com",
        title: "My Website",
        description: "My Website Description",
        siteName: "My Website",
        images: [{
            url: "https://example.com/og.png",
        }],
    },
    twitter:{ card: "summary_large_image", site: "@site", creator: "@creator", "images": "https://example.com/og.png" }

}
export default function Home() {


    return (
        <>
            <section id="revista" className='relative  max-h-7xl'>
                <Revista/>
            </section>
            <section id="valores">
                <Valores/>
            </section>
            <section id='blog'>
                <PostList/>
            </section>
            <section id='podcast'>
                <Podcast/>
            </section>
        </>
    )

}
