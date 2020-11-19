let toTopPicture = document.getElementById("passport-picture");
let githubLogo = document.getElementById("github_icon");
let linkedinLogo = document.getElementById("linkedin_icon");
let facebookLogo = document.getElementById("facebook_icon");
let instaLogo = document.getElementById("instagram_icon");
let iconsSection = document.getElementById("IconsSection");
let aboutNav = document.getElementById("about-navigation");


aboutNav.addEventListener("click", scrollToTop);
toTopPicture.addEventListener("click", scrollToTop);
linkedinLogo.addEventListener("click", openLinkedin);
githubLogo.addEventListener("click", openGithub);
facebookLogo.addEventListener("click", openFacebook);
instaLogo.addEventListener("click", openInsta);

function scrollToTop() {
    //for safari
    document.body.scrollTop = 0;

    //for chrome,...
    document.documentElement.scrollTop = 0;
}

function openLinkedin() {
    window.open("https://www.linkedin.com/in/jordi-vanheeswyck-7967921b9/");
}

function openGithub() {
    window.open("https://github.com/jordivhw");
}

function openFacebook() {
    window.open("https://www.facebook.com/jordi.vanheeswyck");
}

function openInsta() {
    window.open("https://www.instagram.com/jordi.vanheeswyck/");
}

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    let opacity = 0;
    if (currentScroll <= 100) {
        opacity = 1 - currentScroll / 100;
    } else {
        opacity = 0;
    }
    iconsSection.style.opacity = opacity;
});

