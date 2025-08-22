import { ArrowRight } from "lucide-react";

export default function Button({ 
    children, 
    onClick, 
    href, 
    variant = "outline", 
    className = "",
    icon, // Nouvelle prop pour l'icône
    iconPosition = "left" // Position de l'icône (left/right)
}) {
    const baseClasses = "inline-flex items-center gap-2.5 pt-2 pb-2 pr-4 pl-4 rounded-lg border !cursor-pointer tracking-widest uppercase duration-200 ease-in";
    const variants = {
        outline: "border-primary-red text-primary-red bg-transparent hover:bg-primary-red hover:text-background",
        solid: "border-primary-red bg-primary-red text-background hover:bg-primary-red-dark",
    };
    const classes = `${baseClasses} ${variants[variant]} ${className}`;

    // Contenu du bouton avec icône
    const buttonContent = (
        <>
            {icon && iconPosition === "left" && icon}
            {children}
            {icon && iconPosition === "right" && icon}
            {!icon && <ArrowRight size={16} />}
        </>
    );

    if (href) {
        return (
            <a href={href} className={classes}>
                {buttonContent}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={classes}>
            {buttonContent}
        </button>
    );
}