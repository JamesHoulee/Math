async function loadPartials() {
    const headerHTML = await fetch("header.html").then(res => res.text());
    const footerHTML = await fetch("footer.html").then(res => res.text());
  
    document.getElementById("header").innerHTML = headerHTML;
    document.getElementById("footer").innerHTML = footerHTML;
  }
  
  document.addEventListener("DOMContentLoaded", loadPartials);
  