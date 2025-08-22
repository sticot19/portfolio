import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router"

export default function Hero({ onDiscover }) {
    const navigate = useNavigate()
    
    const handleDiscover = () => {
        onDiscover()
        navigate("/about")
    }

    return (
        <div className="w-full min-h-screen text-cs-white flex flex-col lg:flex-row items-center justify-center font-ShareTech px-6 text-center lg:text-left">
            <div className="text-5xl sm:text-7xl md:text-18 text-primary-red font-bold mb-6 md:mb-0 md:mr-14">
                HELLO!
            </div>

            <div className="max-w-lg pt-7 pb-7 pr-5 pl-5
                    border border-primary-red-dark rounded-xl shadow-hero-content">
                <h2 className="text-2 font-bold tracking-widest uppercase mb-3">
                    Bienvenue sur mon Portfolio
                </h2>
                <p className="text-1 text-washed mb-5">
                    Diplômé de BTS SIO option SISR
                    <br/>
                    Passionné par l'informatique et les nouvelles technologies
                </p>

                <button 
                    onClick={handleDiscover}
                    className="inline-flex items-center gap-2.5 pt-2 pb-2 pr-3 pl-3 mt-4 mb-4 
                        rounded-lg border border-primary-red text-primary-red 
                        !cursor-pointer tracking-widest uppercase 
                        bg-transparent duration-200 ease-in 
                        hover:bg-primary-red hover:text-background">
                    Me découvrir
                    <ArrowRight size={16} />
                </button>

                <div className="text-sm mt-3.5 text-cs-dark-grey">
                    BTS SIO — SISR • Déploiement & administration réseau
                </div>
            </div>
        </div>
    )
}