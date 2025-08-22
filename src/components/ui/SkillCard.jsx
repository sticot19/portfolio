import { Card, CardContent } from "@/components/ui/Card"

export default function SkillCard({ 
    icon, 
    title, 
    items = [], // Valeur par défaut pour items
    className = "",
    iconClassName = "text-primary-red",
    itemClassName = "text-washed text-sm",
    showBullets = true
}) {
    return (
        <Card className={`p-5 hover:border-primary-red transition-colors duration-200 ${className}`}>
            <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                    <div className={iconClassName}>
                        {icon}
                    </div>
                    <h3 className="text-lg font-bold text-cs-white">{title}</h3>
                </div>
                <ul className="space-y-2">
                    {items && items.map((item, i) => ( // Vérification que items existe
                        <li key={i} className={`flex items-center ${itemClassName}`}>
                            {showBullets && (
                                <span className="w-2 h-2 bg-primary-red rounded-full mr-2 flex-shrink-0"></span>
                            )}
                            {item}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}