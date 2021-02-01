import React from "react";
import { BrowserRouter as Router, Route, Switch } 
from "react-router-dom";

import NavBarSection from "./NavBarSection";
import NavagationList from "./NavagationList";
import AboutList from "./AboutList";
import FeaturesSection from "./FeaturesSection";
import HomePackageSection from "./HomePackageSection";

import StorySectionList from "./StorySectionList";
import BookList from "./BookList";
import FooterList from "./FooterList";
import PopUpList from "./PopupList"

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faFighterJet } from "@fortawesome/free-solid-svg-icons";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);
library.add(faFighterJet);
library.add(faMicrochip);
library.add(faDesktop);
library.add(faHeartbeat);

//trying to nest feature component into features session so i get four across so far accomplised horizontal elements only
class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="">
        <Router>
          <Switch>
            <Route exact path="/" Component={NavBarSection} />
          </Switch>
        <NavagationList />
        <NavBarSection />
        <AboutList />
        <FeaturesSection />
        <HomePackageSection />
        <StorySectionList/>
        <BookList />
        <FooterList />
        <PopUpList />
        </Router>
      </div>
    );
  }
}

export default App;
