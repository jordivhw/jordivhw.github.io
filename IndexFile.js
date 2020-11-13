let toTopPicture = document.getElementById("passport-picture")


toTopPicture.addEventListener("click", scrollToTop)

function scrollToTop() {
    //for safari
    document.body.scrollTop = 0;

    //for chrome,...
    document.documentElement.scrollTop = 0;
}