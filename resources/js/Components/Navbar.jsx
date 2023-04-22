import Links from "./Links";

export default function Navbar() {

    return (
        <nav className="w-screen p-5 flex justify-around items-center font-medium bg-slate-900 text-gray-400">
            {/* <h1 className="whitespace-nowrap text-xl text-gray-100">Ngoding Hub</h1> */}
            <img src="/img/judul.png" width="200" />
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

