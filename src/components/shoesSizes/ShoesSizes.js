import React from 'react';

import ShoesSizesTable from '../table5/ShoesSizesTable';

import './shoesSizes.scss';
import kidsShoes from '../../img/ryan-plomp.jpg';


function ShoesSizes(){
  return(
    <section className="section">
      <div className="section__wrapper" id="shoes-table">
        <h2 className="section__heading">Vaikiškos avalynės dydžiai</h2>
        <p className="paragraph">Prieš rinkdamiesi avalynę pamatuokite vaiko pedutę. Vienas iš variantų pastatyti vaiko koją ant poperiaus lapo ir apibrėžti. Taip galėsite lengviau išmatuoti jau ant popiepieriaus.</p>
        <div className="section__content">
          <ShoesSizesTable />
          <div className="img-holder">
            <img className="img-holder__img" src={kidsShoes} alt="Baby."/>
            <span className="img-holder__comment">Photo by Ryan Plomp on Unsplash</span>
          </div>
        </div>
        <p className="paragraph">Pateikta dydžių lentelė yra orientacinė. Visada papildomai rekomenduojame atsižvelgti į gamintojo pateikta dydžių lentelę.</p>
      </div>
    </section>
  )
}

export default ShoesSizes;