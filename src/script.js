const menuButton = document.querySelector(".menu_button");


menuButton.addEventListener("click", showMenu)

function showMenu(){

    const menuDescr = document.querySelector(".header_container_menu");
    const buscar = document.getElementById("divBusca");
    const carrinhoCompras = document.getElementById("carrinho");
    let displayStatus = menuDescr.style.display;
    if( displayStatus === "flex"){
        menuDescr.style.display = "none";
        menuButton.style.backgroundColor = "#FFFFFF";
        buscar.style.display = "block";
        carrinhoCompras.style.display = "block";
        
    
    }
    if(displayStatus !== "flex"){
        menuDescr.style.display = "flex";   
        menuButton.style.backgroundColor = "#2E2E2E";
        buscar.style.display = "none";
        carrinhoCompras.style.display = "none";
   

        

    }

    
   


}


