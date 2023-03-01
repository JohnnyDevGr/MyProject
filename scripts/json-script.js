"use strict";
//ts@check

fetch("./data/about.json")
  .then((response) => response.json())
  .then((data) => {
    const p = document.getElementById("json-text");
    p.textContent = data[0].content;
    console.log(data);
  });
