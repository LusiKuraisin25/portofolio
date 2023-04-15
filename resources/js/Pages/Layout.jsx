import Navbar from "@/Components/Navbar";
import Footer from "@/Components/footer";
import { Head } from "@inertiajs/react";
// import { gsap } from "gsap";
// import { useEffect, useRef, useState } from "react";

export default function Layout({title, children, className = ''}) {

    // const [isOnline, setIsOnline] = useState(navigator.onLine)
    // const connect = useRef(null)

    // useEffect(() => {
    //   window.addEventListener("online", handleOnline);
    //   window.addEventListener("offline", handleOffline);

    //     setTimeout(() => {
    //         gsap.to(connect.current, {
    //             duration: 1,
    //             y: -100,
    //         })
    //     }, 2000);

    //   return () => {
    //     window.removeEventListener("online", handleOnline);
    //     window.removeEventListener("offline", handleOffline);
    //   }
    // }, [])

    // const handleOnline = () => {
    //   setIsOnline(true)
    // }

    // const handleOffline = () => {
    //   setIsOnline(false)
    // }

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
