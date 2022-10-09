import {useEffect} from "react";

export const useEscHandler = (callback: Function) => {
    useEffect(() => {
        if (!callback) return;

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape" || event.keyCode === 27) {
                const ctx = this as unknown as Function;
                ctx?.();
            }
        }

        const handleEscWithCallback = handleEsc.bind(callback);
        document.addEventListener("keydown", handleEscWithCallback);
        return () => document.removeEventListener("keydown", handleEscWithCallback);
    }, [callback]);
};
