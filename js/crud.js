export default class Crud {

    constructor(endpoint){

        this.url_base = "http://localhost:4001/" + endpoint + "/",
        this.configuracion = {
            "headers": { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
             }
        }
    }

    async post(body){

        this.configuracion.method = "POST"
        this.configuracion.body = JSON.stringify(body)
        const result = await fetch(this.url_base, this.configuracion)
        return { "estado": result.status, body: await result.json() }
    }

    async put(body, id){

        this.configuracion.method = "PUT"
        this.configuracion.body = JSON.stringify(body)
        const result = await fetch(this.url_base + id, this.configuracion)
        return { "estado": result.status, body: await result.json() }
    }

    async get(){

        const result = await fetch(this.url_base)
        return { "estado": result.status, body: await result.json() }
    }

    async get_id(id){

        const result = await fetch(this.url_base + "/" + id)
        return { "estado": result.status, body: await result.json() }
    }

    async delete(id){

        this.configuracion.method = "DELETE"
        const result = await fetch(this.url_base + id, this.configuracion)
        return { "estado": result.status, body: await result.json() }
    }
}
