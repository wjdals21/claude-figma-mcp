import React, { useState } from 'react';

const CATEGORIES = [
  '비빔밥',
  '국 / 찌개 / 탕',
  '어린이 반찬',
  '볶음',
  '무침',
  '메인요리',
  '조림',
];

interface CategoryTabsProps {
  defaultActive?: string;
  onChange?: (category: string) => void;
}

export default function CategoryTabs({
  defaultActive = '비빔밥',
  onChange,
}: CategoryTabsProps) {
  const [active, setActive] = useState(defaultActive);

  const handleClick = (category: string) => {
    setActive(category);
    onChange?.(category);
  };

  return (
    <div style={styles.wrapper}>
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          style={{
            ...styles.tab,
            ...(active === category ? styles.tabActive : styles.tabInactive),
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  tab: {
    height: '50px',
    padding: '0 16px',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: '17px',
    transition: 'background-color 0.2s',
  },
  tabActive: {
    backgroundColor: '#0D5611',
    color: '#FFFFFF',
    minWidth: '100px',
  },
  tabInactive: {
    backgroundColor: '#A1A1A1',
    color: '#FFFFFF',
    minWidth: '100px',
  },
};
