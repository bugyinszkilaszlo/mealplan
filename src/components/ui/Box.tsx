import type { ReactNode } from 'react';
import styles from './Box.module.css';

interface BoxProps {
  title?: string;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  className?: string;
}

export default function Box({
  title,
  headingLevel = 'h2',
  children,
  className = '',
}: BoxProps) {
  const HeadingTag = headingLevel;

  return (
    <section className={`${styles.box} ${className}`}>
      {title && <HeadingTag className={styles.title}>{title}</HeadingTag>}
      <div className={styles.content}>{children}</div>
    </section>
  );
}
