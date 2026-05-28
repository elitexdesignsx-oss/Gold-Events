import { RefObject, useEffect, useRef, useState } from 'react';

export function useScrollReveal<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.16, rootMargin: '0px 0px -10% 0px' },
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [options, visible]);

  return [ref, visible];
}
