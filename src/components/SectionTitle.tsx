import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div style={styles.wrapper}>
      <p style={styles.subtitle}>{subtitle}</p>
      <h2 style={styles.title}>{title}</h2>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  title: {
    margin: 0,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: '27px',
    color: '#000000',
    lineHeight: 1.2,
  },
  subtitle: {
    margin: 0,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: '17px',
    color: '#636363',
    lineHeight: 1.2,
  },
};
