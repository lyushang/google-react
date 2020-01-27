import React, { useState } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  const [setting, setSetting] = useState(true);
  const [ext, setExt] = useState(null);
  const [hidden, setHidden] = useState(false);
  const [more, setMore] = useState(null);
  const [showMore, setShowMore] = useState(true);

  const changeSetting = (event) => {
    event.preventDefault();
    setSetting(!setting);
    if (setting) {
        setExt(
            <span id="setting-extension">
              <a href="https://www.google.com/preferences?hl=en&fg=1">Search setttings</a>
              <a href="https://www.google.com/advanced_search?hl=en&fg=1">Advanced search</a>
              <a href="https://www.google.com/history/privacyadvisor/search/unauth?utm_source=googlemenu&fg=1">Your data in Search</a>
              <a href="https://www.google.com/history/optout?hl=en&fg=1">History</a>
              <a href="https://support.google.com/websearch/?visit_id=637146410786481081-3157840961&hl=en&rd=2#topic=3378866">Search Help</a>
              <a href="">Send feedback</a>
            </span>
        )
    }
    else {
      setExt(null);
    }
  }

  const changeMore = (event) => {
    event.preventDefault();
    setShowMore(!showMore);
    if (showMore) {
      setMore(
        <div className="header-more-main">
          <div className="header-more-container">
            <ul className="header-more-list">
              <li className="header-more-list-item">
                <a
                  href="https://myaccount.google.com/?utm_source=OGB&tab=wk1&utm_medium=app"
                  target="_parent"
                >
                  <div className="header-more-list-item-icon one"></div>
                  <div className="header-more-list-item-title">Account</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a href="https://www.google.com/webhp?tab=ww1" target="_parent">
                  <div className="header-more-list-item-icon two"></div>
                  <div className="header-more-list-item-title">Search</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a
                  href="https://maps.google.com/maps?hl=en&tab=wl1"
                  target="_parent"
                >
                  <div className="header-more-list-item-icon three"></div>
                  <div className="header-more-list-item-title">Maps</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a
                  href="https://www.youtube.com/?gl=US&tab=w11"
                  target="_parent"
                >
                  <div className="header-more-list-item-icon four"></div>
                  <div className="header-more-list-item-title">Youtube</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a
                  href="https://play.google.com/?hl=en&tab=w81"
                  target="_parent"
                >
                  <div className="header-more-list-item-icon five"></div>
                  <div className="header-more-list-item-title">Play</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a
                  href="https://news.google.com/nwshp?hl=en&tab=wn1"
                  target="_parent"
                >
                  <div className="header-more-list-item-icon six"></div>
                  <div className="header-more-list-item-title">News</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a
                  href="https://mail.google.com/mail/?tab=wm1"
                  target="_parent"
                >
                  <div className="header-more-list-item-icon seven"></div>
                  <div className="header-more-list-item-title">Gmail</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a
                  href="https://contacts.google.com/?hl=en&tab=wC1"
                  target="_parent"
                >
                  <div className="header-more-list-item-icon eight"></div>
                  <div className="header-more-list-item-title">Contacts</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a href="https://drive.google.com/?tab=wo1" target="_parent">
                  <div className="header-more-list-item-icon nine"></div>
                  <div className="header-more-list-item-title">Drive</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a
                  href="https://www.google.com/calendar?tab=wc1"
                  target="_parent"
                >
                  <div className="header-more-list-item-icon ten"></div>
                  <div className="header-more-list-item-title">Calendar</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a
                  href="https://translate.google.com/?hl=en&tab=wT1"
                  target="_parent"
                >
                  <div className="header-more-list-item-icon eleven"></div>
                  <div className="header-more-list-item-title">Translate</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a
                  href="https://photos.google.com/?tab=wq1&pageId=none"
                  target="_parent"
                >
                  <div className="header-more-list-item-icon twelve"></div>
                  <div className="header-more-list-item-title">Photos</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a
                  href="https://www.google.com/shopping?hl=en&source=og&tab=wf1"
                  target="_parent"
                >
                  <div className="header-more-list-item-icon thirteen"></div>
                  <div className="header-more-list-item-title">Shopping</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a href="https://duo.google.com/?usp=duo_ald" target="_parent">
                  <div className="header-more-list-item-icon fourteen"></div>
                  <div className="header-more-list-item-title">Duo</div>
                </a>
              </li>
            </ul>
            <div className="header-more-list-seperator"></div>
            <ul className="header-more-list">
              <li className="header-more-list-item">
                <a
                  href="https://www.google.com/finance?tab=we1"
                  target="_parent"
                >
                  <div className="header-more-list-item-icon fifteen"></div>
                  <div className="header-more-list-item-title">Finance</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a
                  href="https://docs.google.com/document/?usp=docs_alc"
                  target="_parent"
                >
                  <div className="header-more-list-item-icon sixteen"></div>
                  <div className="header-more-list-item-title">Docs</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a
                  href="https://books.google.com/bkshp?hl=en&tab=wp1"
                  target="_parent"
                >
                  <div className="header-more-list-item-icon seventeen"></div>
                  <div className="header-more-list-item-title">Books</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a href="https://www.blogger.com/?tab=wj1" target="_parent">
                  <div className="header-more-list-item-icon eighteen"></div>
                  <div className="header-more-list-item-title">Blogger</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a href="https://hangouts.google.com/" target="_parent">
                  <div className="header-more-list-item-icon nineteen"></div>
                  <div className="header-more-list-item-title">Hangouts</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a href="https://keep.google.com" target="_parent">
                  <div className="header-more-list-item-icon twenty"></div>
                  <div className="header-more-list-item-title">Keep</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a
                  href="https://jamboard.google.com/?usp=jam_ald"
                  target="_parent"
                >
                  <div className="header-more-list-item-icon twenty-one"></div>
                  <div className="header-more-list-item-title">Jamboard</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a href="https://earth.google.com/web/" target="_parent">
                  <div className="header-more-list-item-icon twenty-two"></div>
                  <div className="header-more-list-item-title">Earth</div>
                </a>
              </li>
              <li className="header-more-list-item">
                <a href="https://www.google.com/save" target="_parent">
                  <div className="header-more-list-item-icon twenty-three"></div>
                  <div className="header-more-list-item-title">Collections</div>
                </a>
              </li>
            </ul>
            <div className="header-more-list-more">
              <a href="https://www.google.com/intl/en/about/products?tab=wh" target="_blank">
                More from Google
              </a>
            </div>
          </div>
        </div>
      );
    }
    else {
      setMore(null);
    }
  }

  const focus = (event) => setHidden(true);

  const blur = (event) => setHidden(false);


  return (
    <div className="App">
      <Header changed={(event) => changeMore(event)} value={more}></Header>
      <Main showHidden={hidden} focus={(event) => focus(event)} blur={(event) => blur(event)}></Main>
      <Footer changed={(event) => changeSetting(event)} value={ext}></Footer>
    </div>
  );
}

export default App;
