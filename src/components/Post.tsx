import PostMetadata from "@/components/server/PostMetadata";
import Link from "next/link";
import Image from "next/image";

const Post = (post: PostMetadata) => {
    return (
        <Link  href={`/blog/${post.slug}`}>
            <div className='p-4 m-6 border shadow-2xl shadow-black_arti hover:shadow rounded-tl-2xl rounded-br-2xl' >
                <div className='image-container hover:sepia'>
                    <h2 className=' text-center py-8 font-semibold uppercase text-sm'>{post.title}</h2>
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
                    <p className='text-xs float-right text-slate-300'>{post.date}</p>
                </div>
            </div>
        </Link>
    );
};

export default Post;
