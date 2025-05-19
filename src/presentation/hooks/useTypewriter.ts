import { useEffect, useRef, useState } from "react";

interface UseTypewriterOptions {
    text: string;
    speed?: number;
    pause?: number;
}

export const useTypewriter = ({ text, speed = 100, pause = 10000 }: UseTypewriterOptions) => {
    const [typedText, setTypedText] = useState("");
    const indexRef = useRef(0);
    const isDeletingRef = useRef(false);
    const pauseRef = useRef(false);

    useEffect(() => {
        if (pauseRef.current) return;

        const type = () => {
            const currentIndex = indexRef.current;
            const isDeleting = isDeletingRef.current;

            if (!isDeleting) {
                setTypedText(text.substring(0, currentIndex + 1));
                indexRef.current += 1;

                if (indexRef.current === text.length) {
                    isDeletingRef.current = true;
                    pauseRef.current = true;
                    setTimeout(() => {
                        pauseRef.current = false;
                    }, pause);
                }
            } else {
                setTypedText(text.substring(0, currentIndex - 1));
                indexRef.current -= 1;

                if (indexRef.current === 0) {
                    isDeletingRef.current = false;
                    pauseRef.current = true;
                    setTimeout(() => {
                        pauseRef.current = false;
                    }, pause);
                }
            }
        };

        const interval = setInterval(type, speed);

        return () => clearInterval(interval);
    }, [text, speed, pause]);

    return typedText;
};
