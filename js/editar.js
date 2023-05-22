import Crud from "./crud.js"


const editar_reclutas = async(id) => {
            
            const nombre = document.querySelector("#texto2")
            const fecha_Nacimiento = document.querySelector("#fecha2")
            const team = document.querySelector("#selectTeam2")

            let crud = new Crud("reclutas")
            await crud.put({
                "texto": nombre.value,
                "fecha": fecha_Nacimiento.value,
                "id_Team": team.value,
            }, id)
}

const mostrar_editar = async() => {

    document.addEventListener("click", async(e) => {

        if(e.target.id.split(".").includes("editar")){

            let crud = new Crud("reclutas")
            let data = await crud.get_id(e.target.id.split(".")[1])

            const nombre = document.querySelector("#texto2").value = data.body.texto
            const fecha_nacimiento = document.querySelector("#fecha2").value = data.body.fecha
            const team = document.querySelector("#selectTeam2")

            let editar_form = document.querySelector(".editar_form")
            editar_form.style.display = "flex"

            document.querySelector(".editar_form").addEventListener("submit", async(e) => {

                e.preventDefault()
                
                await editar_reclutas(data.body.id)
            })
        }
    })
}

mostrar_editar()