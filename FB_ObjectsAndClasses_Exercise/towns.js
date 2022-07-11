function towns(givenArray) {
    let townList = {};
    for (let item of givenArray) {
        let [townName, latitude, longitude] = item.split(' | ');
        townList[townName] = { 'latitude': Number(latitude).toFixed(2), 'longitude': Number(longitude).toFixed(2) };
    }
    for (let key of Object.keys(townList)) {
        console.log(`{ town: '${key}', latitude: '${townList[key]['latitude']}', longitude: '${townList[key]['longitude']}' }`);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)

towns(['Plovdiv | 136.45 | 812.575'])