import React from 'react';
import './footer.css';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footer-container">
                <ul className="left-footer">
                    <li className="footer-item">
                        <a href="https://www.google.com/intl/en_us/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</a>
                    </li>
                    <li className="footer-item">
                        <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">Business</a>
                    </li>
                    <li className="footer-item">
                        <a href="https://www.google.com/search/howsearchworks/?fg=1">How Search works</a>
                    </li>
                </ul>
                <ul className="right-footer">
                    <li className="footer-item">
                        <a href="https://policies.google.com/privacy?fg=1">Privacy</a>
                    </li>
                    <li className="footer-item">
                        <a href="https://policies.google.com/terms?fg=1">Terms</a>
                    </li>
                    <li className="footer-item">
                        <a href="" onClick={props.changed}>Settings</a>
                        {props.value}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;