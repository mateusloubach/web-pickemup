function randomPoint(centerLong, centerLat) {
    let longOffset = Math.random() * Math.random()
    let latOffset = Math.random() * Math.random()

    let long = centerLong + longOffset
    let lat = centerLat + latOffset

    return [long, lat]
}

let userPoint = randomPoint(-48.326792, -18.964537)
let user = { point: userPoint, contact: "+55 (31) 99432-9234", time: "Sexta-Feira, 16 de Fev. 2024", token: "12345" }


let points = [user]

for (let i = 0; i < 10; i++) {
    let point = randomPoint(-48.326792, -18.909710)

    let details = { point, contact: "+55 (31) 99432-9234", time: "Sexta-Feira, 16 de Fev. 2024"
    }

    points.push(details)
}

export default points