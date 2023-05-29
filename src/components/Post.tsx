import PostMetadata from "@/components/server/PostMetadata";
import Link from "next/link";
import Image from "next/image";

const Post = (post: PostMetadata) => {
    return (
        <Link  href={`/blog/${post.slug}`}>
            <div className='p-3 m-6 border shadow-2xl shadow-slate-700 hover:shadow rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg' >
                <h2 className=' text-center py-8 font-semibold uppercase text-sm'>{post.title}</h2>
                <p className='text-xs float-right text-slate-500 py-1'>{post.date}</p>
                <div className='image-container'>

                    <Image
                        className='rounded-t'
                        src={`/images/${post.slug}.jpg`}
                        alt={post.title}
                        width={1024}
                        height={768}
                    />
                </div>
                <div className='excerpt'>

                    <p className='pt-5 text-slate-400 text-sm'>{post.subtitle}</p>

                </div>
            </div>
        </Link>
    );
};

export default Post;
