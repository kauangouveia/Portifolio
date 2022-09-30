export const Technology = () => {
    const experiences = ['REACT', "NEXT", 'TYPESCRIPT', 'JAVASCRIPT', "STYLED-COMPONENTS", "TAILWIND", 'CONTEXT-API','API'] as const
    
    

    return (
        <>
            <div className="flex bg-gray-800  items-center justify-center flex-col">

                <div className="  bg-gray-800  mt-3 text-white"><h3>MY SKILLS</h3></div>

                

                <div className=" mt-3 w-full h-[30rem] bg-gray-800 flex flex-wrap justify-center" >
                    {experiences.map((item) => {
                        console.log(item)
                        return (
                            <>
                                <div key={item} className={`w-60 h-60 bg-transparent rounded-2xl m-3 mb-5 bg-${item} bg-cover bg-no-repeat`}></div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
