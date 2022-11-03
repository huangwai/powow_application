import HomeButton from "../components/HomeButton.jsx";
import {useNavigate} from "react-router-dom";
import React from "react";

function CreateRoomButton(){
    const navigate = useNavigate();

    const roomButton = () => {
        navigate('/videoRoom');
    }
    return(
        <div id = "buttons">
            <button onClick={roomButton}> Create Room</button>
        </div>
    )


}
function CreateRoom(){
    return(
        <div id ="createRoomPage">
            <p>Create Room Page Here</p>
            <CreateRoomButton/>
        </div>
    )
}
export default CreateRoom