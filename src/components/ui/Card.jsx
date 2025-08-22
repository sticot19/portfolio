import { MoveRight } from "lucide-react"

export function Card({ children, className = "" }) {
    return (
        <div className={`bg-linear-180 from-light-dark-04 to-light-dark-03 border rounded-xl border-light-dark-0a overflow-hidden flex flex-col duration-300 ease-in hover:-translate-y-2 hover:shadow-cad-shadow max-w-11/12 ${className}`}>
            {children}
        </div>
    )
}

export function CardMedia({ children, className = "" }) {
    return (
        <div className={`min-h-32 bg-linear-120 from-primary-red-dark to-cs-dark-purple ${className}`}>
            {children}
        </div>
    )
}

export function CardContent({ children, className = "" }) {
    return (
        <div className={`p-3.5 ${className}`}>
            {children}
        </div>
    )
}

export function CardTitle({ children }) {
    return (
        <h4 className="mb-1.5 text-xl text-cs-white">
            {children}
        </h4>
    )
}

export function CardDesc({ children, className = "" }) {
    return (
        <p className={`text-cs-grey mb-3 text-095 font-Sharetech ${className}`}>
            {children}
        </p>
    )
}

export function CardFooter({ children, className = "" }) {
    return (
        <p className={`text-085 text-cs-dark-grey font-Sharetech ${className}`}>
            {children}
        </p>
    )
}

export function CardButton({ children, className = "", onClick, isActive = false }) {
    return (
        <button
            onClick={onClick}
            className={`m-auto text-primary-red font-bold !cursor-pointer flex flex-row gap-2 items-center hover:text-primary-red-light ${isActive ? "text-primary-red-light" : ""} ${className}`}
        >
            {children} <MoveRight size={16} />
        </button>
    )
}