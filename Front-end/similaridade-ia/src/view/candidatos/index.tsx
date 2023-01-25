import { useEffect, useState } from "react";
import api from "../../services";

interface CasosProblema {
  area_damaged: string;
}


export function Candidatos() {
  const [casosProblema, setCasosProblema] = useState<CasosProblema>();



  useEffect(() => {
    api.get('/cases/last').then(response => {
        setCasosProblema(response.data);
    })
}, [])
  return (
    <section className="w-full grid grid-cols-3 justify-items-center bg-gray-150">
      <div className="h-screen flex flex-col col-span-2 w-full">
        <h2 className="mb-0">Caso problema</h2>
        <h4>CASO: </h4>
        <div className="bg-[#f5f5f5] rounded-md shadow-2xl">
          
              
                <div className="grid  grid-cols-2 gap-x-2 gap-y-2 h-1/5 m-2 text-sm">
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Area danificada</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">{casosProblema?.area_damaged.map((casosProblema) =>(
                <div>{casosProblema.area_damaged}</div>
              ))}</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Lesão na folha</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Histórico da colheita</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Data da colheita</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Decaimento externo</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Manchas na fruta</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Taxa de germinação</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Granizo</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Descoloramento</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Folhagem</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Manchas auréolas nas folhagem</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Tamanho das manchas</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Margem das manchas</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Alojamento</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Crescimento de mofo</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Crescimento da planta</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Micélio</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Suporte para planta</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Preciptação</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Raízes</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Escleródios</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Sementes</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Descoloração das sementes</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Tamanho das sementes</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Severidade</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Grão de murchamento</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Tronco</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Doença no tronco</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
              <label className="w-3/5">Temperatura</label>
              <label>&#129046;</label>
              <label className="flex w-2/4 justify-end">glauco</label>
            </div>
          </div>

        </div>

        <div>

        </div>
      </div>

      <div className="h-screen w-11/12">
        <h2 >Lista de Casos Candidatos</h2>
        <h4>CNF: </h4>
        <table className="w-full bg-[#f5f5f5] rounded-md">
          <thead>
            <tr>
              <th>Caso</th>
              <th>Descrição</th>
              <th>CNF</th>
              <th>Selecionar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                0
              </td>
              <td>
                <p>Descrição do back</p>
              </td>
              <td>
                <p>100%</p>
              </td>
              <td>
                <button className="w-24"> Selecionar </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}