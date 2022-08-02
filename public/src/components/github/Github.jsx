import React, { useEffect, useState } from "react" 
import api from "./api_github"
import './github.css'

const Github = () => {

    const [user, setUser] = useState();

    useEffect(() => {
        api.get("/users/clowdcap")
        .then((response)=>setUser(response.data))
        .catch((err)=>{
            console.error("ops! ocorreu um erro" + err)
        })
    }, [])


  return (
    <section className="github">
        <div className="center">
            <h1>API Github</h1>
            <h3>Consumindo API do Github</h3>
            <ul>
                <li><img src={user?.avatar_url} alt="Foto de Perfil - Github" /></li>
                <li><p>Usuário: <br /><span>{user?.login}</span></p></li>
                <li><p>Biografia: <br /><span>{user?.bio}</span></p></li>
                <li className="botao"><a className="botao_github" href={user?.html_url}>Clique aqui</a></li>
            </ul>
        </div>
    </section>
  )
}

export default Github