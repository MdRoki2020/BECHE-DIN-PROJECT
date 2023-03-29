import React, {Fragment, useRef} from "react";
import {Container,Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {AiFillProfile, AiOutlineMenuUnfold, AiOutlineLogout, AiFillDashboard} from "react-icons/ai";
import {FaUserPlus} from "react-icons/fa";
import logo from "../../Assets/images/logo.png";
import {getUserDetails, removeSessions } from "../../Helper/SessionHelperPublisher";



const PublisherNavigation = (props) => {

    let contentRef,sideNavRef=useRef();

    const onLogout=()=>{
        removeSessions();
    }


    const MenuBarClickHandler = () => {
        let sideNav = sideNavRef;
        let content = contentRef;
        if (sideNav.classList.contains("side-nav-open")) {
            sideNav.classList.add("side-nav-close");
            sideNav.classList.remove("side-nav-open");
            content.classList.add("content-expand");
            content.classList.remove("content");
        } else {
            sideNav.classList.remove("side-nav-close");
            sideNav.classList.add("side-nav-open");
            content.classList.remove("content-expand");
            content.classList.add("content");
        }
      }


  return (
    <Fragment>
            <Navbar  className="fixed-top px-0 shadow-sm ">
                <Container fluid={true}>
                    <Navbar.Brand >
                        <a className="icon-nav m-0 h5" onClick={MenuBarClickHandler}><AiOutlineMenuUnfold/></a>
                        <img className="nav-logo mx-2"  src={logo} alt="logo"/>
                    </Navbar.Brand>

                    <div className="float-right h-auto d-flex">
                        <div className="user-dropdown">
                            <img className="icon-nav-img icon-nav" src={`http://localhost:5000/${getUserDetails()['filePath']}`} alt="profile"/>
                            <div className="user-dropdown-content ">
                                <div className="mt-4 text-center">
                                    <img className="icon-nav-img" src={`http://localhost:5000/${getUserDetails()['filePath']}`} alt="profile"/>
                                    <h6>{getUserDetails()['FirstName']}</h6>
                                    <hr className="user-dropdown-divider  p-0"/>
                                </div>
                                <NavLink to="/Profile" className="side-bar-item">
                                    <AiFillProfile className="side-bar-item-icon" />
                                    <span className="side-bar-item-caption">Profile</span>
                                </NavLink>
                                <a onClick={onLogout} className="side-bar-item">
                                    <AiOutlineLogout className="side-bar-item-icon" />
                                    <span className="side-bar-item-caption">Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>

            <div ref={(div) =>{sideNavRef=div}} className="side-nav-open">

                <NavLink   className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" }  to="/PublisherDashboard"  end>
                    <AiFillDashboard className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Dashboard</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/PostAds" >
                    <FaUserPlus className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Post ADs</span>
                </NavLink>

            </div>

            <div ref={(div) => contentRef = div} className="content">
                {props.children}
            </div>

    </Fragment>
  )
}

export default PublisherNavigation
