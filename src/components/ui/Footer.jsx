export default function Footer({ children }) {
    return (
        <div className="bg-light-dark-05 border-t border-light-dark-0a mt-12 mb-0 ml-0 mr-0 w-full ">
            {children}
        </div>
    )
}

export function FooterContent({ children }) {
    return (
        <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
            {children}
        </div>
    )
}

export function FooterBranding({ children }) {
    return (
        <h4 className="font-orbitron text-xl text-primary-red">
            {children}
        </h4>
    )
}

export function FooterBrandDesc({children}){
    return(
        <p className="mt-3 text-sm text-gray-400">
            {children}
        </p>
    )
}

export function FooterContainer({ children, className ='' }) {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    )
}

export function FooterSectionTitle({ children }) {
    return (
        <h5 className="font-bold text-cs-grey">
            {children}
        </h5>
    )
}

export function FooterSectionItem({ children }) {
    return (
        <ul className="mt-3 space-y-2 text-cs-grey text-sm">
            {children}
        </ul>
    )
}

export function FooterItem({ children, className = '' }) {
    return (
        <li className={`${className}`}>
            {children}
        </li>
    )
}

export function FooterCopy({ brandName ="" }) {
    return (
        <div className="border-t border-light-dark-0a text-center py-4 text-cs-grey text-xs">
            © {new Date().getFullYear()} {brandName} — Tous droits réservés.
        </div>
    )
}