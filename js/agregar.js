import Crud from "./crud.js"

const nombre = document.querySelector("#texto")
const fecha_nacimiento = document.querySelector("#fecha")
const team = document.querySelector("#selectTeam")


const agregar_regluta = async() => {

    let crud = new Crud("reclutas")

    await crud.post(
        {
            "texto": nombre.value,
            "fecha": fecha_nacimiento.value,
            "id_Team": team.value
        }
    )
}

let form = document.querySelector("#agregar")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    agregar_regluta()
    e.stopPropagation()
})