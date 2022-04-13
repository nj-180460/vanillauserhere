
import { useState, useRef, useEffect } from 'react';
import HomeNavigation from './HomeNavigation';
import HomeCenter from './HomeCenterContainer';
import HomeFooter from './HomeFooter';


export default function HomeLandingPage(props){

    const [termInputValue, setTermInputValue] = useState('');
    const refsList = {
        homeRef: useRef(null),
        centerRef: useRef(null)
    }

    const typingText = [
        "import java.util.Scanner;",
        " ",
        "public class Hello {",
        "       public static void main(String...varags){",
        "           System.out.println(\"Choose project to view: \");",
        "           System.out.println(\"Project 1: 1\");",
        "           System.out.println(\"Project 2: 2\");",
        "           Scanner input = new Scanner(System.in);",
        "           int pick = input.nextInt();",
        "   }",
        "}",
        " ",
        "Choose project to view:",
        "Project 1: 1",
        "Project 2: 2"];
    const [codeTexts, setCodeText] = useState(typingText);
    
    function handleRunOnClick(){
        console.log("clicked run");
    }

    function handleClearOnClick(){
        console.log("clicked clear");
    }

    function handleInputKey(key){
        if (key.keyCode === 13) {
            // termInputValue
            // setCodeText(...codeTexts, codeTexts.push(termInputValue));
            console.log("enter: " + termInputValue);
        }
    }

    function IntroMe(){
        return (
            <div className="IntroMe">
                <div className="intro-me">
                    <p>
                        Hi, I'm Neil John Selencio, an aspiring Java developer.
                        I develop JavaFX desktop app, and Swing desktop app.
                        I'm currently studying Spring Boot. 
                        Looking forward to working with you!
                    </p>
                </div>
                <div className="java-typing-animation">
                    <div className="nav-button">
                        <button className ="btn-run" onClick={handleRunOnClick}>Run</button>
                        <button className="btn-clear" onClick={handleClearOnClick}>clear</button>
                    </div>
                    <pre id="type-writer">
                        {
                            codeTexts.map((text, index) => {
                                return <p key={index}>{text}</p>
                            })
                        }
                    </pre>
                    <div className="terminal-input">
                        <label>$ </label>
                        <input
                            type="text" name="term-input" required
                            onKeyDown={handleInputKey}
                            />
                            {/* onChange={(eventChange) => setTermInputValue(eventChange.target.value)} */}
                        {/* <span className="tooltiptext">Input here</span> */}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="HomeLandingPage">
            <HomeNavigation/>
            <IntroMe />
            <HomeCenter />
            <HomeFooter />
        </div>
    );
}
