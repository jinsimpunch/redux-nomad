import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

function App() {

    return (

        <Router>
            <Routes>
                <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
                <Route path={"/detail/:id"} element={<Detail />} />

            </Routes>


        </Router>
    )


}

export default App;