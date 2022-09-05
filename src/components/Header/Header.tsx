export const Header = () => {
    return (
        <>
            <header className="w-320 h-20 bg-blacks-400 flex justify-start p-1 items-center text-white">
                <div className=" m-4 p-4 rounded-md hover:ring-2 hover:ring-blues-400 transition-color duration-200 delay-200 cursor-pointer">Kauan Gouveia</div>
                <div className=" m-4 p-4 rounded-md hover:ring-2 hover:ring-blues-400 transition-color duration-200 delay-200 cursor-pointer">Projects</div>
                <div className=" m-4 p-4 rounded-md hover:ring-2 hover:ring-blues-400 transition-color duration-200 delay-200 cursor-pointer">About me</div>
                <div className="m-4 ml-5 p-4 rounded-md hover:ring-2 hover:ring-blues-400 transition-color duration-200 delay-200 cursor-pointer">Experiences</div>
            </header>
        </>
    )
}