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

// includeScript.js
function includeHTML() {
    // Fetch header
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('headerContainer').innerHTML = html;
        })
        .catch(error => console.error('Error fetching header:', error));

    // Fetch footer
    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footerContainer').innerHTML = html;
        })
        .catch(error => console.error('Error fetching footer:', error));
}

document.addEventListener("DOMContentLoaded", function () {
    // Fetch header and footer, then call includeHTML
    Promise.all([
        fetch('header.html').then(response => response.text()),
        fetch('footer.html').then(response => response.text())
    ])
    .then(([headerHtml, footerHtml]) => {
        document.getElementById('headerContainer').innerHTML = headerHtml;
        document.getElementById('footerContainer').innerHTML = footerHtml;
    })
    .catch(error => console.error('Error fetching header or footer:', error))
    .finally(() => {
        // Call includeHTML after all fetch requests are completed
        includeHTML();
    });
});
