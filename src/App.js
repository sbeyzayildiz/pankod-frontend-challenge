import "./App.css";
import "antd/dist/reset.css";
import { Button, Space } from "antd";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Steam from "./Page/Home/Stream";
import Home from "./Page/Home";

import facebookImage from "./assets/social/facebook-white.svg";
import instagramImage from "./assets/social/instagram-white.svg";
import twitterImage from "./assets/social/twitter-white.svg";

import appImage from "./assets/store/app-store.svg";
import playImage from "./assets/store/play-store.svg";
import windowsImage from "./assets/store/windows-store.svg";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header__left">
          <h1>DEMO Streaming</h1>
        </div>
        <div className="header__right">
          <Space wrap>
            <Button type="text" className="header__right--login">
              Login
            </Button>
            <Button type="primary" className="header__right--trial">
              Start your free trial
            </Button>
          </Space>
        </div>
      </header>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/:stream_type" component={Steam}></Route>
        </Switch>
      </Router>
      <footer>
        <div className="footer__navigation">
          <a href="/#">Home</a>|<a href="/#">Terms and Conditions</a>|
          <a href="/#">Privacy Policy</a>|<a href="/#">Collection Statement</a>|
          <a href="/#">Help</a>|<a href="/#">Manage Account</a>
        </div>
        <div className="footer__copyright">
          Copyright <code>&#169;</code> 2015 DEMO Streaming All Rights Reserved
        </div>
        <div className="footer__links">
          <div className="footer__links--socialmedia">
            <img src={facebookImage} alt="facebook" />
            <img src={instagramImage} alt="instagram" />
            <img src={twitterImage} alt="twitter" />
          </div>
          <div className="footer__links--store">
            <img src={appImage} alt="app store" />
            <img src={playImage} alt="google play" />
            <img src={windowsImage} alt="windows" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
