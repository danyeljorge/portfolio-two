
import { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";

const ScrollAnimado = ({children,
    options = {
        delay: 200,
        duration: 1000,
        distance: '100px',
        easing: 'ease-in-out',
        origin: 'right',
        reset: true,
        opacity:0,
        scale: 1,
        interval: 100

    }
}) => {
    const ref = useRef(null);
    useEffect (()=> {
        if (ref.current) {
            ScrollReveal().reveal(ref.current, options);
     }

    },[options]);

    return (
        <div ref={ref} style={{ opacity: 1 }}>
            {children}
        </div>
    );
};

export default ScrollAnimado;