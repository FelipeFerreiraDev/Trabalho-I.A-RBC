import { useState } from "react"

export function Casos() {
  const [casosProblema, setCasosProblema] = useState<[]>([])
  return (
    <section className="h-scree">
      <div>
        <h1>CBR | Preencha com o caso problema</h1>
      </div>
      <form className="grid grid-cols-2 gap-x-56 gap-y-5 h-full shadow-2xl bg-[#f5f5f5] p-5 rounded-md">
        <div className="">
          <label>Área danificada</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Área danificada</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Área danificada</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Área danificada</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
      </form>
      <div className="flex w-24 mt-4">
        <button type="submit" className="bg-gray-300 duration-500">Enviar</button>
      </div>
    </section>
  )
}