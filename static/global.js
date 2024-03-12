console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

// let navLinks = $$("nav a");
// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);
// if (currentLink) { // or if (currentLink !== undefined)
// 	currentLink.classList.add("current");
// }
/* 
let pages = {
	"": "Home",
	"projects": "Projects",
    "contact":"Contact",
    "resume":"Resume",
    "https://github.com/sophiegr":"Github",
};

let nav = document.createElement("nav");
document.body.prepend(nav);

const ARE_WE_HOME = document.documentElement.classList.contains("home");

for (let url in pages) {
	let title = pages[url];
    if (!ARE_WE_HOME && !url.startsWith("http")) {
        url = "../" + url;
    }
    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    a.classList.toggle("current", a.host === location.host && a.pathname === location.pathname);
    if (a.host !== location.host) {
        a.target = "_blank";
    }
    nav.append(a);
} */