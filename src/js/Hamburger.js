
const Hamburger = (props) => {
    const handleToggle = props.toggleNav;
    const toggleMenu = props.toggleMenu;

    return (
        <div className="Hamburger">
            <input id="toggle" type="checkbox" onChange={handleToggle} checked={toggleMenu}></input>
                <label htmlFor="toggle" className="hamburger">
                    <div className="top-bun"></div>
                    <div className="meat"></div>
                    <div className="bottom-bun"></div>
                </label>
        </div>
    );
}

export default Hamburger;
