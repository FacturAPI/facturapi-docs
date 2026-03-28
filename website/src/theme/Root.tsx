import React, {useEffect} from 'react';
import type {Props} from '@theme/Root';

function updateScrolledState() {
  if (typeof document === 'undefined') {
    return;
  }

  document.body.dataset.scrolled = window.scrollY > 0 ? 'true' : 'false';
}

export default function Root({children}: Props) {
  useEffect(() => {
    updateScrolledState();

    const onScroll = () => {
      updateScrolledState();
    };

    window.addEventListener('scroll', onScroll, {passive: true});
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <>{children}</>;
}
