import React, { useState, useEffect } from "react";
import logo from './images/loog.svg'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // 點擊空白處關閉選單
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile_menu') && !event.target.closest('.hamburger')) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      // 防止背景滾動
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="header">
      <div className="header_content">
        <div className="header_logo">
          <div className="header_logo_content">
            <img src={logo} alt="logo" />
          </div>
        </div>
        
        {/* 漢堡選單按鈕 */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`hamburger_line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger_line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger_line ${isMenuOpen ? 'active' : ''}`}></span>
        </div>

        {/* 桌面版選單 */}
        <div className="header_menu desktop_menu">
          <div className="header_menu_content">
            <ul>
              <li>
                <a href="#" onClick={closeMenu}>Rules</a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>Bracket</a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>schedule</a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>teams</a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>hosts</a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>prize</a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>sponsors</a>
              </li>
            </ul>
          </div>
        </div>

        {/* 移動版選單 */}
        <div className={`mobile_menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile_menu_content">
            <ul>
              <li>
                <a href="#" onClick={closeMenu}>Rules</a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>Bracket</a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>schedule</a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>teams</a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>hosts</a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>prize</a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>sponsors</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
