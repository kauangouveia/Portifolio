import { Articles } from "../../components/Articles/Articles"
import { Content } from "../../components/Content"
import { Technology } from "../../components/Technology/"
import { Header } from "../../components/Header"
import { Presentation } from "../../components/Presentation"

export const Home = () => {
    return (
        <>
            <div className="w-full h-[35rem] bg-blacks-400 flex  items-center flex-col">
                <div className="w-320 h-auto bg-blacks-400 flex justify-center items-center flex-col" >
                    <Header />
                    <Presentation />
                </div>
            </div>
            <div className="w-full h-[30rem] bg-zinc-700 flex  items-center flex-col">
                <div className="w-320 h-auto bg-zinc-700 flex justify-center items-center flex-col" >
                    <Articles />
                </div>
            </div>
            <div className="w-full h-[45rem] bg-gray-800 flex  items-center flex-col">
                <div className="w-320 h-auto bg-zinc-700 flex justify-center " >
                    <Technology />
                </div>
            </div>
        </>
    )
}