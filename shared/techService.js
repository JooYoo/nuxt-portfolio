import jsonTechs from "~/static/tech.json";

function getTechColor(name) {
    const otherTech = jsonTechs.find(tech => tech.name === "other")
    const targetTech = jsonTechs.find(tech => tech.name === name)

    return targetTech ?
            targetTech.color :
            otherTech.color
}

export {
    getTechColor
}