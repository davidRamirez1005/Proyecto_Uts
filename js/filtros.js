import Crud from "./crud.js"



const teamAsociado = async () => {

    let teamAsociado = document.querySelector("#teamAsociado")
    let crud = new Crud("team")
    let data = await crud.get()
    let cant_team = []
    data.body.forEach(el => {
        cant_team.push(el.id)
        teamAsociado.innerHTML += `
    
        <ul class="notorio" id="team-${el.id}">
            <h2 style="margin: 20px;font-size: 32px;">TEAM: ${el.materia}</h2>
        </ul>
    
    `
    })

    teamAsociado_reclutas(cant_team)
}

const teamAsociado_reclutas = async(cant_team) => {

    let crud = new Crud("reclutas")
    let data = await crud.get()
    
    data.body.forEach((recluta) => {

        cant_team.forEach(id_team => {

            if(recluta.id_Team == id_team){

                document.querySelector(`#team-${id_team}`).innerHTML += `
                
                <div class="card efectOpacity">
                <b>id</b><span>${recluta.id}</span><br>
                <br>
                <b style="color:red">Fecha:  </b><span style="font-size:20px">${recluta.fecha}</span><br>
                <br>
                <b style="color:red"> texto: </b><span style="font-size:20px" >${recluta.texto}</span><br>
                <br>
                <div>
                    <button id="editar.${recluta.id}" style="background-color: rgb(134, 134, 46);" class="btn">Editar</button>
                    <button id="eliminar.${recluta.id}" class="btn">Eliminar</button>
                </div>
                <br>
            </div>
                `

            }
        })
    })
}


teamAsociado()
