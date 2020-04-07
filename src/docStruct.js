/**
 *
 * @param {String} dom The DOM in string
 */
const makeDocStruct = (in_dom) => {
  let h1Count = 0;
  let h2Count = 0;
  let h3Count = 0;
  let h4Count = 0;
  // const found = dom.match(/<h1>/g);
  const dom = Array.from(in_dom);
  for (let i = 0; i < dom.length; i++) {
    if (dom[i] === `<` && dom[i + 1] === `h` && dom[i + 2] === `1`) {
      h1Count++;
      h2Count = 0;
      h3Count = 0;
      h4Count = 0;
      // dom.splice(i + 3, 0, ` class=section section${h1Count} `);
      // dom.splice(i + 3, 0, ` data-sectionNum="${h1Count}" `);
      dom.splice(i + 3, 0, ` data-headerNum="${h1Count}" `);
      console.log("h1 found");
    } else if (dom[i] === `<` && dom[i + 1] === `h` && dom[i + 2] === `2`) {
      h2Count++;
      h3Count = 0;
      h4Count = 0;
      console.log(h1Count);
      // dom.splice(i + 3, 0, ` class=subsection subsection${h1Count}_${h2Count} `);
      // dom.splice(i + 3, 0, ` data-subsectionNum="${h1Count}.${h2Count}" `);
      dom.splice(i + 3, 0, ` data-headerNum="${h1Count}.${h2Count}" `);
      console.log("  h2 found");
    } else if (dom[i] === `<` && dom[i + 1] === `h` && dom[i + 2] === `3`) {
      h3Count++;
      h4Count = 0;

      // dom.splice(i + 3, 0, ` class=subsubsection subsubsection${h1Count}_${h2Count}_${h3Count} `);
      // dom.splice(i + 3, 0, ` subsubsectionNum="${h1Count}.${h2Count}.${h3Count}" `);
      dom.splice(i + 3, 0, ` data-headerNum="${h1Count}.${h2Count}.${h3Count}" `);
      console.log("    h3 found");
    } else if (dom[i] === `<` && dom[i + 1] === `h` && dom[i + 2] === `4`) {
      h4Count++;
      // dom.splice(i + 3, 0, ` class=subsubsubsection subsubsubsection${h1Count}_${h2Count}_${h3Count}_${h4Count} `);
      // dom.splice(i + 3, 0, ` subsubsubsectionNum="${h1Count}.${h2Count}.${h3Count}.${h4Count}" `);
      dom.splice(i + 3, 0, ` data-headerNum="${h1Count}.${h2Count}.${h3Count}.${h4Count}" `);
      console.log("      h4 found");
    }
  }

  const retrievedDom = dom.join("");
  // console.log(retrievedDom);
  return retrievedDom;
};

module.exports = makeDocStruct;

// testing
/* const domSample = `
    <h1> 1 hello world </h1>
    <h2> 1.1 mello 1 world </h2>
    <h2> 1.2 mello 1 world </h2>
    <h3> 1.2.1 mello 1 world </h2>
    <h4> 1.2.1.1 mello 1 world </h2>
    
    <h1> 2 kello world </h1>
    
    <h2> 2.1 mello 3 world </h2>
`;
makeDocStruct(domSample);
 */
