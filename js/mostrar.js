import Crud from "./crud.js"
const $content_cards = document.querySelector(".cards")

const show_list_recluta = async() => {
    let crud = new Crud("reclutas")
    let data = await crud.get()
    
    if(data.body.length == 0){
        $content_cards.innerHTML = "<div style='font-size: 20px;' class='title efectOpacity'>No hay Materia registrada</div>"
    }else{

        let crudTeam = new Crud("team")

        data.body.forEach(async(el) => {
            
            let teamData = await crudTeam.get_id(el.id_Team)

            $content_cards.innerHTML += `
    
            <div class="card efectOpacity">
                <b>id</b><span>${el.id}</span><br>
                <b>Texto: </b><span>${el.texto}</span><br>
                <b>Fecha: </b><span>${el.fecha}</span><br>
                <b>Team</b><span>${teamData.body.materia}</span> <br>
                <div>
                    <button id="editar.${el.id}" style="background-color: rgb(134, 134, 46);" class="btn">Editar</button>
                    <button id="eliminar.${el.id}" class="btn">Eliminar</button>
                </div>
            </div>
            
            `
        });
    }
}

const select_show_team = async() => {

    let selectTeam = document.querySelector("#selectTeam")
    let crud = new Crud("team")
    let data = await crud.get()
    data.body.forEach(el => {

        selectTeam.innerHTML += `

            <option value="${el.id}" >${el.materia}</option>
        
        `
    })
}


const select_show_team_edit = async() => {

    let selectTeam = document.querySelector("#selectTeam2")
    let crud = new Crud("team")
    let data = await crud.get()
    data.body.forEach(el => {

        selectTeam.innerHTML += `

            <option value="${el.id}" >${el.materia}</option>
        
        `
    })
}




select_show_team()
show_list_recluta()
select_show_team_edit()

