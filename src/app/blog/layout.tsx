import Nav from "@/components/Navigation/Nav";
import Footer from "@/components/Footer";

const BlogLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}

            {children}

        </section>
    );
}

export default BlogLayout;