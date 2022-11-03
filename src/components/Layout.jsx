import { Outlet, Link } from "react-router-dom";
import HomeButton from "./HomeButton.jsx";
const Layout = () => {
    return (
        <>
            <HomeButton/>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/joinRoom">Join Room</Link>
                    </li>
                    <li>
                        <Link to="/createRoom">Create Room</Link>
                    </li>
                    <li>
                        <Link to="/videoRoom">Video Room</Link>
                    </li>
                    <li>
                        <Link to="/chatRoom">Chat Room</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;