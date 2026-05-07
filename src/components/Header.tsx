import React from 'react';

const NAV_ITEMS = [
  { icon: '/images/header/icon-brand.png', label: '브랜드', href: '#' },
  { icon: '/images/header/icon-banchan.png', label: '반찬보기', href: '#' },
  { icon: '/images/header/icon-cart.png', label: '장바구니', href: '#' },
  { icon: '/images/header/icon-mypage.png', label: '내정보', href: '#' },
];

const UTIL_LINKS = ['로그인', '회원가입', '고객센터'];

export default function Header() {
  return (
    <header style={styles.header}>
      {/* 상단 유틸 링크 */}
      <div style={styles.utilBar}>
        {UTIL_LINKS.map((link, i) => (
          <React.Fragment key={link}>
            <a href="#" style={styles.utilLink}>{link}</a>
            {i < UTIL_LINKS.length - 1 && (
              <span style={styles.utilDivider}>|</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* 메인 헤더 영역 */}
      <div style={styles.mainRow}>
        {/* 검색바 */}
        <div style={styles.logoSearchWrapper}>
          <div style={styles.searchBar} />
        </div>

        {/* 가운데 로고 */}
        <div style={styles.logoWrapper}>
          <img
            src="/images/header/logo.png"
            alt="집반찬연구소"
            style={styles.logo}
          />
        </div>

        {/* GNB 네비게이션 */}
        <nav style={styles.nav}>
          {NAV_ITEMS.map(({ icon, label, href }) => (
            <a key={label} href={href} style={styles.navItem}>
              <img src={icon} alt={label} style={styles.navIcon} />
              <span style={styles.navLabel}>{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    width: '1200px',
    height: '150px',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0',
    boxSizing: 'border-box',
    margin: '0 auto',
  },
  utilBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '6px',
    paddingTop: '39px',
    paddingRight: '0px',
  },
  utilLink: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: '12px',
    color: '#5B5B5B',
    textDecoration: 'none',
  },
  utilDivider: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '12px',
    color: '#5B5B5B',
  },
  mainRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '16px',
  },
  logoSearchWrapper: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  searchBar: {
    width: '335px',
    height: '46px',
    border: '1px solid #FF6B00',
    borderRadius: '10px',
    backgroundColor: '#FF6B00',
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    height: '46px',
    objectFit: 'contain',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  navIcon: {
    width: '28px',
    height: '28px',
    objectFit: 'cover',
  },
  navLabel: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: '15px',
    color: '#5B5B5B',
  },
};
