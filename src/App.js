import React, { Component } from 'react';
import logo from './images/nav-logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import 'antd/dist/antd.css';
import Contact from './components/Contact.js';
import Home from './components/Home.js';
import Commercial from './components/Commercial.js';
import Residential from './components/Residential.js';
import Intelligent from './components/Intelligent.js';
import Career from './components/Career.js';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (

            <div>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/home" />}
              />

              <ul className="navbar md-none">
                <li className="navbar-item">
                  <Link to="/home"><img className="nav-logo" src={logo} alt="G Top International" /></Link>
                </li>
                <li className="navbar-item lg-display"></li>
                <li className="navbar-item lg-display"></li>
                <li className="navbar-item"></li>
                <li className="navbar-item">
                  <Link to="/commercial">Commercial</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/residential">Residential</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/intelligent">Intelligent</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/career">Career</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>

              <div className="nav-logo-collapse md-only"><Link to="/home"><img src={logo} alt="G Top International" /></Link></div>

              <Layout>
                <Sider
                  className="navbar-collapse md-only"
                  breakpoint="md"
                  collapsedWidth="0"
                  onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                  <div className="logo" />
                  <Menu theme="dark" mode="inline">
                    <Menu.Item key="0">
                      <Icon type="user" />
                      <span className="nav-text"><Link to="/home">Home</Link></span>
                    </Menu.Item>
                    <Menu.Item key="1">
                      <Icon type="user" />
                      <span className="nav-text"><Link to="/commercial">Commercial</Link></span>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Icon type="video-camera" />
                      <span className="nav-text"><Link to="/residential">Residential</Link></span>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Icon type="upload" />
                      <span className="nav-text"><Link to="/intelligent">Intelligent</Link></span>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <Icon type="user" />
                      <span className="nav-text"><Link to="/career">Career</Link></span>
                    </Menu.Item>
                    <Menu.Item key="5">
                      <Icon type="user" />
                      <span className="nav-text"><Link to="/contact">Contact</Link></span>
                    </Menu.Item>
                  </Menu>
                </Sider>
              </Layout>

              <div className="content">
                <TransitionGroup>
                  <CSSTransition key={location.key} classNames="fade" timeout={500}>
                    <Switch location={location}>
                      <Route exact path="/home" component={Home} />
                      <Route exact path="/commercial" component={Commercial} />
                      <Route exact path="/residential" component={Residential} />
                      <Route exact path="/intelligent" component={Intelligent} />
                      <Route exact path="/career" component={Career} />
                      <Route exact path="/contact" component={Contact} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
              
            </div>

        )}
          />
      </Router>
    );
  }
}

export default App;
