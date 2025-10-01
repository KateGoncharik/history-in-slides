import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useSimpleNumberAnimation = (targetNumber: number) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const previousTargetRef = useRef<number | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    if (previousTargetRef.current === null) {
      element.textContent = targetNumber.toString();
      previousTargetRef.current = targetNumber;
      return;
    }

    if (previousTargetRef.current !== targetNumber) {
      const startValue = previousTargetRef.current;

      gsap.fromTo(
        element,
        {
          textContent: startValue,
          snap: { textContent: 1 },
        },
        {
          duration: 0.7,
          textContent: targetNumber,
          snap: { textContent: 1 },
          ease: 'power2.out',
          onUpdate() {
            const value = Math.round(parseFloat(this.targets()[0].textContent) || targetNumber);
            element.textContent = value.toString();
          },
          onComplete() {
            previousTargetRef.current = targetNumber;
          },
        }
      );
    }
  }, [targetNumber]);

  return elementRef;
};
