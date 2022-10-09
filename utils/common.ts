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
