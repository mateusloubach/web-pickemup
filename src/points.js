function randomPoint(centerLong, centerLat) {
    let longOffset = Math.random() * Math.random()
    let latOffset = Math.random() * Math.random()

    let long = centerLong + longOffset
    let lat = centerLat + latOffset

    return [long, lat]
}

let userPoint = randomPoint(3.406448, 6.465422)
let user = { point: userPoint, contact: "https://t.me/israelgaladima", time: "Tuesday, 11th October 2022", token: "12345" }


let points = [user]

for (let i = 0; i < 10; i++) {
    let point = randomPoint(3.406448, 6.465422)

    let details = { point, contact: "https://t.me/israelgaladima", time: "Tuesday, 11th October 2022"
    }

    points.push(details)
}

export default points