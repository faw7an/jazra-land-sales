import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Hero from "./Hero";
import "../css/index.css"
function App(){
    return(
        <div>
            <NavBar />
            <Hero />
            <Footer />
        </div>
    )
}

export default App;