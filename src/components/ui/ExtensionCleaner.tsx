'use client';

import { useEffect, useState } from 'react';

export default function ExtensionCleaner() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Clean up browser extension attributes that cause hydration issues
    const cleanExtensionAttributes = () => {
      const body = document.body;
      if (body) {
        // Remove Grammarly attributes
        body.removeAttribute('data-gr-ext-installed');
        body.removeAttribute('data-new-gr-c-s-check-loaded');
        // Remove other common extension attributes
        body.removeAttribute('cz-shortcut-listen');
        body.removeAttribute('data-grammarly-shadow-root');
        body.removeAttribute('data-gramm');
      }
    };

    // Clean attributes after a short delay to allow extensions to load
    const timeoutId = setTimeout(cleanExtensionAttributes, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Don't render anything on server side to prevent hydration mismatch
  if (!isClient) {
    return null;
  }

  return null;
}
