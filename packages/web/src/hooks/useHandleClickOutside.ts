import { RefObject, useEffect } from "react";

type CallbackFunction = () => void;

export const useHandleClickOutside = (ref: RefObject<HTMLElement>, callback: CallbackFunction) => {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [callback, ref]);
};
