import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Jobchosing from "../routes/Jobchosing";
function RouterCom(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/Jobchosing" element={<Jobchosing/>}></Route>
            </Routes>
        </Router>
    );
}

export default RouterCom;