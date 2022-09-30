interface ContentProps {
    children: JSX.Element
}

export const Content = ({ children }: ContentProps) => {
    return (
        <>
            <div className="bg-blacks-400 flex justify-center items-center">
                {children}
            </div>
        </>
    )
}