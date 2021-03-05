//company List
var closeList = document.querySelector('#close');
var openList = document.querySelector('#open');
var companyList = document.querySelector('.company');

// media query 
if (document.documentElement.clientWidth < 900) {
companyList.style.display = "none"
closeList.style.display ="none";


// companyList function
openList.addEventListener('click', function(event){
    if(companyList.style.display === "none") {
        companyList.style.display ="block";
        openList.style.display ="none";
        closeList.style.display = "block";
    } else {
        companyList.style.display ="none";
    };
})

closeList.addEventListener('click', function(event){
    if(companyList.style.display === "block") {
        companyList.style.display ="none";
        openList.style.display ="block";
        closeList.style.display = "none";

    } else {
        companyList.style.display ="block";
    };
})




// trustus list
var closeList1 = document.querySelector('#close1');
var openList1 = document.querySelector('#open1');
var trustUsList = document.querySelector('.trustus');


trustUsList.style.display = "none"
closeList1.style.display ="none";


// trustus function
openList1.addEventListener('click', function(event){
    if(trustUsList.style.display === "none") {
        trustUsList.style.display ="block";
        openList1.style.display ="none";
        closeList1.style.display = "block";
    } else {
        trustUsList.style.display ="none";
    };
})

closeList1.addEventListener('click', function(event){
    if(trustUsList.style.display === "block") {
        trustUsList.style.display ="none";
        openList1.style.display ="block";
        closeList1.style.display = "none";
    } else {
        trustUsList.style.display ="block";
    };
})




//resuorces list
var closeList2 = document.querySelector('#close2');
var openList2 = document.querySelector('#open2');
var resourcesList = document.querySelector('.resources')


resourcesList.style.display = "none"
closeList2.style.display ="none";


// resources function
openList2.addEventListener('click', function(event){
    if(resourcesList.style.display === "none") {
        resourcesList.style.display ="block";
        openList2.style.display ="none";
        closeList2.style.display = "block";
    } else {
        resourcesList.style.display ="none";
    };
})

closeList2.addEventListener('click', function(event){
    if(resourcesList.style.display === "block") {
        resourcesList.style.display ="none";
        openList2.style.display ="block";
        closeList2.style.display = "none";
    } else {
        resourcesList.style.display ="block";
    };
})




//extras list
var closeList3 = document.querySelector('#close3');
var openList3 = document.querySelector('#open3');
var extrasList = document.querySelector('.extras')

extrasList.style.display = "none"
closeList3.style.display ="none";


// trustus function
openList3.addEventListener('click', function(event){
    if(extrasList.style.display === "none") {
        extrasList.style.display ="block";
        openList3.style.display ="none";
        closeList3.style.display = "block";
    } else {
        extrasList.style.display ="none";
    };
})

closeList3.addEventListener('click', function(event){
    if(extrasList.style.display === "block") {
        extrasList.style.display ="none";
        openList3.style.display ="block";
        closeList3.style.display = "none";
    } else {
        extrasList.style.display ="block";
    };
})


//navigation
var openMenu = document.querySelector('.menu-toggle');
var closeMenu = document.querySelector('.menu-close');
var mainMenu = document.querySelector('.header-nav');
var backDrop = document.querySelector('.backdrop');
var listItems = document.querySelector('.header-list');



closeMenu.style.display = "none";
mainMenu.style.display ="none";
backDrop.style.display ="none";



openMenu.addEventListener('click', function(event){
    if(mainMenu.style.display === "none")
    {
        mainMenu.style.display ="block";
        openMenu.style.display = "none";
        closeMenu.style.display ="block";
        backDrop.style.display ="block";
        
    } else {
        mainMenu.style.display === "none"
    }
})

closeMenu.addEventListener('click', function(event){
    if(mainMenu.style.display === "block") {
        mainMenu.style.display ="none";
        openMenu.style.display = "block";
        closeMenu.style.display ="none"
        backDrop.style.display ="none";
    } else {
        mainMenu.style.display === "none"
    }
    
})
    //List items
    listItems.addEventListener('click', function(event){
        if(mainMenu.style.display === "block") {
            mainMenu.style.display ="none";
            openMenu.style.display = "block";
        } else {
            mainMenu.style.display ="none";
        }
    })

    backDrop.addEventListener('click', function(){
        if (mainMenu.style.display === "block") {
            mainMenu.style.display ="none";
            openMenu.style.display = "block";
        }
        else {
            mainMenu.style.display === "none"
        }
    })








}