import React from "react";

import HatSizes from "./hatSizes/HatSizes";
import ClotheSizes from "./clothesSizes/ClothesSizes";
import ShoesSizes from "./shoesSizes/ShoesSizes";
import Calculator from "./calculator/Calculator";

function MainContent() {
  return(
    <main className="main">
      <Calculator />
      <ClotheSizes />
      <HatSizes />
      <ShoesSizes />
    </main>
  );
}


export default MainContent;