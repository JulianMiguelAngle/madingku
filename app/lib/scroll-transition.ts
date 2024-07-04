import { useEffect, useState } from "react";

export function useIsVisible(ref: any) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            const element = ref.current;

            if (element) {
                const { top } = element.getBoundingClientRect();
                setIntersecting(top < window.innerHeight);
            }
        });
      
        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);
  
    return isIntersecting;
}