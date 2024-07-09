import {useEffect, useState} from "react";

const useStartupSound = (audioUrl: string) => {
    const [canPlay, setCanPlay] = useState(false);

    useEffect(() => {
        const audio = new Audio(audioUrl);

        if (canPlay) {
            audio.play().catch((error) => {
                console.error("Error playing audio:", error);
            });
        }

        const handleInteraction = () => {
            if (!canPlay) {
                audio.play().then(() => {
                    setCanPlay(true);
                    window.removeEventListener('click', handleInteraction);
                }).catch((error) => {
                    console.error("Error playing audio:", error);
                });
            }
        };

        window.addEventListener('click', handleInteraction);

        return () => {
            window.removeEventListener('click', handleInteraction);
        };
    }, [audioUrl, canPlay]);
};

export default useStartupSound;