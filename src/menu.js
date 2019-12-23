import React, { Component} from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class MenuPrimary extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      anchorEl: null
    };
  }
  

  handleMenuItemHover = event =>
    this.setState({
      isOpen: true,
      anchorEl: event.currentTarget.id
    });

  handleSubmenuLeave = () => {
    this.setState({
      isOpen: false,
      anchorEl: null
    })
  };

  handleMenuItemLeave = (event) => {
    if(!event.relatedTarget.id && event.currentTarget.id) {
      this.setState({
        isOpen: false
      })
    } 
  }

  render() {
    const styles = {
      overlay: {
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.465)',
      zIndex: 94,
      position: 'fixed',
      display: 'block',
      visibility: 'visible',
      opacity: 1,
      transition: 'opacity 100ms ease-in'
      }
    };

    return (
      <div>
<div id="header" className="global-header">
        <nav id="primary-nav" className="navigation__wrapper">
          <ul className="navigation clearfix">
            <li className="first-level">
              <Link
                id="arrivals"
                className="navigation__link"
                onMouseEnter={this.handleMenuItemHover}
                onMouseLeave={this.handleMenuItemLeave}
              >
                NEW ARRIVALS
              </Link>
              <div
                id='subNavigation'
                className={`${
                  this.state.isOpen && this.state.anchorEl === "arrivals"
                    ? "is-open"
                    : ""
                } sub-navigation`}
                onMouseLeave={this.handleSubmenuLeave}
              >
                <nav className="sub-navigation__wrapper sub-navigation_new-arrivals">
                  <div className="sub-navigation__categories">
                    <div className="sub-navigation__category-row">
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>NEW ARRIVALS IS DISPLAYED</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </li>
            <li className="first-level">
              <Link
                id="men"
                className="navigation__link"
                onMouseEnter={this.handleMenuItemHover}
                onMouseLeave={this.handleMenuItemLeave}
              >
                MEN
              </Link>
              <div
                id='subNavigation'
                className={`${
                  this.state.isOpen && this.state.anchorEl === "men"
                    ? "is-open"
                    : ""
                } sub-navigation`}
                onMouseLeave={this.handleSubmenuLeave}
              >
                <nav className="sub-navigation__wrapper sub-navigation_new-arrivals">
                  <div className="sub-navigation__categories">
                    <div className="sub-navigation__category-row">
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>MEN IS DISPLAYED</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </li>
            <li className="first-level">
              <Link
                id="women"
                className="navigation__link"
                onMouseEnter={this.handleMenuItemHover}
                onMouseLeave={this.handleMenuItemLeave}
              >
                WOMEN
              </Link>
              <div
                id='subNavigation'
                className={`${
                  this.state.isOpen && this.state.anchorEl === "women"
                    ? "is-open"
                    : ""
                } sub-navigation`}
                onMouseLeave={this.handleSubmenuLeave}
              >
                <nav className="sub-navigation__wrapper sub-navigation_new-arrivals">
                  <div className="sub-navigation__categories">
                    <div className="sub-navigation__category-row">
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>WOMEN IS DISPLAYED</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </li>
            <li className="first-level">
              <Link
                id="kids"
                className="navigation__link"
                onMouseEnter={this.handleMenuItemHover}
                onMouseLeave={this.handleMenuItemLeave}
              >
                KIDS
              </Link>
              <div
                id='subNavigation'
                className={`${
                  this.state.isOpen && this.state.anchorEl === "kids"
                    ? "is-open"
                    : ""
                } sub-navigation`}
                onMouseLeave={this.handleSubmenuLeave}
              >
                <nav className="sub-navigation__wrapper sub-navigation_new-arrivals">
                  <div className="sub-navigation__categories">
                    <div className="sub-navigation__category-row">
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>KIDS IS DISPLAYED</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </li>
            <li className="first-level">
              <Link
                id="shoes"
                className="navigation__link"
                onMouseEnter={this.handleMenuItemHover}
                onMouseLeave={this.handleMenuItemLeave}
              >
                SHOES
              </Link>
              <div
                id='subNavigation'
                className={`${
                  this.state.isOpen && this.state.anchorEl === "shoes"
                    ? "is-open"
                    : ""
                } sub-navigation`}
                onMouseLeave={this.handleSubmenuLeave}
              >
                <nav className="sub-navigation__wrapper sub-navigation_new-arrivals">
                  <div className="sub-navigation__categories">
                    <div className="sub-navigation__category-row">
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>SHOES IS DISPLAYED</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </li>
            <li className="first-level">
              <Link
                id="outlet"
                className="navigation__link"
                onMouseEnter={this.handleMenuItemHover}
                onMouseLeave={this.handleMenuItemLeave}
              >
                OUTLET
              </Link>
              <div
                id='subNavigation'
                className={`${
                  this.state.isOpen && this.state.anchorEl === "outlet"
                    ? "is-open"
                    : ""
                } sub-navigation`}
                onMouseLeave={this.handleSubmenuLeave}
              >
                <nav className="sub-navigation__wrapper sub-navigation_new-arrivals">
                  <div className="sub-navigation__categories">
                    <div className="sub-navigation__category-row">
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>OUTLET IS DISPLAYED</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      {this.state.isOpen && <div style={styles.overlay} />}
      </div>
    );
  }
}

export default MenuPrimary;
