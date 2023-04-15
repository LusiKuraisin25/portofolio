import Layout from "./Layout";

export default function Index({title}) {
    return (
        <Layout title={title}>
            <div className="w-full px-32 pt-32 text-white h-screen bg-img">
                <span className="left-16 relative before:content-[''] before:absolute before:w-7 before:top-1/2 before:-left-9 before:bg-white before:h-[1px] after:content-[''] after:absolute after:w-7 after:top-1/2 after:left-11 after:bg-white after:h-[1px]">Hello</span>
                <h1 className="font-medium text-xl">I'am ahmad, and i'm</h1>
                <h1 className="text-7xl">Programmer</h1><br />
                <span className="text-xl">" want to be good at coding? Relax, I'm ready to be your partner <br /> <span className="text-2xl">anytime and anywhere."</span></span>
            </div>
            <div className="w-full h-screen bg-dark">

            </div>
        </Layout>
    )
}
