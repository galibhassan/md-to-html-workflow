const path = require("path");
const fs = require("fs");
const showdown = require("showdown");
const converter = new showdown.Converter({ tables: true });
const makeDocStruct = require("./docStruct");

const userInputPath = process.argv[2];
const rootDir = path.dirname(__dirname);
const inputFilePath = path.resolve(path.join(rootDir, userInputPath));

var replace = require("replace");

// const sample_md = fs.readFileSync(path.resolve(__dirname, "../", "sample", "readme.md"), { encoding: "utf8" });
const sample_md = fs.readFileSync(inputFilePath, { encoding: "utf8" });

const outputHTMLChunk = converter.makeHtml(sample_md);
// let regexp = RegExp("^&.*;$", "g");

const docStructDOM = makeDocStruct(outputHTMLChunk);
const header = fs.readFileSync(path.resolve(__dirname, "../", "template", "header.txt"), { encoding: "utf8" });
const footer = fs.readFileSync(path.resolve(__dirname, "../", "template", "footer.txt"), { encoding: "utf8" });
const outputHTML = header + docStructDOM + footer;

fs.writeFileSync(path.resolve(__dirname, "../", "index.html"), outputHTML);

replace({
  regex: ":x:",
  replacement: `<span class="cross">X</span>`,
  paths: [path.resolve(__dirname, "../", "index.html")],
  recursive: true,
  silent: true,
});
replace({
  regex: "__web__",
  replacement: `https://github.com/LRydin/Power-Grid-Frequency-Data/raw/master/`,
  paths: [path.resolve(__dirname, "../", "index.html")],
  recursive: true,
  silent: true,
});
