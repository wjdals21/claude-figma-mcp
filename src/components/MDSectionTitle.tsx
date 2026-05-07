import React from 'react';
import SectionTitle from './SectionTitle';
import CategoryTabs from './CategoryTabs';

interface MDSectionTitleProps {
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export default function MDSectionTitle({
  activeCategory,
  onCategoryChange,
}: MDSectionTitleProps) {
  return (
    <div style={styles.wrapper}>
      <SectionTitle
        title="MD 추천반찬"
        subtitle="이번 주 가장 추천하는 제품만 골라드려요"
      />
      <CategoryTabs
        defaultActive={activeCategory}
        onChange={onCategoryChange}
      />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '42px',
  },
};
