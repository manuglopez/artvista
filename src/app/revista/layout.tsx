import Nav from "@/components/Navigation/Nav";

const RevistaLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <Nav/>

            {children}
        </section>
    );
}

export default RevistaLayout;