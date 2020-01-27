import React from 'react';
import './main.css';

const Main = (props) => {

    return (
        <div className="main">
            <div className="icon">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google icon" />
            </div>
            <div className="search-box" id="search-box" onFocus={props.focus} onBlur={props.blur}>
                <div className="input-area">
                    <div className="search-icon">
                        <span className="search-svg">
                            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                        </span>
                    </div>
                    <div className="search-input">
                        <form><input type="text" name="search" id="inputTxt" /></form>
                    </div>
                    <div className="listen-icon">
                        <span className="listen-img"></span>
                    </div>
                </div>
                {props.showHidden ? 
                <div className="search-hidden-section" id="hidden">
                    <div className="border"></div>
                    <div className="history-box">
                        <div className="history-title">
                            <span>Try searching for</span>
                        </div>
                        <ul className="history-list">
                            <li className="history-item"> 
                                <span className="search-img"></span>
                                <span className="history-content">wallpaper</span>
                            </li>
                            <li className="history-item">
                                <span className="search-img"></span>
                                <span className="history-content">restaurants nearby</span>
                            </li>
                            <li className="history-item">
                                <span className="search-img"></span>
                                <span className="history-content">jobs near me</span>
                            </li>
                            <li className="history-item">
                                <span className="search-img"></span>
                                <span className="history-content">videos</span>
                            </li>
                            <li className="history-item">
                                <span className="search-img"></span>
                                <span className="history-content">keyboard</span>
                            </li>
                            <li className="history-item">
                                <span className="search-img"></span>
                                <span className="history-content">pizza delivery</span>
                            </li>
                        </ul>
                    </div>
                    <div className="search-buttons">
                        <div className="button">Google Search</div>
                        <div className="button">I'm Feeling Lucky</div>
                    </div>
                    <div className="report-area">
                        <a href="">Report inappropriate predictions</a>
                    </div>
                </div> : null}
            </div>
            {!(props.showHidden) ? 
            <div className="search-buttons" id="outer">
                <div className="button" role="button">Google Search</div>
                <div className="button" role="button">I'm Feeling Lucky</div>
            </div> : null
            }
        </div>
    );
}

export default Main;