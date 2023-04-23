import Links from "./Links";

export default function Navbar() {

    return (
        <nav className="w-screen p-5 fixed flex justify-around items-center font-medium bg-gradient-to-b from-slate-900 to-transparent text-gray-400 text-xl z-50">
            {/* <h1 className="whitespace-nowrap text-xl text-gray-100">Ngoding Hub</h1> */}
            <img src="/img/judul.png" width="250" />
            <div className=" w-1/3 flex justify-around">
                <Links href="/" active={route().current('')}>
                    <span>Home</span>
                </Links>
                <Links href="/">
                    <span>About me</span>
                </Links>
                <Links href="/">
                    <span>Portofolio</span>
                </Links>
                <Links href="/">
                    <span>Contact</span>
                </Links>
            </div>
        </nav>
    )
}

