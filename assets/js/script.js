function toggleClass() {
    var element = document.getElementById("tombola");

    if (element.classList.contains("tombola")) {
        element.classList.remove("tombola");
        element.classList.add("tomba");
    } else {
        element.classList.remove("tomba");
        element.classList.add("tombola");
    }
}

function toggleOrario() {
    var x = document.getElementById("orario-container");
    if (x.classList.contains("orario")) {
        x.classList.remove("orario");
        x.classList.add("no-orario");
    } else {
        x.classList.remove("no-orario");
        x.classList.add("orario");
    }
}

// includeScript.js
let promises = [];
function includeHTML() {
    const z = document.getElementsByTagName("*");
    const loadPromise = (e, file) => new Promise(function(resolve, reject) {
        $(e).load(file, resolve);
    }); 
    for(let i=0; i<z.length; i++) {
        const e = z[i];
        let file = e.getAttribute("include-html");
        if(file) {
            promises.push(loadPromise(e, file));
            e.removeAttribute("include-html");
            includeHTML();
            return;
        }
    }

    Promise.all(promises).then(() => {
        console.log("All promises resolved!");
        const pathname = window.location.pathname.split("/");
        const pagina = pathname[pathname.length - 2] || 'home';
        const navLink = document.getElementById("nav-link-" + pagina);
        if (navLink != null) navLink.classList.add("active");
        console.log(navLink,pagina)
        
        if(document.getElementById('footerPush') != null && document.body.clientHeight - document.getElementById('mainNavbar').clientHeight - document.getElementById('mainFooter').clientHeight < $(window).height()) {
            document.getElementById('footerPush').style.height = ($(window).height() - document.body.clientHeight) + 'px';
        }

        const currentYear = new Date().getFullYear();
        let spanYear = document.getElementsByClassName("currentYear");
        for(let i = 0; i < spanYear.length; i++)
            spanYear[i].innerHTML = currentYear;
    });
};

window.addEventListener('load', includeHTML);

