// ----- PORTFOLIO SITE JAVASCRIPT FOR DARK MODE AND LIGHT MODE TOGGLER-----

// VARIABLE DECLARATIONSS
var body = document.querySelector("body")
var themeIcon = document.querySelector(".lightModeBtn")
var ul = document.querySelector("ul")
var siteMode = sessionStorage.getItem("mode")

// FUNCTION FOR CHECKING WHICH MODE USER SET LAST
function siteModeChecker() {
    if(siteMode === "dark"){
        sessionStorage.setItem("mode", "dark")
        siteThemeSet()
    }else if(siteMode === "light"){
        sessionStorage.setItem("mode", "light")
        siteThemeSet()
    }
}

// CHECK THE MODE OF THE SITE WHEN IT LOADS INITALLY AND FOR EACH PAGE USING THE PREVIOUSLY DEFINED FUNCTION
siteModeChecker()

// FUNCTION FOR SETTING THE THEME BASED ON THE MODE OF THE SITE AND DETERMINING IF COMPONENT EXISTS ON PAGE
function siteThemeSet(){
    if(siteMode === "dark"){
        body.classList = "darkBody"
    }else if(siteMode === "light"){
        body.classList = "lightBody"
    }
}

// EVENT LISTENER FOR ICON WHEN CLICKED TO SWITCH BETWEEN LIGHT AND DARK MODE
themeIcon.addEventListener("click", function(){
    // DARK AND LIGHT MODE TOGGLER
    if(siteMode === "dark"){
        siteMode = "light"
        siteThemeSet()
        sessionStorage.setItem("mode", "light")
    }else if(siteMode === "light"){
        siteMode = "dark"
        siteThemeSet()
        sessionStorage.setItem("mode", "dark")
        
    }else{
        //ELSE STATEMENT FOR INITIAL SITE LOAD
        sessionStorage.setItem("mode","light")
        siteMode = "light"
        siteThemeSet()
    }
})
