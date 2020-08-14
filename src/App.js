import React from 'react';
import HeaderNav from "./Components/HeaderNav";
import './App.css';
import Home from "./Components/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import Services from "./Components/Services";
import usePersistedState from "./usePersistedState";
import AvisoPrivacidad from "./Components/AvisoPrivacidad";
import AboutUs from "./Components/AboutUs";
import Blogs from "./Components/Blogs";
import TextBlog from "./Components/TextBlog";

function App() {
    const [pageIndex, setIndex] = usePersistedState(0)

  return (
    <Router>
        <HeaderNav setIndex={setIndex} index={pageIndex}/>
        <Switch>
            <Route path="/" exact component={Home}>
                <Home/>
            </Route>
            <Route path={"/servicios"}>
                <Services index={pageIndex}/>
            </Route>
            <Route path={"/conocenos"}>
                <AboutUs index={pageIndex}/>
            </Route>
            <Route path={"/blog"}>
                <Blogs index={pageIndex}/>
            </Route>
            <Route path={"/contacto"}>
                <ContactUs index={pageIndex}/>
            </Route>
            <Route path={"/privacidad"}>
                <AvisoPrivacidad index={5} />
            </Route>
            <Route path={"/articulo"}>
                <TextBlog index={5} />
            </Route>
        </Switch>

    </Router>
  );
}

export default App;
