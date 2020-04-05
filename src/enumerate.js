window.addEventListener("load", function () {
  const h1Arr = document.getElementsByTagName("h1");
  const h2Arr = document.getElementsByTagName("h2");
  const h3Arr = document.getElementsByTagName("h3");
  const h4Arr = document.getElementsByTagName("h4");
  const h5Arr = document.getElementsByTagName("h5");
  const h6Arr = document.getElementsByTagName("h6");

  const h1Tags = Array.from(h1Arr);
  h1Tags.forEach((h1) => {
    const tocChunk = document.createElement("div");
    const link = document.createElement("a");
    link.setAttribute("href", "#" + h1.id);
    link.innerHTML = h1.innerHTML;
    tocChunk.appendChild(link);
    tocChunk.setAttribute("class", "tocChunk anchor");
    document.getElementsByClassName("sidebar")[0].appendChild(tocChunk);
  });
});
