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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const ul = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();

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

sections.forEach(bulidNav)
//making function to bulid dunamic navmenu using foreach to make this change and creating elements for each section 
function bulidNav(ithem){
let ithemName = ithem.getAttribute("data-nav");
const link = document.createElement("a");
//here creating name for each seaction
link.innerHTML = ithemName;
const li = document.createElement("li");
link.classList.add('menu__link');
//add link to the list
li.appendChild(link);
//here when click to the section button it scrolls to its section
li.addEventListener("click",()=>{
ithem.scrollIntoView({behavior:"smooth"});
})
//fragment is a virtual variable for virtual loop to avoid overloop and be virtual
fragment.appendChild(li);
}
ul.appendChild(fragment);



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
window.addEventListener("scroll",mainfun)

function mainfun(){
   sections.forEach( getbound)

   function getbound (fun1) {
    // here we use getbound becaouse it fet the first element appear in th screen
    const bounding = fun1.getBoundingClientRect();
    //add the value of datanav or the sections to parameter fun1
    const secget = fun1.getAttribute("data-nav");
    //declare the links that we creat before
    const colorlink = document.querySelectorAll('a');
    // here we determine the active section 
    //here we say if the area of view from 0 to 300 add active features
    if (bounding.top > 0 && bounding.top < 200) {
    
    fun1.classList.add('your-active-class');
    //make function for making the buttoms of links active 
      colorlink.forEach(activelink)
      function activelink(fun3) {
        //here if the text of the clicked section equal data nav
        //here we activate the links
        if (fun3.innerHTML == secget){
          // we make foreach to remove the active features
          colorlink.forEach((fun4)=>{
            fun4.classList.remove('active');
            
          })
          fun3.classList.add('active');
        }
      }
     }
  };
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
