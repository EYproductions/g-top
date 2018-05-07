import React, { Component } from 'react';
import bg1 from './images/bg-1.png';
import bg2 from './images/bg-2.png';
import bg3 from './images/bg-3.png';
import bg4 from './images/bg-4.png';
import logo from './images/nav-logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ReactDom from 'react-dom';
import 'antd/dist/antd.css';
import { Carousel, Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

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

const Home = () => (
  <div className="carousel-container">
    <Carousel autoplay>
      <div>
        <img className="home-img" src={ bg1 } alt="Background 1" />
      </div>
      <div>
        <img className="home-img" src={ bg2 } alt="Background 2" />
      </div>
      <div>
        <img className="home-img" src={ bg3 } alt="Background 3" />
      </div>
      <div>
        <img className="home-img" src={ bg4 } alt="Background 4" />
      </div>
    </Carousel>
    <div className="carousel-title">LOOKS DO MATTER</div>
    <div className="carousel-subtitle"><p>We are BCA Licensed builder and Registered Renovation Contractor. We are not only serve you good looking for the space, what’s inside that really matters.</p></div>
  </div>
);

const Commercial = () => (
  <div className="coming-soon">
    <span className="green">COMING</span><span className="blue">SOON</span>
  </div>
);

const Residential = () => (
  <div className="coming-soon">
    <span className="green">COMING</span><span className="blue">SOON</span>
  </div>
);

const Intelligent = () => (
  <div className="coming-soon">
    <span className="green">COMING</span><span className="blue">SOON</span>
  </div>
);

const Career = () => (
  <div className="coming-soon">
    <span className="green">COMING</span><span className="blue">SOON</span>
  </div>
);

const Contact = () => (
  <div className="coming-soon">
    <span className="green">COMING</span><span className="blue">SOON</span>
  </div>
);

export default App;
