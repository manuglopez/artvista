import PostMetadata from "@/components/server/PostMetadata";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const getPostMetadata = (): PostMetadata[] => {
    const folder= path.join(path.resolve('src/posts/'),'/')
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter((file) => file.endsWith('.md'))
    const posts: PostMetadata[] = markdownPosts.map((file) => {
        const fileContents = fs.readFileSync(folder + file, 'utf-8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: file.replace('.md', '')
        }

    })
    return posts
}
export default getPostMetadata()