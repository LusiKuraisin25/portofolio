import Navbar from "@/Components/Navbar";
import Footer from "@/Components/footer";
import { Head } from "@inertiajs/react";

export default function Layout({title, children, className = ''}) {
    return (
        <>
            <Head title={title} />
            <Navbar />
                <div className={`w-screen ${className}`}>
                    {children}
                </div>
            <Footer />
        </>
    )
}
