const getId = element => document.getElementById(element);
const exitButton = getId("exit");
const menuButton = getId("open");
const nav = getId("navigation");
const header = getId("head");
const reviewCards = document.getElementsByClassName("review-cont-item");
const reviewImg = document.getElementsByClassName("review-cont-item-pp");
const reviewSocial = document.getElementsByClassName("review-cont-item-social");
const navLinks = document.getElementsByClassName("nav-links-bar");

// window.addEventListener("resize", ()=>{
//     console.log(screen.width)
// });
window.onresize = function (event) {
    if (screen.width > 882) {
        if (nav.classList.length > 1) {
            nav.classList.remove('nav-opened');
            header.classList.remove('header-opened');
        }
    }
};
exitButton.addEventListener('click', () => {
    nav.classList.remove('nav-opened');
    header.classList.remove('header-opened');
    exitButton.classList.add('closed');
    menuButton.classList.remove('closed');
})
menuButton.addEventListener('click', () => {
    nav.classList.add('nav-opened');
    header.classList.add('header-opened');
    exitButton.classList.remove('closed')
    menuButton.classList.add('closed');
})
Object.keys(reviewCards).forEach(element => {
    reviewCards[element].addEventListener('mouseover', () => {
        console.log(reviewImg[element])
        reviewImg[element].style.transform = "translateY(-20px)";
        reviewSocial[element].style.display = "flex";
    })
  
})
Object.keys(reviewCards).forEach(element => {
    reviewCards[element].addEventListener("mouseout", () => {
        console.log(reviewImg[element])
        reviewImg[element].style.transform = "translateY(0)";
        reviewSocial[element].style.display = "none";
    })
  
})
Object.keys(navLinks).forEach(element => {
    navLinks[element].addEventListener("click", () => { 
            nav.classList.remove('nav-opened');
            header.classList.remove('header-opened');
            exitButton.classList.add('closed');
            menuButton.classList.remove('closed');
        
    })
  
})