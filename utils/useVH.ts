import {useCallback, useEffect, useState} from 'react';

const FIRST_SECTION_VAR_NAME = '--fsvh';
const POPUP_VAR_NAME = '--vh';

const getActualVh = () => Number((window.innerHeight * 0.01).toFixed(2));

let count = 0;

export const useVH = () => {
    const [innerHeight, setInnerHeight] = useState(0);
    const [, setPortrait] = useState(false);

    const getInnerHeight = useCallback(() => {
        const newVh = getActualVh();

        document.documentElement.style.setProperty(POPUP_VAR_NAME, `${newVh}px`);

        const newPortrait = innerHeight * 100 > window.innerWidth
        setPortrait(prevPortrait => {
            if (prevPortrait !== newPortrait) {
                document.documentElement.style.setProperty(FIRST_SECTION_VAR_NAME, `${newVh}px`);
            }
            return newPortrait;
        })

        setInnerHeight(newVh);
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            count += 1;

            getInnerHeight();

            window.addEventListener('resize', getInnerHeight);
        }
        return () => {
            window.removeEventListener('resize', getInnerHeight);

            count -= 1;

            if (count === 0) {
                document.documentElement.style.removeProperty(POPUP_VAR_NAME);
                document.documentElement.style.removeProperty(FIRST_SECTION_VAR_NAME);
            }
        };
    }, [getInnerHeight]);

    return innerHeight;
};
