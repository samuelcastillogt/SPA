import Header from "../../public/template/header.js";
import Home from "../pages/home";
import Crear from "../pages/crear";
import Error404 from "../pages/error404";
import getHash from "../utils/getHash"
import resolveRoutes from "../utils/resolveRoutes"


const routes={
    "/": Home,
    "/hola": Crear
}
const router = async ()=>{
    const header = null || document.getElementById("Header")
    const contenido= null || document.getElementById("content")
    header.innerHTML = await Header()
    
    let hash = getHash()
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : Error404
    content.innerHTML = await render()
}
export default router