import React, { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route,HashRouter } from "react-router-dom";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Loader from "./components/Loader/Loader";
import Resume from "./components/resume";

const App = () => {

    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoader(!loader)
        }, 12500)
    }, [])

  return (
      
<HashRouter basename="/">
        <Route path="/resume">
          <Resume />
        </Route>

        
          <Route exact path="/">
          {loader && <div className="loader__container">

            <Loader/>

          </div>}
        {!loader && <Projects/>}

          </Route>

          <Route path="/about">
            {loader && <div className="loader__container">

              <Loader/>

              </div>}
            {!loader && <About/>}
          </Route>
</HashRouter>

    
  );
};

export default App;
