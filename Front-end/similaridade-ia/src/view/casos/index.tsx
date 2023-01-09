import { useState } from "react"

export function Casos() {
  const [casosProblema, setCasosProblema] = useState<[]>([])
  return (
    <section>
      <h1>CBR | Preencha com o caso problema</h1>
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
          <label>Lesão na folha</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Histórico da colheita</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Data da colheita</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div className="">
          <label>Decaimento externo</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Manchas na fruta</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Taxa de germinação</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Granizo</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div className="">
          <label>Descoloramento</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Folhagem</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Manchas auréolas nas folhagem </label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Tamanho das manchas</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div className="">
          <label>Margem das manchas</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Folhas</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Alojamento</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Crescimento de mofo</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div className="">
          <label>Crescimento da planta</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Micélio</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Suporte para planta</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Precipitação</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div className="">
          <label>Raizes</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Escleródios</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Sementes</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Descoloração das sementes</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Tamanho das sementes</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Aplicação nas sementes</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Severidade</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Grao de murchamento</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Tronco</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Doença no tronco</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Temperatura</label>
          <select className="">
            <option value="">Selecione o caso problema</option>
            {casosProblema.map((casoProblema) => (
              <option value={casoProblema}>{casoProblema}</option>
            ))}
          </select>
        </div>
        <div>
          <label>CNF</label>
          <select>
            <option value="0">0%</option>
            <option value="10">10%</option>
            <option value="20">20%</option>
            <option value="30">30%</option>
            <option value="40">40%</option>
            <option value="50">50%</option>
            <option value="60">60%</option>
            <option value="70">70%</option>
            <option value="80">80%</option>
            <option value="90">90%</option>
            <option value="100">100%</option>
          </select>
        </div>
      </form>
      <div className="flex w-24 mt-4">
        <button type="submit" className="bg-gray-300 duration-500">Enviar</button>
      </div>
    </section>
  )
}