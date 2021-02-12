import React from 'react';
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Projects from './components/projects/Projects';
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <div className="container app__container">
        <div className="row app__row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 app__main-content">
            <Navbar />
            <AnimatePresence exitBeforeEnter>
              <Switch location={ location } key={ location.key }>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/curriculum">
                  <Resume />
                </Route>
                <Route path="/proyectos" component={ Projects } />
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
