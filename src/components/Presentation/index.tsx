export const Presentation = () => {
    return (
        <>
            <div className="w-full h-[27rem] flex justify-center flex-col">
                <div className="w-full h-96 flex justify-center items-center flex-col ">
                    <div className="h-52 w-52 rounded-full bg-profile bg-cover bg-no-repeat">
                    </div>
                </div>
                <div className=" w-full h-72 flex items-center justify-center flex-col ">
                    <h1 className="font-bold text-zinc-50 text-5xl pb-2">Hi, I'm Kauan Gouveia</h1>
                    <h5 className="font-bold text-zinc-500  text-2xl pb-3">I write about building profitable indie products as a developer</h5>
                    <small className="font-bold text-zinc-500 text-sm">I'm building an analytics SaaS called Affilimate and a newsletter and community called Blogging for Devs. Find out more on the blog →</small>
                </div>
            </div>
        </>
    )
}