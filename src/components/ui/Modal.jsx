import { X } from "lucide-react"
import { useEffect, useCallback } from "react"

export function Modal({ 
    isOpen, 
    onClose, 
    children, 
    size = "w-5xl",
    closeOnOverlayClick = true 
}) {
    // Fermer avec la touche ESC
    const handleEscape = useCallback((e) => {
        if (e.keyCode === 27) {
            onClose()
        }
    }, [onClose])

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("keydown", handleEscape, false)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener("keydown", handleEscape, false)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, handleEscape])

    if (!isOpen) return null

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget && closeOnOverlayClick) {
            onClose()
        }
    }

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleOverlayClick}
        >
            {/* Fond semi-transparent avec léger flou */}
            <div className="absolute inset-0  bg-opacity-50 backdrop-blur-md duration-300"></div>
            
            {/* Modal */}
            <div 
                className={`relative bg-linear-120 from-primary-red-dark to-dark-purple border-light-dark-0a rounded-xl shadow-2xl w-5xl max-w-11/12 max-h-90vh overflow-hidden`}
            >
                {children}
            </div>
        </div>
    )
}

export function ModalHeader({ children, onClose, className = "" }) {
    return (
        <div className={`tracking-widest flex items-center justify-between p-6 border-b border-light-dark-0a ${className}`}>
            <div className="font-Orbitron">
                {children}
            </div>
            {onClose && (
                <button
                    onClick={onClose}
                    className="p-1 rounded-md text-cs-grey hover:text-cs-white hover:bg-light-dark-05 transition-colors duration-200"
                    aria-label="Fermer"
                >
                    <X size={24} />
                </button>
            )}
        </div>
    )
}

export function ModalTitle({ children, className = "" }) {
    return (
        <h2 className={`text-xl font-bold text-cs-white ${className}`}>
            {children}
        </h2>
    )
}

export function ModalContent({ children, className = "" }) {
    return (
        <div className={`p-6 overflow-y-auto max-h-96 font-Sharetech ${className}`}>
            {children}
        </div>
    )
}

export function ModalFooter({ children, className = "" }) {
    return (
        <div className={`p-6 border-t border-light-dark-0a bg-light-dark-05 font-Sharetech ${className}`}>
            {children}
        </div>
    )
}