interface ContentProps {
    children: JSX.Element
}

export const Content = ({ children }: ContentProps) => {
    return (
        <>
            <div className="w-screen h-screen bg-blacks-400 flex justify-center items-center">
                {children}
            </div>
        </>
    )
}