import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../../services"

interface CasosProblema {
    "desc_doenca": [
        {
            "desc_doenca": string,
            "peso": number
        }
    ],
    "area_damaged": [
        {
            "area_damaged": string,
            "peso": number
        }
    ],
    "canker_lesion": [
        {
            "canker_lesion": string,
            "peso": number
        }
    ],
    "crop_hist": [
        {
            "crop_hist": string,
            "peso": number
        }
    ],
    "date": [
        {
            "date": string,
            "peso": number
        }

    ],
    "external_decay": [
        {
            "external_decay": string,
            "peso": number
        }

    ],
    "fruits_spots": [
        {
            "fruits_spots": string,
            "peso": number
        }
    ],
    "fruiting_bodies": [
        {
            "fruiting_bodies": string,
            "peso": number
        }
    ],
    "fruit_pods": [
        {
            "fruit_pods": string,
            "peso": number
        }
    ],
    "germination": [
        {
            "germination": string,
            "peso": number
        }
    ],
    "hail": [
        {
            "hail": string,
            "peso": number
        }
    ],
    "int_discolor": [
        {
            "int_discolor": string,
            "peso": number
        }
    ],
    "leaf_malf": [
        {
            "leaf_malf": string,
            "peso": number
        }
    ],
    "leaf_mild": [
        {
            "leaf_mild": string,
            "peso": number
        }
    ],
    "leaf_shread": [
        {
            "leaf_shread": string,
            "peso": number
        }
    ],
    "leafspots_halo": [
        {
            "leafspots_halo": string,
            "peso": number
        }
    ],
    "leafspots_size": [
        {
            "leafspots_size": string,
            "peso": number
        }
    ],
    "leafspots_marg": [
        {
            "leafspots_marg": string,
            "peso": number
        }
    ],
    "leaves": [
        {
            "leaves": string,
            "peso": number
        }
    ],
    "lodging": [
        {
            "lodging": string,
            "peso": number
        }
    ],
    "mold_growth": [
        {
            "mold_growth": string,
            "peso": number
        }
    ],
    "mycelium": [
        {
            "mycelium": string,
            "peso": number
        }
    ],
    "plant_growth": [
        {
            "plant_growth": string,
            "peso": number
        }
    ],
    "plant_stand": [
        {
            "plant_stand": string,
            "peso": number
        }
    ],
    "precip": [
        {
            "precip": string,
            "peso": number
        }
    ],
    "roots": [
        {
            "roots": string,
            "peso": number
        }
    ],
    "sclerotia": [
        {
            "sclerotia": string,
            "peso": number
        }
    ],
    "seed": [
        {
            "seed": string,
            "peso": number
        }
    ],
    "seed_discolor": [
        {
            "seed_discolor": string,
            "peso": number
        }
    ],
    "seed_size": [
        {
            "seed_size": string,
            "peso": number
        }
    ],
    "seed_tmt": [
        {
            "seed_tmt": string,
            "peso": number
        }
    ],
    "severity": [
        {
            "severity": string,
            "peso": number
        }
    ],
    "shriveling": [
        {
            "shriveling": string,
            "peso": number
        }
    ],
    "stem": [
        {
            "stem": string,
            "peso": number
        }
    ],
    "stem_cankers": [
        {
            "stem_cankers": string,
            "peso": number
        }
    ],
    "temp": [
        {
            "temp": string,
            "peso": number
        }
    ]
}

