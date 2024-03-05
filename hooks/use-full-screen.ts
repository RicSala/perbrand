// TODO: Fix the ts-nocheck

import { useRef, useState, useEffect, MouseEventHandler } from 'react';

const useFullScreen = () => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isFullScreenActive, setIsFullScreenActive] = useState(false);

    const updateFullscreenStatus = () => {
        setIsFullScreenActive(document.fullscreenElement !== null);
    };

    useEffect(() => {
        document.addEventListener('fullscreenchange', updateFullscreenStatus);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener(
                'fullscreenchange',
                updateFullscreenStatus
            );
        };
    }, []); // Empty dependency array means this effect runs once when component mounts

    const openFullScreen: MouseEventHandler<HTMLButtonElement> = () => {
        if (!elementRef.current) return;
        if (elementRef.current.requestFullscreen) {
            elementRef.current.requestFullscreen();
            // TODO: How do I fix this ts-ignore?
            // @ts-ignore
        } else if (elementRef.current.webkitRequestFullscreen) {
            /* Safari */
            // @ts-ignore
            elementRef.current.webkitRequestFullscreen();
            // @ts-ignore
        } else if (elementRef.current.msRequestFullscreen) {
            /* IE11 */
            // @ts-ignore
            elementRef.current.msRequestFullscreen();
        }
    };

    /* Close fullscreen */
    const closeFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            // @ts-ignore
        } else if (document.webkitExitFullscreen) {
            /* Safari */
            // @ts-ignore
            document.webkitExitFullscreen();
            // @ts-ignore
        } else if (document.msExitFullscreen) {
            /* IE11 */
            // @ts-ignore
            document.msExitFullscreen();
        }
    };

    return [
        elementRef,
        openFullScreen,
        closeFullscreen,
        isFullScreenActive,
    ] as const;
};

export default useFullScreen;
