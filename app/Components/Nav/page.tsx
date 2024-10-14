import React from 'react';
import './style.css'; // Importing the CSS for styling

const Nav = () => {
  return (
    <div className="navBar">
        <div id="navLeftSide">
            <img id="logoimg" src="/a.png" alt="logo" />
        </div>
        <div id="navRightSide">
            <div className="navContent">
                <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0C9.425 0 6.5 3.22 6.5 7.1875C6.5 11.155 9.425 14.375 13 14.375C16.575 14.375 19.5 11.155 19.5 7.1875C19.5 3.22 16.575 0 13 0ZM6.2075 14.375C2.7625 14.5188 0 17.02 0 20.125V23H26V20.125C26 17.02 23.27 14.5188 19.7925 14.375C18.0375 16.1288 15.6325 17.25 13 17.25C10.3675 17.25 7.9625 16.1288 6.2075 14.375Z" fill="#E6D5C3"/>
                </svg>
            </div>
            <div className="navContent">Home</div>
            <div className="navContent">Contact</div>
            <div className="navContent">About</div>
            <div className="navContent">
                <svg id='optionSVG' width="40" height="39" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48.8926 11.86C48.8926 8.5985 47.2437 5.6928 44.6629 3.4987C42.082 1.3639 38.5692 0 34.5546 0C30.6116 0 27.0988 1.3639 24.4463 3.4987L0 23.72L24.4463 43.9413C27.0271 46.0761 30.5399 47.44 34.5546 47.44C38.4975 47.44 42.0103 46.0761 44.6629 43.9413C47.2437 41.8065 48.8926 38.9008 48.8926 35.58C48.8926 32.3185 47.2437 29.4128 44.6629 27.2187C42.082 25.0839 38.5692 23.72 34.5546 23.72C38.4975 23.72 42.0103 22.3561 44.6629 20.2213C47.2437 18.0865 48.8926 15.1808 48.8926 11.86Z" fill="#848D8B"/>
                </svg>
            </div>
        </div>
    </div>
  );
};

export default Nav;
