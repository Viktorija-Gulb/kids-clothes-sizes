import React from 'react';

import HatSizesTable from '../table4/HatSizesTable';
import './hatSizes.scss';

import kidsHats from '../../img/travis-grossen.jpg';

function HatSizes(){
  return(
    <section className="section">
      <div className="section__wrapper" id="hats-table">
        <h2 className="heading">Vaikiškų kepurių dydžiai</h2>
        <div className="section__content section__content--hats">
          <HatSizesTable />
          <div className="img-holder img-holder--hats">
            <img className="img-holder__img" src={kidsHats} alt="Baby."/>
            <span className="img-holder__comment">Photo by Travis Grossen on Unsplash</span>
          </div>
        </div>
        <p className="paragraph">Šie dydžiai yra orientaciniai, kiekvieno vaiko galvytė gali skirtis, todėl svarbu pasimatuoti galvytės apimtį.</p>
      </div>
    </section>
  )
}

export default HatSizes;