import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenuPrimary extends Component {
  state = {
    isOpen: false,
    anchorEl: null
  };

  handleMouseEnter = event =>
    this.setState({
      isOpen: true,
      anchorEl: event.currentTarget.id
    });

  handleMouseLeave = () =>
    this.setState({
      isOpen: false,
      anchorEl: null
    });

  render() {
    const styles = {
      overlay: {
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        opacity: 0.25,
        position: "absolute",
        top: "135px"
      }
    };

    return (
      <div id="header" className="global-header">
        <nav id="primary-nav" className="navigation__wrapper">
          <ul className="navigation clearfix">
            <li className="first-level">
              <Link
                id="arrivals"
                className="navigation__link"
                onMouseEnter={this.handleMouseEnter}
              >
                NEW ARRIVALS
              </Link>
              <div
                className={`${
                  this.state.isOpen && this.state.anchorEl === "arrivals"
                    ? "is-open"
                    : ""
                } sub-navigation`}
                onMouseLeave={this.handleMouseLeave}
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
            {this.state.isOpen && <div style={styles.overlay} />}
            <li className="first-level">
              <Link
                id="men"
                className="navigation__link"
                onMouseEnter={this.handleMouseEnter}
              >
                MEN
              </Link>
              <div
                className={`${
                  this.state.isOpen && this.state.anchorEl === "men"
                    ? "is-open"
                    : ""
                } sub-navigation`}
                onMouseLeave={this.handleMouseLeave}
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
                onMouseEnter={this.handleMouseEnter}
              >
                WOMEN
              </Link>
              <div
                className={`${
                  this.state.isOpen && this.state.anchorEl === "women"
                    ? "is-open"
                    : ""
                } sub-navigation`}
                onMouseLeave={this.handleMouseLeave}
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
                onMouseEnter={this.handleMouseEnter}
              >
                KIDS
              </Link>
              <div
                className={`${
                  this.state.isOpen && this.state.anchorEl === "kids"
                    ? "is-open"
                    : ""
                } sub-navigation`}
                onMouseLeave={this.handleMouseLeave}
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
                onMouseEnter={this.handleMouseEnter}
              >
                SHOES
              </Link>
              <div
                className={`${
                  this.state.isOpen && this.state.anchorEl === "shoes"
                    ? "is-open"
                    : ""
                } sub-navigation`}
                onMouseLeave={this.handleMouseLeave}
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
                onMouseEnter={this.handleMouseEnter}
              >
                OUTLET
              </Link>
              <div
                className={`${
                  this.state.isOpen && this.state.anchorEl === "outlet"
                    ? "is-open"
                    : ""
                } sub-navigation`}
                onMouseLeave={this.handleMouseLeave}
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
    );
  }
}

export default MenuPrimary;
