import { Mail, Phone, Github, Linkedin, MessageCircle } from "lucide-react"

export default function Contact() {
    return (
        <div className="w-full min-h-screen text-cs-grey flex flex-col lg:flex-row items-center justify-center font-ShareTech px-6 py-10">
            <div className="text-3xl sm:text-4xl md:text-5xl text-cs-grey italic font-bold mb-10 md:mb-0 md:mr-14 text-center md:text-left">
                    "Il y a 10 types de personnes <br /> 
                    dans le monde:  <br />
                    celles qui comprennent et <br />
                    celles qui ne comprennent pas." <br />
            </div>

            <div className="min-w-md pt-10 pb-10 pr-5 pl-5
                    border border-primary-red-dark rounded-xl shadow-hero-content flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold tracking-widest uppercase mb-5 text-primary-red">
                    Contactez-moi
                </h2>
                
                <div className="space-y-4 mb-6 font-Sharetech ">

                    <div className="flex items-center gap-3 hover:text-cs-white">
                        <Mail size={20} className="text-accent" />
                        <a href="mailto:ton.email@example.com">
                            dumond.camille@gmail.com
                        </a>
                    </div>
                    
                    <div className="flex items-center gap-3 hover:text-cs-white">
                        <MessageCircle size={20} className="text-accent" />
                        <span>Discord: sticot19</span>
                    </div>
                    
                    <div className="flex items-center gap-3 hover:text-cs-white">
                        <Github size={20} className="text-accent" />
                        <a href="https://github.com/sticot19" target="_blank">
                            github.com/sticot19
                        </a>
                    </div>

                    <div className="flex items-center gap-3 hover:text-cs-white">
                        <Phone size={20} className="text-accent" />
                        <a className="hover:text-cs-white">
                            06.51.89.77.40
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}