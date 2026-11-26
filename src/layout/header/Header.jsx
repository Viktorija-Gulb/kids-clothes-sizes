import React from "react";
import Nav from './nav/Nav';
import './header.scss';

function Header() {
  return(
    <div className="header-wrapper">
      <header className="header">
        <div className="header__title">
          <h2 className="header__h2">Vaikiškų drabužių, batų, kepurių dydžiai</h2>
          <p className="header__paragraph">Čia jus galite rasti drabužių, batų ir kepurių dydžių lenteles kurios pagelbės renkantis tinkamą drabužio ar batų dydį.</p>
        </div>
        <Nav />
      </header>
      <div className="banner"></div>
    </div>
  );
}


export default Header;