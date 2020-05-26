import React from "react";

import HatSizes from "./hatSizesContent/HatSizes";
import ClotheSizes from "./clothesSizes/ClothesSizes";
import ShoesSizes from "./shoesSizesContent/ShoesSizes";
// import Calculator from "./calculator/Calculator";
import SearchBy from "./search/SearchBy";

function MainContent() {
  return (
    <main className="main">
      <SearchBy />
      {/* <Calculator /> */}
      <ClotheSizes />
      <HatSizes />
      <ShoesSizes />
    </main>
  );
}

export default MainContent;
