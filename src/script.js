const menuButton = document.querySelector(".menu_button");


menuButton.addEventListener("click", showMenu)

function showMenu(){
    const menuDescr = document.querySelector(".header_container_menu")
    let displayStatus = menuDescr.style.display;
    if( displayStatus === "flex"){
        menuDescr.style.display = "none";
    
    }
    if(displayStatus !== "flex"){
        menuDescr.style.display = "flex";   
        

    }

    
   


}


