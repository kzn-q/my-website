// Add event listener to add smooth scrolling when clicking on anchor links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;

            window.scrollTo({
                top: document.querySelector(hash).offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});