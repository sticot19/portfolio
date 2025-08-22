export default function Grid({children}) {
    
    return (
        <div className={`w-11/12 mr-auto ml-auto grid pt-5 pb-3 gap-4 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`} >
            {children}
        </div>
    )
}