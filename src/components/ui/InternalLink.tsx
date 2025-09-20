import Link from 'next/link';
import { ReactNode } from 'react';

interface InternalLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export default function InternalLink({ href, className, children }: InternalLinkProps) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
