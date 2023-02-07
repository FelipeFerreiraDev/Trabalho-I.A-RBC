import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
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
    temp: string,
    calc: number
}
interface Peso {
    peso: {
        peso: number,
        atributo: string
    }[] | Array<any>;
}
interface similaridadeLocal {
    area_damaged_sl: number,
    canker_lesion_sl: number,
    crop_sl: number,
    date_sl: number,
    external_decay_sl: number,
    fruiting_bodies_sl: number,
    fruit_pods_sl: number,
    fruits_sl: number,
    germination_sl: number,
    hail_sl: number,
    int_discolor_sl: number,
    leaf_malf_sl: number,
    leaf_mild_sl: number,
    leaf_shread_sl: number,
    leaf_spots_size_sl: number,
    leaf_spots_halo_sl: number,
    leaf_spots_marg_sl: number,
    leaves_sl: number,
    lodging_sl: number,
    mold_growth_sl: number,
    mycelium_sl: number,
    plant_growth_sl: number,
    plant_stand_sl: number,
    precip_sl: number,
    roots_sl: number,
    sclerotia_sl: number,
    seed_sl: number,
    seed_discolor_sl: number,
    seed_size_sl: number,
    seed_tmt_sl: number,
    severity_sl: number,
    shriveling_sl: number,
    stem_sl: number,
    stem_cankers_sl: number,
    temp_sl: number,
}

export function Candidatos() {
    const [casosProblema, setCasosProblema] = useState<CasosProblema>();
    const [casoSelecionado, setCasoSelecionado] = useState<CasosProblema[]>();
    const cnf = localStorage.getItem('cnf');
    const cnfFloat = parseFloat(cnf || '0');
    const [similaridadeLocal, setSimilaridadeLocal] = useState<similaridadeLocal[]>();
    const [similaridadeGlobal, setSimilaridadeGlobal] = useState<number[]>([]);
    const [peso, setPeso] = useState<Peso>();

    useEffect(() => {
        api.get('/cases/last').then(response => {
            setCasosProblema(response.data);
        })

        api.post(`/cases/calc/${casosProblema?.case}`).then(response => {
            setSimilaridadeLocal(response.data);
        })

    }, [])

    useEffect(() => {
        api.get('/cases').then(response => {
            setCasoSelecionado(response.data);
        })
    }, [])

    useEffect(() => {
        api.get('/all/peso').then(response => {
            setPeso(response.data);
        })
    }, [])

    useEffect(() => {
        similaridadeLocal?.map((item) => {
            setSimilaridadeGlobal(x => [...x, ((item.area_damaged_sl * peso?.peso[0].peso) + (item.canker_lesion_sl * peso?.peso[1].peso) + (item.crop_sl * peso?.peso[2].peso) + (item.date_sl * peso?.peso[3].peso) + (item.external_decay_sl * peso?.peso[4].peso) + (item.fruiting_bodies_sl * peso?.peso[5].peso) + (item.fruit_pods_sl * peso?.peso[6].peso) + (item.fruits_sl * peso?.peso[7].peso) + (item.germination_sl * peso?.peso[8].peso) + (item.hail_sl * peso?.peso[9].peso) + (item.int_discolor_sl * peso?.peso[10].peso) + (item.leaf_malf_sl * peso?.peso[11].peso) + (item.leaf_mild_sl * peso?.peso[12].peso) + (item.leaf_shread_sl * peso?.peso[13].peso) + (item.leaf_spots_size_sl * peso?.peso[14].peso) + (item.leaf_spots_halo_sl * peso?.peso[15].peso) + (item.leaf_spots_marg_sl * peso?.peso[16].peso) + (item.leaves_sl * peso?.peso[17].peso) + (item.lodging_sl * peso?.peso[18].peso) + (item.mold_growth_sl * peso?.peso[19].peso) + (item.mycelium_sl * peso?.peso[20].peso) + (item.plant_growth_sl * peso?.peso[21].peso) + (item.plant_stand_sl * peso?.peso[22].peso) + (item.precip_sl * peso?.peso[23].peso) + (item.roots_sl * peso?.peso[24].peso) + (item.sclerotia_sl * peso?.peso[25].peso) + (item.seed_sl * peso?.peso[26].peso) + (item.seed_discolor_sl * peso?.peso[27].peso) + (item.seed_size_sl * peso?.peso[28].peso) + (item.seed_tmt_sl * peso?.peso[29].peso) + (item.severity_sl * peso?.peso[30].peso) + (item.shriveling_sl * peso?.peso[31].peso) + (item.stem_sl * peso?.peso[32].peso) + (item.stem_cankers_sl * peso?.peso[33].peso) + (item.temp_sl * peso?.peso[34].peso)) / 214])
        }
        )
    }, [similaridadeLocal, peso])


    const [desc_doenca, setDesc_doenca] = useState<string>()
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const data = {
            desc_doenca,
        }
        try {
            const response = await api.post('/cases/update', data)
            toast.success("Selecionado com sucesso!")
        } catch (error) {
            toast.error("Erro ao selecionar caso!")
        }
    }

    return (

        <section className="w-full grid grid-cols-3 justify-items-center bg-gray-150">

            <div className="h-2/4 flex flex-col col-span-2 w-full">
                <h2 className="mb-0">Caso problema</h2>
                <h4>CASO: </h4>
                <div className="bg-[#f5f5f5] rounded-md shadow-2xl">


                    <div className="grid  grid-cols-2 gap-x-2 gap-y-2 h-1/5 m-2 text-sm">
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
                <div className="h-screen flex justify-end">
                    <Link className="flex items-center justify-center bg-gray-300 duration-500 w-36 h-14 mt-4  rounded-md text-white py-3 hover:bg-gray-400 transition-all" to='/resultados'>Próximo</Link>
                </div>
            </div>






            <form className="h-screen w-11/12" onSubmit={handleSubmit} >

                <div className="h-full w-full">
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
                        {casoSelecionado?.map((caso) => {
                            if (cnfFloat <= similaridadeGlobal[caso.case] * 100) {
                                return (
                                    <tbody>
                                        <tr>
                                            <td>
                                                {caso.case}

                                            </td>

                                            <td>
                                                <p>{caso.desc_doenca}</p>
                                            </td>
                                            <td>
                                                <p>{similaridadeGlobal[caso.case] * 100}%</p>
                                            </td>
                                            <td>
                                                <button onClick={() => { setDesc_doenca(caso.desc_doenca), localStorage.setItem('caseSelected', caso.case.toString()) }} type="submit" className="w-24"> Selecionar </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            }
                        })
                        }
                    </table>


                </div>
            </form>
            <ToastContainer />
        </section>



    )


}