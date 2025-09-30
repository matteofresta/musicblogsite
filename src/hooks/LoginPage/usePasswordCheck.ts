import { useState } from "react";

export const usePasswordCheck = () => {
    const [isVisible, setIsVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsVisible(currentValue => !currentValue);
    };

    return {
        isVisible,
        togglePasswordVisibility
    };
};
