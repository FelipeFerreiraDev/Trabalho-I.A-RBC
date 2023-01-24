import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import api from "../../services"

interface CasosProblema {
    "desc_doenca": string,
    "area_damaged": string,
    "canker_lesion": string,
    "crop_hist": string,
    "date": string,
    "external_decay": string,
    "fruits_spots": string,
    "fruiting_bodies": string,
    "fruit_pods": string,
    "germination": string,
    "hail": string,
    "int_discolor": string,
    "leaf_malf": string,
    "leaf_mild": string,
    "leaf_shread": string,
    "leafspots_halo": string,
    "leafspots_size": string,
    "leafspots_marg": string,
    "leaves": string,
    "lodging": string,
    "mold_growth": string,
    "mycelium": string,
    "plant_growth": string,
    "plant_stand": string,
    "precip": string,
    "roots": string,
    "sclerotia": string,
    "seed": string,
    "seed_discolor": string,
    "seed_size": string,
    "seed_tmt": string,
    "severity": string,
    "shriveling": string,
    "stem": string,
    "stem_cankers": string,
    "temp": string
}

export function Casos() {
    const [casosProblema, setCasosProblema] = useState<CasosProblema[]>([])
    const [desc_doenca, setDescDoenca] = useState<string>('')
    const [area_damaged, setAreaDamaged] = useState<string>('')
    const [canker_lesion, setCankerLesion] = useState<string>('')
    const [crop_hist, setCropHist] = useState<string>('')
    const [date, setDate] = useState('');
    const [external_decay, setExternalDecay] = useState<string>('')
    const [fruits_spots, setFruitsSpots] = useState<string>('')
    const [fruiting_bodies, setFruitingBodies] = useState<string>('')
    const [fruit_pods, setFruitPods] = useState<string>('')
    const [germination, setGermination] = useState<string>('')
    const [hail, setHail] = useState<string>('')
    const [int_discolor, setIntDiscolor] = useState<string>('')
    const [leaf_malf, setLeafMalf] = useState<string>('')
    const [leaf_mild, setLeafMild] = useState<string>('')
    const [leaf_shread, setLeafShread] = useState<string>('')
    const [leafspots_halo, setLeafspotsHalo] = useState<string>('')
    const [leafspots_size, setLeafspotsSize] = useState<string>('')
    const [leafspots_marg, setLeafspotsMarg] = useState<string>('')
    const [leaves, setLeaves] = useState<string>('')
    const [lodging, setLodging] = useState<string>('')
    const [mold_growth, setMoldGrowth] = useState<string>('')
    const [mycelium, setMycelium] = useState<string>('')
    const [plant_growth, setPlantGrowth] = useState<string>('')
    const [plant_stand, setPlantStand] = useState<string>('')
    const [precip, setPrecip] = useState<string>('')
    const [roots, setRoots] = useState<string>('')
    const [sclerotia, setSclerotia] = useState<string>('')
    const [seed, setSeed] = useState<string>('')
    const [seed_discolor, setSeedDiscolor] = useState<string>('')
    const [seed_size, setSeedSize] = useState<string>('')
    const [seed_tmt, setSeedTmt] = useState<string>('')
    const [severity, setSeverity] = useState<string>('')
    const [shriveling, setShriveling] = useState<string>('')
    const [stem, setStem] = useState<string>('')
    const [stem_cankers, setStemCankers] = useState<string>('')
    const [temp, setTemp] = useState<string>('')

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
        const form = new FormData();
        form.append('desc_doenca', desc_doenca)
        form.append('area_damaged', area_damaged)
        form.append('canker_lesion', canker_lesion)
        form.append('crop_hist', crop_hist)
        form.append('date', date)
        form.append('external_decay', external_decay)
        form.append('fruits_spots', fruits_spots)
        form.append('fruiting_bodies', fruiting_bodies)
        form.append('fruit_pods', fruit_pods)
        form.append('germination', germination)
        form.append('hail', hail)
        form.append('int_discolor', int_discolor)
        form.append('leaf_malf', leaf_malf)
        form.append('leaf_mild', leaf_mild)
        form.append('leaf_shread', leaf_shread)
        form.append('leafspots_halo', leafspots_halo)
        form.append('leafspots_size', leafspots_size)
        form.append('leafspots_marg', leafspots_marg)
        form.append('leaves', leaves)
        form.append('lodging', lodging)
        form.append('mold_growth', mold_growth)
        form.append('mycelium', mycelium)
        form.append('plant_growth', plant_growth)
        form.append('plant_stand', plant_stand)
        form.append('precip', precip)
        form.append('roots', roots)
        form.append('sclerotia', sclerotia)
        form.append('seed', seed)
        form.append('seed_discolor', seed_discolor)
        form.append('seed_size', seed_size)
        form.append('seed_tmt', seed_tmt)
        form.append('severity', severity)
        form.append('shriveling', shriveling)
        form.append('stem', stem)
        form.append('stem_cankers', stem_cankers)
        form.append('temp', temp)
        try {
            const response = await api.post('/cases', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            toast.success("Cadastrado com sucesso!") 
            console.log(response)
        } catch (error) {
            console.log(error)
        }
        console.log(data)
    }

    return (
        <section>
            <ToastContainer />
            <h1>CBR | Preencha com o caso problema</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-56 gap-y-5 h-full shadow-2xl bg-[#f5f5f5] p-5 rounded-md">
                <div className="">
                    <label>Área danificada</label>
                    <select name="area_damaged" id="area_damaged" onChange={(e) => setAreaDamaged(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casosProblema) => (
                            <option value={casosProblema.area_damaged}>{casosProblema.area_damaged}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Lesão na folha</label>
                    <select name="canker_lesion" id="canker_lesion" onChange={(e) => setCankerLesion(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.canker_lesion}>{casoProblema.canker_lesion}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Histórico da colheita</label>
                    <select name="crop_hist" id="crop_hist" onChange={(e) => setCropHist(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.crop_hist}>{casoProblema.crop_hist}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Data da colheita</label>
                    <select name="date" id="date" onChange={(e) => setDate(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.date}>{casoProblema.date}</option>
                        ))}
                    </select>
                </div>
                <div className="">
                    <label>Decaimento externo</label>
                    <select name="external_decay" id="external_decay" onChange={(e) => setExternalDecay(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.external_decay}>{casoProblema.external_decay}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Manchas na fruta</label>
                    <select name="fruits_spots" id="fruits_spots" onChange={(e) => setFruitsSpots(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.fruits_spots}>{casoProblema.fruits_spots}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Taxa de germinação</label>
                    <select name="germination" id="germination" onChange={(e) => setGermination(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.germination}>{casoProblema.germination}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Granizo</label>
                    <select name="hail" id="hail" onChange={(e) => setHail(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.hail}>{casoProblema.hail}</option>
                        ))}
                    </select>
                </div>
                <div className="">
                    <label>Descoloramento</label>
                    <select name="int_discolor" id="int_discolor" onChange={(e) => setIntDiscolor(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.int_discolor}>{casoProblema.int_discolor}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Folhagem</label>
                    <select name="leaves" id="leaves" onChange={(e) => setLeaves(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.leaves}>{casoProblema.leaves}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Manchas auréolas nas folhagem </label>
                    <select name="leafspots_halo" id="leafspots_halo" onChange={(e) => setLeafspotsHalo(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.leafspots_halo}>{casoProblema.leafspots_halo}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Tamanho das manchas</label>
                    <select name="leafspots_size" id="leafspots_size" onChange={(e) => setLeafspotsSize(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.leafspots_size}>{casoProblema.leafspots_size}</option>
                        ))}
                    </select>
                </div>
                <div className="">
                    <label>Margem das manchas</label>
                    <select name="leafspots_marg" id="leafspots_marg" onChange={(e) => setLeafspotsMarg(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.leafspots_marg}>{casoProblema.leafspots_marg}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Folhas</label>
                    <select name="leaves" id="leaves" onChange={(e) => setLeaves(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.leaves}>{casoProblema.leaves}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Alojamento</label>
                    <select name="lodging" id="lodging" onChange={(e) => setLodging(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.lodging}>{casoProblema.lodging}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Crescimento de mofo</label>
                    <select name="mold_growth" id="mold_growth" onChange={(e) => setMoldGrowth(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.mold_growth}>{casoProblema.mold_growth}</option>
                        ))}
                    </select>
                </div>
                <div className="">
                    <label>Crescimento da planta</label>
                    <select name="plant_growth" id="plant_growth" onChange={(e) => setPlantGrowth(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.plant_growth}>{casoProblema.plant_growth}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Micélio</label>
                    <select name="mycelium" id="mycelium" onChange={(e) => setMycelium(e.target.value)} >
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.mycelium}>{casoProblema.mycelium}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Suporte para planta</label>
                    <select name="plant_stand" id="plant_stand" onChange={(e) => setPlantStand(e.target.value)} >
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.plant_stand}>{casoProblema.plant_stand}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Precipitação</label>
                    <select name="precip" id="precip" onChange={(e) => setPrecip(e.target.value)} >
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.precip}>{casoProblema.precip}</option>
                        ))}
                    </select>
                </div>
                <div className="">
                    <label>Raizes</label>
                    <select name="roots" id="roots" onChange={(e) => setRoots(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.roots}>{casoProblema.roots}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Escleródios</label>
                    <select name="sclerotia" id="sclerotia" onChange={(e) => setSclerotia(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.sclerotia}>{casoProblema.sclerotia}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Sementes</label>
                    <select name="seed" id="seed" onChange={(e) => setSeed(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.seed}>{casoProblema.seed}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Descoloração das sementes</label>
                    <select name="seed_discolor" id="seed_discolor" onChange={(e) => setSeedDiscolor(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.seed_discolor}>{casoProblema.seed_discolor}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Tamanho das sementes</label>
                    <select name="seed_size" id="seed_size" onChange={(e) => setSeedSize(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.seed_size}>{casoProblema.seed_size}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Aplicação nas sementes</label>
                    <select name="seed_tmt" id="seed_tmt" onChange={(e) => setSeedTmt(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.seed_tmt}>{casoProblema.seed_tmt}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Severidade</label>
                    <select name="severity" id="severity" onChange={(e) => setSeverity(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.severity}>{casoProblema.severity}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Grau de murchamento</label>
                    <select name="shriveling" id="shriveling" onChange={(e) => setShriveling(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.shriveling}>{casoProblema.shriveling}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Tronco</label>
                    <select  name="stem" id="stem" onChange={(e) => setStem(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.stem}>{casoProblema.stem}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Doença no tronco</label>
                    <select name="stem_cankers" id="stem_cankers" onChange={(e) => setStemCankers(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.stem_cankers}>{casoProblema.stem_cankers}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Temperatura</label>
                    <select name="temp" id="temp" onChange={(e) => setTemp(e.target.value)}>
                        <option value="">Selecione o caso problema</option>
                        {casosProblema.map((casoProblema) => (
                            <option value={casoProblema.temp}>{casoProblema.temp}</option>
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
            <div className="flex w-24 mt-4">
                <button type="submit" className="bg-gray-300 duration-500">Enviar</button>
            </div>
            </form>
        </section>
    )
}