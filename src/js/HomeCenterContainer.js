
export default function HomeCenterContainer(props){

    const githubAcc = "https://github.com/nj-180460";
    const linkedinAcc = "https://www.linkedin.com/in/neil-john-selencio-71923217b/";
    const fbAcc = "https://web.facebook.com/TenacityAndAdversityAreOldFoes/"
    const aboutMe =
        [ "Hi, nice to meet you! I'm Neil John, "
        +"a BSIT student from University of Eastern Philippines. Currently in 4rth year level. ",
        "My primary programming language is Java."];


    function ContactInfo(props){
        return (
            <div className="ContactInfo">
                <a href={props.account}>{props.account}</a>
            </div>
        );
    }


    function AboutMeInfo(props){
        return (
            <div className="AboutMeInfo">
                <p>{props.aboutMe[0]}</p>
                <br/>
                <p>{props.aboutMe[1]}</p>
            </div>
        );
    }


    return (
        <div className="HomeCenterContainer">
            <div className="container contact-cont">
                <h3 className="header contact">Contact</h3>
                <div className="contact-list">
                    <ContactInfo account={githubAcc}/>
                    <ContactInfo account={linkedinAcc}/>
                    <ContactInfo account={fbAcc}/>
                </div>
            </div>
            <div className="container about-me-cont">
                <h3 className="header about-me">About Me</h3>
                <div className="about-me-info">
                    <AboutMeInfo aboutMe={aboutMe}/>
                </div>
            </div>
        </div>
    );
}

