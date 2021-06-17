/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const items = document.querySelectorAll("section"); /*get all sections*/
const navmenu = document.querySelector("#navbar__list"); /* get unordered list (ul) in nav section*/
const fragment = document.createDocumentFragment(); /* append created nav items to it for the sake of performance*/
 
/*build li element for each section that will be created , and put it in navbar */
items.forEach (  (item) => {
    const creatLi = document.createElement("li"); /* creat li element */
    const anchor = document.createElement("a"); /* creat anchor element*/
    const dataNav = item.getAttribute("data-nav"); /* get data-nav attribute */
    anchor.innerText = dataNav; /* add data-nav as a content to anchor */
    creatLi.appendChild(anchor); /* add anchor element to li element */
    const allIds = item.getAttribute("id"); /* get id attribute */
    anchor.setAttribute("href", "#"+ allIds);/* creat href attribute */
    anchor.setAttribute("class", "menu__link");/* creat class attribute */
    fragment.appendChild(creatLi); /* add li element to document fragment for best performance  */
    anchor.addEventListener( "click" , 
        function (event) {
            event.preventDefault()
            item.scrollIntoView({behavior: "smooth"}); });
        }) /* let link scroll to its section, when clicked in it*/
    
    navmenu.appendChild(fragment); /* add li element (which is in document fragment) to ul element (which is in navbar) */


window.addEventListener("scroll", ()=>{
    items.forEach( (itemViewed) => {
        const size = itemViewed.getBoundingClientRect();/* get the size for viewed section*/
        console.log(size.top);
        
        if (size.top >= 0 && size.top <= 400) {
            itemViewed.classList.add("your-active-class"); /*add class attribute for the section who is viewed*/
            
            const dataNav = itemViewed.getAttribute("data-nav");
            console.log(dataNav);/* get data-nav attribute for the section who is viewed */
            const allAnchors = document.querySelectorAll("a"); /*get all Anchors*/
            
            /*get corresponding link when its section is  viewed*/
            allAnchors.forEach( (theA)=> {
                if (theA.innerText === dataNav){
                    theA.classList.add("menu__link");
                }else {
                    theA.classList.remove("menu__link");
                }
            })
        }else {
            itemViewed.classList.remove("your-active-class"); /* remove class attribute form all sections which are not viewed*/
        }
    })
    })
 
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


