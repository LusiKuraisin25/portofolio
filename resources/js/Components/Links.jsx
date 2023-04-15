import { Link } from "@inertiajs/react";

export default function Links({children, className = '', active = false, ...props }) {
    return (
        <Link {...props} className={`relative hover:text-white before:content-[""] before:absolute before:w-0 before:bottom-0 before:bg-white before:h-[2px] hover:before:w-full before:transition-all ${className} ${active ? 'text-blue-300' : ''}`}>
            {children}
        </Link>
    )
}
