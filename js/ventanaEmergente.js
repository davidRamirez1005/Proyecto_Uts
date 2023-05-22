const ventana = document.querySelector(".ventanaEmergente")

const ventana_emergente = (title, estado) => {

    ventana.textContent = title
    
    if(estado == true){
        ventana.style.background = "rgb(37, 117, 37)"
    }else{
        ventana.style.backgroundColor = "rgb(117, 37, 37)"
    }
    
}

// export default ventana_emergente