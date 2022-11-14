import React from "react";

export default function useIntersection(
  elemRef,
  { threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false }
) {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const updateEntry = ([entry]) => {
    setIsIntersecting(entry);
  };

  React.useEffect(() => {
    if (!elemRef.current) return;
    const node = elemRef?.current; // DOM Ref
    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elemRef, root, rootMargin, threshold]);

  return isIntersecting;
}
