import React from 'react';
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/server/getPostMetadata";
import Image from 'next/image'
import path from "path";

const getPostContent = (slug: string) => {
    const folder= path.join(path.resolve('src/posts/'),'/')
   /* const folder = 'src/posts/'*/
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, 'utf-8')
    const matterResult = matter(content)
    return {
        data: matterResult.data,
        content: matterResult.content
    }
}
export const generateStaticParams = () => {
    const posts = getPostMetadata
    return posts.map((post) => {
        slug:post.slug
    })
}
const PostPage = (props: any) => {
    const slug = props.params.slug
    const article = getPostContent(slug)
    return (
        <div className='max-w-2/3 flex flex-col items-center justify-center'>
            <h1 className='text-5xl text-slate-500 font-light py-12'>{article.data.title}</h1>
            <Image className='rounded-md shadow-lg my-8 ' src={`/images/${slug}.jpg`} width={1024} height={768} alt={article.data.subtitle} />
            <article className='prose lg:prose-xl'>
                <Markdown>{article.content}</Markdown>
            </article>
        </div>
    )
}

export default PostPage;