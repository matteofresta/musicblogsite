import {useState} from "react";


export const useMenuOpen = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenMenu = () => {
        setIsOpen(true)
    }

    const handleCloseMenu = () => {
        setIsOpen(false)
    }
    return {isOpen, handleOpenMenu, handleCloseMenu}
}
