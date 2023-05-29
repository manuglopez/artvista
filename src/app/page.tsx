import Nav from "@/components/Navigation/Nav";
import Revista from "@/components/Revista";
import Valores from "@/components/Valores";
import Podcast from "@/components/Podcast";
import PostList from "@/components/server/PostList";


export default function Home() {

    return (
        <>

            <div>
                <Nav/>
                <main className="min-h-screen">
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
                </main>
                <footer/>

            </div>
        </>
    )

}
