
import { useState, useEffect } from "react";
import Hamburger from "./Hamburger";

export default function HomeNavigation(props){

    const [toggleMenu, setToggleMenu] = useState(false);
    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    };

    const [screenWidth, setScreentWidth] = useState(window.innerWidth);

    /**
     * Monitor any changing on screen. When someone is playing your screen, pinch them! Kidding
     * When screen is shrinking, monitor the changes of width. Use useEffect
     */
    useEffect( () => {

        const handleChangeWidth = () => {
            setScreentWidth(window.innerWidth);
            if(window.innerWidth > 850) {
                setToggleMenu(false);
            }
        }
        window.addEventListener('resize', handleChangeWidth);

        return () => {
            window.removeEventListener('resize', handleChangeWidth);
        }

    }, []); // 2nd param is the data being monitored, if no param supplied, then this component is monitored

    function handleHomeClick(props){
        console.log("Home is clicked");
    }

    function handleContactClick(props){
        console.log("contact is clicked");
    }

//  <button className="hamburger-icon" onClick={toggleNav}>
//                 {/* Menu */}
//                 <div></div>
//                 <div></div>
//                 <div></div>
//             </button>

    return (
        <div className="HomeNavigation">
            <div className="nav-title">My Plain Portfolio</div>
            <Hamburger toggleNav={toggleNav} toggleMenu={toggleMenu}/>
            {(toggleMenu || screenWidth > 850) && (
                <div className="navig">
                    <div className="nav-home" onClick={handleHomeClick}>Home</div>
                    <div className="nav-contact" onClick={handleContactClick}>Contact</div>
                    <div className="nav-about-me">About me</div>
                </div>
            )}
            {/* <div className="navig">
                <div className="nav-title">My Plain Portfolio</div>
                <div className="nav-home" onClick={handleHomeClick}>Home</div>
                <div className="nav-contact" onClick={handleContactClick}>Contact</div>
                <div className="nav-about-me">About me</div>
            </div> */}
        </div>
    );
}
