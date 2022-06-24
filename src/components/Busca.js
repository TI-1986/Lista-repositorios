import React, { useEffect, useState } from 'react'

function Busca() {
  const [repositorio, setRepositorio] = useState([])

  useEffect(() => {
    async function buscaRepositorio() {
      const consulta = await fetch('https://api.github.com/users/TI-1986/repos')
      const repositorios = await consulta.json()
      setRepositorio(repositorios)
    }
    buscaRepositorio()
  }, [])

  return (
    <>
      <section>
        <main>
          <span>Meus Repositorios: </span>
          <ul>
            {repositorio.map(repositorio => (
              <li key={repositorio.id}>
                {repositorio.name}, <br />
                {repositorio.description}
              </li>
            ))}
          </ul>
        </main>
      </section>
    </>
  )
}
export default Busca
