import getPostMetadata from '@/components/server/getPostMetadata'
import Post from "@/components/Post";


const PostList = () => {
    const postMetadata = getPostMetadata
    const posts = postMetadata.map((post, index) => {

        return (
            <Post key={post.slug}{...post}/>
        )
    })

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {posts}
        </div>
    );
};

export default PostList;