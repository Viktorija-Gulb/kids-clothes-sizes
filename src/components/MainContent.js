import React from "react";

import HatSizes from "./hatSizesContent/HatSizes";
import ClotheSizes from "./clothesSizes/ClothesSizes";
import ShoesSizes from "./shoesSizesContent/ShoesSizes";
import Calculator from "./calculator/Calculator";

function MainContent() {
  return (
    <main className="main">
      <Calculator />
      <ClotheSizes />
      <HatSizes />
      <ShoesSizes />
    </main>
  );
}

export default MainContent;
