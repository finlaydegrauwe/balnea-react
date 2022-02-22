import "./App.css";
import { ReactComponent as YumMe } from "./Components/Bubbles/c-yumme.svg";
import { ReactComponent as Bob } from "./Components/Bubbles/p-bob-nieuw.svg";
import { ReactComponent as Geert } from "./Components/Bubbles/p-geert.svg";
// import { ReactComponent as Camera } from "./Components/Bubbles/c-camera.svg";
import { ReactComponent as Chatroom } from "./Components/Bubbles/c-chatroom.svg";
import { ReactComponent as Commons } from "./Components/Bubbles/c-commons.svg";
import { ReactComponent as Modereren } from "./Components/Bubbles/i-modereren.svg";
import { ReactComponent as Verbonden } from "./Components/Bubbles/i-verbonden.svg";
import { ReactComponent as Methodiek } from "./Components/Bubbles/m-methodiek.svg";
import { ReactComponent as Over } from "./Components/Bubbles/m-over.svg";
import { ReactComponent as Fedrik } from "./Components/Bubbles/p-fedrik.svg";
import { ReactComponent as Sieglinde } from "./Components/Bubbles/p-sieglinde.svg";
import { ReactComponent as Timon } from "./Components/Bubbles/p-timon.svg";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";

function App() {
  return (
    <div className="blobs">
      <Link to="/blob/over">
        <Over />
      </Link>
      <Link to="/blob/yumme">
        <YumMe />
      </Link>
      <Link to="/blob/timon">
        <Timon />
      </Link>
                                                 {/* nog doen */}
      <Link to="/blob/chatroom"> 
        <Chatroom />
      </Link>
                                                {/* nog doen */}
      <Link to="/blob/modereren">
        <Modereren />
      </Link>
      <Link to="/blob/geert">
        <Geert />
      </Link>
      <Link to="/blob/methodiek">
        <Methodiek />
      </Link>
      <Link to="/blob/camera">
        {/* <Camera className="camera" /> */}
        <h2>WATCH YOUR STEP</h2>
        <Webcam videoConstraints={{width: "100%",facingMode: "user"}}/>
      </Link>
      <Link to="/blob/bob">
        <Bob />
      </Link>
                                                {/* nog doen */}
      <Link to="/blob/verbonden">
        <Verbonden />
      </Link>
      <Link to="/blob/commons">
        <Commons />
      </Link>
      <Link to="/blob/fedrik">
        <Fedrik />
      </Link>
      <Link to="/blob/sieglinde">
        <Sieglinde />
      </Link>
    </div>
  );
}

export default App;
