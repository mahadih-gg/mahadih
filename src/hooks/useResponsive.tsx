import { useState, useEffect } from "react";
import useWindowSize from "@/hooks/useWindowSize";

function useResponsive() {
    const { width } = useWindowSize();

    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktopXL, setIsDesktopXL] = useState(false);
    const [isDesktop2XL, setIsDesktop2XL] = useState(false);

    const [isAndroid, setIsAndroid] = useState(false);
    const [isIos, setIsIos] = useState(false);

    useEffect(() => {
        detectDeviceHandler();
    }, []);

    useEffect(() => {
        breakpointDetectHandler();
    }, [width]);

    const breakpointDetectHandler = () => {

        // 'xs': '480px',
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
        // '2xl': '1536px',

        const isMobile = (width <= 640) ?? false;
        const isTablet = (width <= 1024) ?? false;
        const isDesktopXL = (width <= 1536) ?? false;
        const isDesktop2XL = (width > 1536) ?? false;

        setIsMobile(isMobile);
        setIsTablet(isTablet);
        setIsDesktopXL(isDesktopXL);
        setIsDesktop2XL(isDesktop2XL);
    }

    const detectDeviceHandler = () => {
        const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
        const isAndroid = () => Boolean(userAgent.match(/Android/i));
        const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i));

        setIsAndroid(isAndroid);
        setIsIos(isIos);
    }

    return {
        isMobile,
        isTablet,
        isDesktopXL,
        isDesktop2XL,
        isAndroid,
        isIos,
    };
}

export default useResponsive;