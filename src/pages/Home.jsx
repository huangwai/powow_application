// import Button from "../components/Button.jsx";
import {useNavigate} from "react-router-dom";
import React from "react";

/*
Button to navigate to Join Room Page Component
 */
function Button(){
    const navigate = useNavigate();

    const roomButton = () => {
        navigate('/joinRoom');
    }
    return(
        <div id = "buttons">
            <button onClick={roomButton}> Join Room</button>
        </div>
    )


}

/*
Button to navigate to Join Room Page Component
 */
function RandomChatButton(){
    const navigate = useNavigate();

    const roomButton = () => {
        navigate('/chatRoom');
    }
    return(
        <div id = "buttons">
            <button onClick={roomButton}> Random Chat</button>
        </div>
    )


}

function Home(){
    return(
        <div id ="homePage">
            {/*<h1>POWOW</h1>*/}
            <p>HOME PAGE HERE</p>
            <Button/>
            <RandomChatButton/>

        </div>
    )
}
export default Home