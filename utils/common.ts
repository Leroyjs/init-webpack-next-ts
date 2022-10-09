import {useEffect} from "react";

/**
 *
 * @param isOpen
 * About solution look at article: Prevent Page Scrolling When a Modal is Open
 * https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
 */
export function useNoScroll(isOpen: boolean) {
    useEffect(() => {
        const handleScrollY = () => document.documentElement
            .style.setProperty('--scroll-y', `${window.scrollY}px`);

        window.addEventListener('scroll', handleScrollY);
        if (isOpen) {
            const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
            const body = document.body;
            body.classList.add('no-scroll')
            body.style.position = 'fixed';
            console.log(scrollY)
            body.style.top = `-${scrollY}`;
        } else if (document.body.classList.contains('no-scroll')) {
            document.body.classList.remove('no-scroll');
            const body = document.body;
            const scrollY = body.style.top;
            body.style.position = '';
            body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        return () => window.removeEventListener('scroll', handleScrollY);
    }, [isOpen]);
}

const debounce = (fn: Function, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};

const throttle = (fn: Function, wait: number = 300) => {
    let inThrottle: boolean,
        lastFn: ReturnType<typeof setTimeout>,
        lastTime: number;
    return function (this: any) {
        const context = this,
            args = arguments;
        if (!inThrottle) {
            fn.apply(context, args);
            lastTime = Date.now();
            inThrottle = true;
        } else {
            clearTimeout(lastFn);
            lastFn = setTimeout(() => {
                if (Date.now() - lastTime >= wait) {
                    fn.apply(context, args);
                    lastTime = Date.now();
                }
            }, Math.max(wait - (Date.now() - lastTime), 0));
        }
    };
};

export function clamp(num: number, min: number, max: number) {
    return Math.min(Math.max(num, min), max);
}

export function formatPhoneNumber(value: string) {
    const phone = value.replace(/\D/g, "");
    return phone
        .slice(0, 11)
        .replace(/^(\d{1})?(\d{3})(\d{3})(\d{4})$/, "$1 ($2) $3-$4");
}


