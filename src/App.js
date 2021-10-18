import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import Accueil from './pages/accueil';
import Login from './pages/login'
import Register from './pages/register'
import RegisterPseudo from './pages/registerPseudo'
import discover from './pages/discover'
import fullScreen from './pages/imageFullScreen'
import fullScreen2 from './pages/postFullScreen'
import search from './pages/search'



const App = () => {

  return (
    <>
      <BrowserRouter>
      <AnimatePresence>
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/Register-pseudo" component={RegisterPseudo} />
          <Route path="/discover" component={discover} />
          <Route path="/fullscreen" component={fullScreen} />
          <Route path="/fullscreen2" component={fullScreen2} />
          <Route path="/search" component={search} />
        </Switch>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
};

export default App;
