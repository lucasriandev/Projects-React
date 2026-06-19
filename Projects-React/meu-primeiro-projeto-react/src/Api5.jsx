import { useState, useEffect } from "react";

function Receitas() {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${busca}`);
}

export default Receitas;