export function Casos() {
    const desc_doenca = ""
    const [cnf, setCnf] = useState<string>('')
    localStorage.setItem('cnf', cnf)
    const [fruiting_bodies, setFruitingBodies] = useState<string>()
    const [fruit_pods, setFruitPods] = useState<string>()
    const [leaf_malf, setLeafMalf] = useState<string>()
    const [leaf_mild, setLeafMild] = useState<string>()
    const [leaf_shread, setLeafShread] = useState<string>()
    const [casosProblema, setCasosProblema] = useState<CasosProblema>();
    const [area_damaged, setAreaDamaged] = useState<string>()
    const [canker_lesion, setCankerLesion] = useState<string>()
    const [crop_hist, setCropHist] = useState<string>()
    const [date, setDate] = useState<string>();
    const [external_decay, setExternalDecay] = useState<string>()
    const [fruits_spots, setFruitsSpots] = useState<string>()
    const [germination, setGermination] = useState<string>()
    const [hail, setHail] = useState<string>()
    const [int_discolor, setIntDiscolor] = useState<string>()
    const [leafspots_halo, setLeafspotsHalo] = useState<string>()
    const [leafspots_size, setLeafspotsSize] = useState<string>()
    const [leafspots_marg, setLeafspotsMarg] = useState<string>()
    const [leaves, setLeaves] = useState<string>()
    const [lodging, setLodging] = useState<string>()
    const [mold_growth, setMoldGrowth] = useState<string>()
    const [mycelium, setMycelium] = useState<string>()
    const [plant_growth, setPlantGrowth] = useState<string>()
    const [plant_stand, setPlantStand] = useState<string>()
    const [precip, setPrecip] = useState<string>()
    const [roots, setRoots] = useState<string>()
    const [sclerotia, setSclerotia] = useState<string>()
    const [seed, setSeed] = useState<string>()
    const [seed_discolor, setSeedDiscolor] = useState<string>()
    const [seed_size, setSeedSize] = useState<string>()
    const [seed_tmt, setSeedTmt] = useState<string>()
    const [severity, setSeverity] = useState<string>()
    const [shriveling, setShriveling] = useState<string>()
    const [stem, setStem] = useState<string>()
    const [stem_cankers, setStemCankers] = useState<string>()
    const [temp, setTemp] = useState<string>()

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const data = {
            desc_doenca,
            area_damaged,
            canker_lesion,
            crop_hist,
            date,
            external_decay,
            fruits_spots,
            fruiting_bodies,
            fruit_pods,
            germination,
            hail,
            int_discolor,
            leaf_malf,
            leaf_mild,
            leaf_shread,
            leafspots_halo,
            leafspots_size,
            leafspots_marg,
            leaves,
            lodging,
            mold_growth,
            mycelium,
            plant_growth,
            plant_stand,
            precip,
            roots,
            sclerotia,
            seed,
            seed_discolor,
            seed_size,
            seed_tmt,
            severity,
            shriveling,
            stem,
            stem_cankers,
            temp
        }
        console.log(localStorage.getItem('cnf'))
        try {
            const response = await api.post('/cases', data)
            toast.success("Cadastrado com sucesso!")
        } catch (error) {
            toast.error("Erro ao cadastrar caso!")
        }
    }

    useEffect(() => {
        api.get('/all').then(response => {
            setCasosProblema(response.data);
        })
    }, [])

    return (
        <section>
            <ToastContainer />
            <h1>CBR | Preencha com o caso problema</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-56 gap-y-5 h-full shadow-2xl bg-[#f5f5f5] p-5 rounded-md">
                <div>
                    <label>Área danificada</label>
                    <select name="area_damaged" id="area_damaged" onChange={(e) => setAreaDamaged(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.area_damaged.map((area) => (
                            <option key={area.area_damaged} value={area.area_damaged}>{area.area_damaged}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Folhagem leve</label>
                    <select name="leaf_mild" id="leaf_mild" onChange={(e) => setLeafMild(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.leaf_mild.map((leaf_mild) => (
                            <option key={leaf_mild.leaf_mild} value={leaf_mild.leaf_mild}>{leaf_mild.leaf_mild}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Mal formação na folha</label>
                    <select name="leaf_malf" id="leaf_malf" onChange={(e) => setLeafMalf(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.leaf_malf.map((leaf_malf) => (
                            <option key={leaf_malf.leaf_malf} value={leaf_malf.leaf_malf}>{leaf_malf.leaf_malf}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Vagens de fruta</label>
                    <select name="fruit_pods" id="fruit_pods" onChange={(e) => setFruitPods(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.fruit_pods.map((fruit_pods) => (
                            <option key={fruit_pods.fruit_pods} value={fruit_pods.fruit_pods}>{fruit_pods.fruit_pods}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Manchas na fruta</label>
                    <select name="fruiting_bodies" id="fruiting_bodies" onChange={(e) => setFruitingBodies(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.fruiting_bodies.map((fruiting_bodies) => (
                            <option key={fruiting_bodies.fruiting_bodies} value={fruiting_bodies.fruiting_bodies}>{fruiting_bodies.fruiting_bodies}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Lesão na folha</label>
                    <select name="canker_lesion" id="canker_lesion" onChange={(e) => setCankerLesion(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.canker_lesion.map((canker) => (
                            <option key={canker.canker_lesion} value={canker.canker_lesion}>{canker.canker_lesion}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Histórico da colheita</label>
                    <select name="crop_hist" id="crop_hist" onChange={(e) => setCropHist(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.crop_hist.map((crop) => (
                            <option key={crop.crop_hist} value={crop.crop_hist}>{crop.crop_hist}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Data da colheita</label>
                    <select name="date" id="date" onChange={(e) => setDate(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.date.map((date) => (
                            <option key={date.date} value={date.date}>{date.date}</option>
                        ))}
                    </select>
                </div>
                <div className="">
                    <label>Decaimento externo</label>
                    <select name="external_decay" id="external_decay" onChange={(e) => setExternalDecay(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.external_decay.map((external_decay) => (
                            <option key={external_decay.external_decay} value={external_decay.external_decay}>{external_decay.external_decay}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Manchas na fruta</label>
                    <select name="fruits_spots" id="fruits_spots" onChange={(e) => setFruitsSpots(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.fruits_spots.map((fruits_spots) => (
                            <option key={fruits_spots.fruits_spots} value={fruits_spots.fruits_spots}>{fruits_spots.fruits_spots}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Taxa de germinação</label>
                    <select name="germination" id="germination" onChange={(e) => setGermination(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.germination.map((germination) => (
                            <option key={germination.germination} value={germination.germination}>{germination.germination}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Granizo</label>
                    <select name="hail" id="hail" onChange={(e) => setHail(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.hail.map((hail) => (
                            <option key={hail.hail} value={hail.hail}>{hail.hail}</option>
                        ))}
                    </select>
                </div>
                <div className="">
                    <label>Descoloramento</label>
                    <select name="int_discolor" id="int_discolor" onChange={(e) => setIntDiscolor(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.int_discolor.map((int_discolor) => (
                            <option key={int_discolor.int_discolor} value={int_discolor.int_discolor}>{int_discolor.int_discolor}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Folhagem</label>
                    <select name="leaf_shread" id="leaf_shread" onChange={(e) => setLeafShread(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.leaf_shread.map((leaf_shread) => (
                            <option key={leaf_shread.leaf_shread} value={leaf_shread.leaf_shread}>{leaf_shread.leaf_shread}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Manchas auréolas nas folhagem </label>
                    <select name="leafspots_halo" id="leafspots_halo" onChange={(e) => setLeafspotsHalo(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.leafspots_halo.map((leafspots_halo) => (
                            <option key={leafspots_halo.leafspots_halo} value={leafspots_halo.leafspots_halo}>{leafspots_halo.leafspots_halo}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Tamanho das manchas</label>
                    <select name="leafspots_size" id="leafspots_size" onChange={(e) => setLeafspotsSize(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.leafspots_size.map((leafspots_size) => (
                            <option key={leafspots_size.leafspots_size} value={leafspots_size.leafspots_size}>{leafspots_size.leafspots_size}</option>
                        ))}
                    </select>
                </div>
                <div className="">
                    <label>Margem das manchas</label>
                    <select name="leafspots_marg" id="leafspots_marg" onChange={(e) => setLeafspotsMarg(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.leafspots_marg.map((leafspots_marg) => (
                            <option key={leafspots_marg.leafspots_marg} value={leafspots_marg.leafspots_marg}>{leafspots_marg.leafspots_marg}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Folhas</label>
                    <select name="leaves" id="leaves" onChange={(e) => setLeaves(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.leaves.map((leaves) => (
                            <option key={leaves.leaves} value={leaves.leaves}>{leaves.leaves}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Alojamento</label>
                    <select name="lodging" id="lodging" onChange={(e) => setLodging(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.lodging.map((lodging) => (
                            <option key={lodging.lodging} value={lodging.lodging}>{lodging.lodging}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Crescimento de mofo</label>
                    <select name="mold_growth" id="mold_growth" onChange={(e) => setMoldGrowth(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.mold_growth.map((mold_growth) => (
                            <option key={mold_growth.mold_growth} value={mold_growth.mold_growth}>{mold_growth.mold_growth}</option>
                        ))}
                    </select>
                </div>
                <div className="">
                    <label>Crescimento da planta</label>
                    <select name="plant_growth" id="plant_growth" onChange={(e) => setPlantGrowth(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.plant_growth.map((plant_growth) => (
                            <option key={plant_growth.plant_growth} value={plant_growth.plant_growth}>{plant_growth.plant_growth}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Micélio</label>
                    <select name="mycelium" id="mycelium" onChange={(e) => setMycelium(e.target.value)} >
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.mycelium.map((mycelium) => (
                            <option key={mycelium.mycelium} value={mycelium.mycelium}>{mycelium.mycelium}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Suporte para planta</label>
                    <select name="plant_stand" id="plant_stand" onChange={(e) => setPlantStand(e.target.value)} >
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.plant_stand.map((plant_stand) => (
                            <option key={plant_stand.plant_stand} value={plant_stand.plant_stand}>{plant_stand.plant_stand}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Precipitação</label>
                    <select name="precip" id="precip" onChange={(e) => setPrecip(e.target.value)} >
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.precip.map((precip) => (
                            <option key={precip.precip} value={precip.precip}>{precip.precip}</option>
                        ))}
                    </select>
                </div>
                <div className="">
                    <label>Raizes</label>
                    <select name="roots" id="roots" onChange={(e) => setRoots(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.roots.map((roots) => (
                            <option key={roots.roots} value={roots.roots}>{roots.roots}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Escleródios</label>
                    <select name="sclerotia" id="sclerotia" onChange={(e) => setSclerotia(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.sclerotia.map((sclerotia) => (
                            <option key={sclerotia.sclerotia} value={sclerotia.sclerotia}>{sclerotia.sclerotia}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Sementes</label>
                    <select name="seed" id="seed" onChange={(e) => setSeed(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.seed.map((seed) => (
                            <option key={seed.seed} value={seed.seed}>{seed.seed}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Descoloração das sementes</label>
                    <select name="seed_discolor" id="seed_discolor" onChange={(e) => setSeedDiscolor(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.seed_discolor.map((seed_discolor) => (
                            <option key={seed_discolor.seed_discolor} value={seed_discolor.seed_discolor}>{seed_discolor.seed_discolor}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Tamanho das sementes</label>
                    <select name="seed_size" id="seed_size" onChange={(e) => setSeedSize(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.seed_size.map((seed_size) => (
                            <option key={seed_size.seed_size} value={seed_size.seed_size}>{seed_size.seed_size}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Aplicação nas sementes</label>
                    <select name="seed_tmt" id="seed_tmt" onChange={(e) => setSeedTmt(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.seed_tmt.map((seed_tmt) => (
                            <option key={seed_tmt.seed_tmt} value={seed_tmt.seed_tmt}>{seed_tmt.seed_tmt}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Severidade</label>
                    <select name="severity" id="severity" onChange={(e) => setSeverity(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.severity.map((severity) => (
                            <option key={severity.severity} value={severity.severity}>{severity.severity}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Grau de murchamento</label>
                    <select name="shriveling" id="shriveling" onChange={(e) => setShriveling(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.shriveling.map((shriveling) => (
                            <option key={shriveling.shriveling} value={shriveling.shriveling}>{shriveling.shriveling}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Tronco</label>
                    <select name="stem" id="stem" onChange={(e) => setStem(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.stem.map((stem) => (
                            <option key={stem.stem} value={stem.stem}>{stem.stem}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Doença no tronco</label>
                    <select name="stem_cankers" id="stem_cankers" onChange={(e) => setStemCankers(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.stem_cankers.map((stem_cankers) => (
                            <option key={stem_cankers.stem_cankers} value={stem_cankers.stem_cankers}>{stem_cankers.stem_cankers}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Temperatura</label>
                    <select name="temp" id="temp" onChange={(e) => setTemp(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema?.temp.map((temp) => (
                            <option key={temp.temp} value={temp.temp}>{temp.temp}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>CNF</label>
                    <select  onChange={(e) => setCnf(e.target.value)}>
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
                <div className="flex w-full mt-4 items-center start gap-4">
                    <button type="submit" className="bg-gray-300 duration-500">Enviar</button>
                    <Link className="flex items-center justify-center bg-gray-300 duration-500 w-36  rounded-md text-white py-3 hover:bg-gray-400 transition-all" to={"/candidatos"}>Próximo</Link>
                </div>
            </form>
        </section>
    )
}