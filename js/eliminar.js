import Crud from "./crud.js"


const eliminar_recluta = async(id) => {

    document.addEventListener("click", (e) => {

        if(e.target.id.split(".").includes("eliminar")){
            
            let crud = new Crud("reclutas")
            crud.delete(e.target.id.split(".")[1])
        }
    })
}

eliminar_recluta()