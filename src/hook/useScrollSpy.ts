import { useEffect, useState } from "react";

export default function useScrollSpy() {
  const [currentHeading, setCurrentHeading] = useState<string | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0.5,
    };

    let lastIntersectingId: string | null = null;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let anyIntersecting = false;

      const intersectingEntries = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target.id);

      if (intersectingEntries.length > 0) {
        setCurrentHeading(intersectingEntries[0]);
      }

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anyIntersecting = true;
          lastIntersectingId = entry.target.id;
        }
      });

      if (!anyIntersecting && lastIntersectingId) {
        setCurrentHeading(lastIntersectingId);
      }
    };

    const observerInstance = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const tags = document.querySelectorAll<HTMLElement>("h1, h2, h3");
    tags.forEach((tag) => observerInstance.observe(tag));

    return () => {
      tags.forEach((tag) => observerInstance.unobserve(tag));
    };
  }, []);

  return currentHeading;
}
