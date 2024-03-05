// TODO: Fix the ts-nocheck
// @ts-nocheck

import { useRef, useState, useEffect } from 'react';

const useFullScreen = () => {
    const elementRef = useRef();
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

    const openFullScreen = () => {
        if (elementRef.current.requestFullscreen) {
            elementRef.current.requestFullscreen();
        } else if (elementRef.current.webkitRequestFullscreen) {
            /* Safari */
            elementRef.current.webkitRequestFullscreen();
        } else if (elementRef.current.msRequestFullscreen) {
            /* IE11 */
            elementRef.current.msRequestFullscreen();
        }
    };

    /* Close fullscreen */
    const closeFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            /* IE11 */
            document.msExitFullscreen();
        }
    };

    return [elementRef, openFullScreen, closeFullscreen, isFullScreenActive];
};

export default useFullScreen;
