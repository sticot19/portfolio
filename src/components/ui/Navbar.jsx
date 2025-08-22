import { Menu, X } from "lucide-react"
import { Link } from "react-router"

export function Navbar({ children }) {
    return (
        <div className="sticky top-2.5 z-30 w-95p m-auto">
            <div
                className="flex items-center justify-between 
                    mb-3 pt-3 pb-3 bg-gradient-to-b from-light-dark-03 to-light-dark-00
                    rounded-xl border border-light-dark-0a shadow-xl
                "
            >
                {children}
            </div>
        </div>
    )
}

export function NavbarLogo({ children }) {
    return (
        <Link to="/" className="text-cs-white font-bold tracking-widest inline-flex align-baseline gap-1.5 ml-2.5">
            {children}
        </Link>
    )
}

export function NavbarToggle({ open, onClick }) {
    return (
        <button
            className="nav-toggle md:hidden p-2 rounded hover:bg-light-dark-05"
            aria-controls="primary-menu"
            aria-expanded={open}
            aria-label="Ouvrir le menu"
            onClick={onClick}
        >
            {open ? <X size={24} /> : <Menu size={24} />}
        </button>
    )
}

export function NavbarMenu({ open, children }) {
    return (
        <ul
            id="primary-menu"
            className={`flex-col md:flex-row gap-4 items-center md:flex m-0 p-0 
                absolute md:static top-full left-0 w-full md:w-auto bg-background md:bg-transparent
                transition-all duration-300 ease-in-out 
                ${open ? "flex" : "hidden"} md:!flex
            `}
            role="menubar"
        >
            {children}
        </ul>
    )
}

export function NavbarItem({ children, onClick, isActive, to }) {
    return (
        <li role="none">
            <Link
                to={to}
                role="menuitem"
                onClick={onClick}
                className={`pt-2 pb-2 px-2.5 
                    text-1 rounded-md duration-200 ease-in
                    hover:text-cs-white hover:bg-gradient-to-r from-light-dark-05 to-light-dark-03 hover:outline-none
                    hover:shadow-navlinks block ${
                        isActive 
                            ? "text-cs-white bg-gradient-to-r from-light-dark-05 to-light-dark-03" 
                            : "text-primary-red"
                    }`}
            >
                {children}
            </Link>
        </li>
    )
}