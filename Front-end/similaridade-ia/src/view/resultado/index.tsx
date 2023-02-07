import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../../services";

interface CasosProblema {
    case: number,
    desc_doenca: string,
    area_damaged: string,
    canker_lesion: string,
    crop_hist: string,
    date: string,
    external_decay: string,
    fruits_spots: string,
    fruiting_bodies: string,
    fruit_pods: string,
    germination: string,
    hail: string,
    int_discolor: string,
    leaf_malf: string,
    leaf_mild: string,
    leaf_shread: string,
    leafspots_halo: string,
    leafspots_size: string,
    leafspots_marg: string,
    leaves: string,
    lodging: string,
    mold_growth: string,
    mycelium: string,
    plant_growth: string,
    plant_stand: string,
    precip: string,
    roots: string,
    sclerotia: string,
    seed: string,
    seed_discolor: string,
    seed_size: string,
    seed_tmt: string,
    severity: string,
    shriveling: string,
    stem: string,
    stem_cankers: string,
    temp: string
}

export function Resultado() {
    const [casosProblema, setCasosProblema] = useState<CasosProblema>();
    const [resultado, setResultado] = useState<CasosProblema>();

    console.log(resultado);

    useEffect(() => {
        api.get('/cases/last').then(response => {
            setCasosProblema(response.data);
        })
    }, [])

    useEffect(() => {
        api.get(`/cases/${localStorage.getItem('caseSelected')}`).then(response => {
            setResultado(response.data);
        })
    }, [])


    const handleToast = () => {
        toast.success('Finalizado!');
    }


    return (
        <section >
            <ToastContainer />
            <div className="grid grid-cols-2 justify-items-center gap-4 ng-gray-150">
                <div className="h-full flex flex-col w-full">
                    <h2 className="mb-0">Caso problema</h2>
                    <h4>CASO: {casosProblema?.case}</h4>
                    <div className="bg-[#f5f5f5] rounded-md shadow-2xl">


                        <div className="grid  grid-cols-2 gap-x-2 gap-y-2 h-1/5 m-2 text-xs">
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Area danificada</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.area_damaged}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Lesão na folha</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.canker_lesion}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Histórico da colheita</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.crop_hist}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Data da colheita</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.date}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Decaimento externo</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.external_decay}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Manchas na fruta</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.fruits_spots}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Taxa de germinação</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.germination}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Granizo</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.hail}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Descoloramento</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.int_discolor}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Folhagem</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.leaf_shread}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Manchas auréolas nas folhagem</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.leafspots_halo}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Tamanho das manchas</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.leafspots_size}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Margem das manchas</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.leafspots_marg}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Alojamento</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.lodging}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Crescimento de mofo</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.mold_growth}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Crescimento da planta</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.plant_growth}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Micélio</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.mycelium}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Suporte para planta</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.plant_stand}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Preciptação</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.precip}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Raízes</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.roots}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Escleródios</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.sclerotia}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Sementes</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.seed}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Descoloração das sementes</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.seed_discolor}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Tamanho das sementes</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.seed_size}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Severidade</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.severity}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Grau de murchamento</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.shriveling}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Tronco</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.stem}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Doença no tronco</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.stem_cankers}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Temperatura</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{casosProblema?.temp}</label>
                            </div>
                        </div>

                    </div>

                    <div>

                    </div>
                </div>

                <div className="h-full flex flex-col w-full">
                    <h2 className="mb-0">Caso selecionado</h2>
                    <h4>CASO: {resultado?.case}</h4>
                    <div className="bg-[#f5f5f5] rounded-md shadow-2xl">


                        <div className="grid  grid-cols-2 gap-x-2 gap-y-2 h-1/5 m-2 text-xs">
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Area danificada</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.area_damaged}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Lesão na folha</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.canker_lesion}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Histórico da colheita</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.crop_hist}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Data da colheita</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.date}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Decaimento externo</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.external_decay}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Manchas na fruta</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.fruits_spots}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Taxa de germinação</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.germination}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Granizo</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.hail}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Descoloramento</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.int_discolor}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Folhagem</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.leaf_shread}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Manchas auréolas nas folhagem</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.leafspots_halo}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Tamanho das manchas</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.leafspots_size}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Margem das manchas</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.leafspots_marg}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Alojamento</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.lodging}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Crescimento de mofo</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.mold_growth}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Crescimento da planta</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.plant_growth}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Micélio</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.mycelium}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Suporte para planta</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.plant_stand}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Preciptação</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.precip}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Raízes</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.roots}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Escleródios</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.sclerotia}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Sementes</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.seed}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Descoloração das sementes</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.seed_discolor}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Tamanho das sementes</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.seed_size}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Severidade</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.severity}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Grau de murchamento</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.shriveling}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Tronco</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.stem}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Doença no tronco</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.stem_cankers}</label>
                            </div>
                            <div className="px-1 border-solid border-2 border-[#cccccc]  rounded flex">
                                <label className="w-3/5">Temperatura</label>
                                <label>&#129046;</label>
                                <label className="flex w-2/4 justify-end">{resultado?.temp}</label>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <div className="mt-6 h-36 w-full bg-[#f5f5f5] rounded-md shadow-2xl brightness-100 grid grid-cols-5 justify-center items-center">
                <div className="col-span-1 flex items-center justify-center">
                    <h1>Solução: </h1>
                </div>
                <div className="col-span-4 flex items-center justify-center">
                    <p className="text-5xl">{resultado?.desc_doenca}</p>
                </div>
            </div>

            <div className="w-full flex items-center justify-end gap-5 my-4">
                <Link to='/candidatos' className="flex items-center justify-center bg-gray-300 duration-500 w-36  rounded-md text-white py-3 hover:bg-gray-400 transition-all"> Voltar</Link>
                <button onClick={handleToast} className="flex items-center justify-center bg-gray-300 duration-500 w-36  rounded-md text-white py-3 hover:bg-gray-400 transition-all">Finalizar</button>
                <Link to='/casos' className="flex items-center justify-center bg-gray-300 duration-500 w-48  rounded-md text-white py-3 hover:bg-gray-400 transition-all">Cadastrar Novo Caso</Link>
            </div>
        </section>
    )
}