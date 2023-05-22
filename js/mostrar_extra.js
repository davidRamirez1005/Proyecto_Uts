import Crud from "./crud.js"

const mostrar_teams = async() => {

    let table_teams = document.querySelector("#table_team")
    let crud = new Crud("team")
    let data = await crud.get()
    
    data.body.forEach(el => {
        
        table_teams.innerHTML += `
    
        <tr>    
            <td>${el.materia}</td>
            <td>${el.semestre}</td>
            <td>${el.corte}</td>
            <td>
                <button class="${el.id}" id="editar_team" style="background-color: rgb(170, 170, 37);color: white">Editar</button>
                <button class="${el.id}" id="eliminar_team" style="background-color: red;color: white"">Eliminar</button>
            </td>
        </tr>
    `
    });
}


const btn = () => {

    document.addEventListener("click", async(e) => {
        
        if(e.target.id == "btn_add_team"){
            
            document.querySelector("#sectionForm").innerHTML += `
            <form class="formFixed">
            <button style="color:black;display:flex;aling-self;end;align-self: end;margin-right: 10%;margin-bottom: 6%;font-weight: bold;">X</button>
            <h1 style="color: white">Agregar</h1>
                <div class="jn">
                <div class="blockInput">
                <label for="">Materia</label>
                <input  type="text" id="materia_team" placeholder="materia">
            </div>
            <div class="blockInput">
                <label for="">Semestre</label>
                <input  type="text" id="semestre_team" placeholder="semestre">
            </div>
            <div class="blockInput">
            <label for="">Corte</label>
            <input  type="text" id="corte_team" placeholder="corte">
        </div>
            <input id="add_team" class="send" type="submit" value="Agregar">
                </div>
                </form>
            `

            agregar_team()
        }

        if(e.target.id == "eliminar_team"){

            let crud = new Crud("team")
            let id = e.target.className
            await crud.delete(id)

        }

        if(e.target.id == "editar_team"){

            let crud = new Crud("team")
            let id = e.target.className
            let data = await crud.get_id(id)

            document.querySelector("#sectionForm").innerHTML += `
            
            <form class="formFixed">
            <button style="color:black;display:flex;aling-self;end;align-self: end;margin-right: 10%;margin-bottom: 6%;font-weight: bold;">X</button>
            <h1 style="color: white">Editar</h1>
                <div class="jn">
                <div class="blockInput">
                <label for="">Materia</label>
                <input  type="text" id="materia_team" value="${data.body.materia}" placeholder="Nombre">
            </div>
            <div class="blockInput">
                <label for="">Semestre</label>
                <input value="${data.body.semestre}"  type="text" id="semestre_team" placeholder="trainer">
            </div>
            <div class="blockInput">
                <label for="">Semestre</label>
                <input value="${data.body.corte}"  type="text" id="corte_team" placeholder="trainer">
            </div>
            <input id="edit_team" class="send" type="submit" value="Editar">
                </div>
                </form>
            `
            editar_team(id)
        }
    })
}

const agregar_team = () => {

    document.querySelector("#add_team").addEventListener("click", async(e) => {

        let crud = new Crud("team")
        await crud.post({
            "materia": document.querySelector("#materia_team").value,
            "semestre": document.querySelector("#semestre_team").value,
            "corte": document.querySelector("#corte_team").value

        })
    })
}


const editar_team = (id) => {

    document.querySelector("#edit_team").addEventListener("click", async(e) => {

        let crud = new Crud("team")
        await crud.put({
            "materia": document.querySelector("#materia_team").value,
            "semestre": document.querySelector("#semestre_team").value,
            "corte": document.querySelector("#corte_team").value
        }, id)
    })
}


btn()
mostrar_teams()