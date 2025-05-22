import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollSmoother);

export function SmoothScroll() {
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
    });

    return () => {
      smoother.kill(); // limpar quando desmontar
    };
  }, []);

  return null;
}
