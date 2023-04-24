import Layout from "./Layout";

export default function Index({title}) {



    return (
        <Layout title={title}>
            <div className="w-screen text-white h-screen bg-img">
                <div className="w-full px-32 pt-40">
                    <span className="left-16 relative before:content-[''] before:absolute before:w-7 before:top-1/2 before:-left-9 before:bg-white before:h-[1px] after:content-[''] after:absolute after:w-7 after:top-1/2 after:left-11 after:bg-white after:h-[1px]">Hello</span> 
                    <h1 className="font-medium text-xl">I'am ahmad, and i'm</h1>
                    <h1 className="text-7xl">Programmer</h1><br />
                    <span className="text-xl">" want to be good at coding? Relax, I'm ready to be your partner <br /> <span className="text-2xl">anytime and anywhere."</span></span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute -bottom-36"><path fill="#000" fill-opacity="1" d="M0,160L1440,64L1440,320L0,320Z"></path></svg>
            </div>
            <div className="w-screen h-screen bg-black pt-40 px-20 text-white z-10">
                <h1 className="text-center font-medium text-3xl">About Me</h1>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi enim quos nobis ducimus doloribus delectus veritatis. Deleniti vitae unde temporibus! Assumenda voluptate, numquam cumque quasi molestias illo ipsam quidem alias natus incidunt nostrum qui quod fugit odio reiciendis eveniet magni nesciunt nemo consectetur tempore facilis! Architecto illo deleniti illum, ratione maiores velit eos, asperiores hic expedita, error temporibus. Aperiam soluta debitis harum animi. Reprehenderit, dolore vero cum quos nam vel deserunt ipsum magnam neque saepe facere vitae dicta enim ratione at doloribus dolorem! Illo placeat, sequi excepturi eveniet laudantium velit consequuntur vero cum ab tempora ex labore voluptate odit inventore.</p>
            </div>
        </Layout>
    )
}
