import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(() => {
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const eventHandler = (e: MediaQueryListEvent) => setMatches(e.matches);

    mediaQuery.addEventListener('change', eventHandler);

    return () => mediaQuery.removeEventListener('change', eventHandler);
  }, [query]);

  return matches;
};
