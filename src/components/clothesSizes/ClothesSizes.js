import React from 'react';

import NewbornContent from '../newborn/NewbornContent';
import SizesTable1to6 from '../table2/SizesTable1to6';
import SizesTable3to16 from '../table3/SizesTable3to16';

import './clothesSizes.scss'

import toddler from '../../img/felipe-salgado.jpg'
import schoolAge from '../../img/ben-white.jpg'

function ClotheSizes(){
  return(
    <section className="section">
      <NewbornContent />
      <div className="section__wrapper" id="todler-table">
        <h2 className="section__heading">Nuo vienerių iki 6 metukų</h2>
        <div className="section__content section__content--toddler">
          <SizesTable1to6 />
          <div className="img-holder">
            <img className="img-holder__img" src={toddler} alt="Baby."/>
            <span className="img-holder__comment">Photo by Felipe Salgado on Unsplash</span>
          </div>
        </div>
        <p className="paragraph">Pateikta dydžių lentelė yra orientacinė. Visada papildomai rekomenduojame atsižvelgti į gamintojo pateikta dydžių lentelę.</p>
      </div>
      <div className="section__wrapper" id="table-3">
        <h2 className="section__heading">Nuo 3 iki 16 metų</h2>
        <div className="section__content">
          <SizesTable3to16 />
          <div className="img-holder img-holder--schoolAge">
            <img className="img-holder__img" src={schoolAge} alt="Baby."/>
            <span className="img-holder__comment">Photo by Ben White on Unsplash</span>
          </div>
        </div>
        <p className="paragraph">Pateikta dydžių lentelė yra orientacinė. Visada papildomai rekomenduojame atsižvelgti į gamintojo pateikta dydžių lentelę.</p>
      </div>
    </section>
  )
}

export default ClotheSizes;