export default function Section({ title, children, className = "" }) {
    return (
        <div className={`mb-12 ${className}`}>
            <h2 className="text-2xl font-bold text-center text-primary-red mb-8">
                {title}
            </h2>
            {children}
        </div>
    );
}