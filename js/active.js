const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if (pageName === "index.html"){
    document.querySelector(".home").classList.add("activeLink");
}

if (pageName === "moon-page.html"){
    document.querySelector(".destination").classList.add("activeLink");
}

if (pageName === "crew-a.html"){
    document.querySelector(".crew").classList.add("activeLink");
}

if (pageName === "technology-a.html"){
    document.querySelector(".technology").classList.add("activeLink");
}