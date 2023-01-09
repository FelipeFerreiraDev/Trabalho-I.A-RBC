export function Candidatos() {
  return (
    <section className="grid justify-center">
      <h1 >Lista de Casos Candidatos</h1>
      <div className="h-screen">
        <h3>CNF: </h3>
        <table className="shadow">
          <thead>
            <tr>
              <th>ID</th>
              <th>Condição</th>
              <th>CNF</th>
              <th>Selecionar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-10">
                0
              </td>
              <td className="p-10">
                <p>condição do back</p>
              </td>
              <td className="p-10">
                <p>100%</p>
              </td>
              <td className="p-10">
                <button className="w-24"> Selecionar </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}