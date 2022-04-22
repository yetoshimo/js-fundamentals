function meterConverter(givenMeters) {
    const kilometerConverter = 1000;
    console.log(`${(givenMeters / kilometerConverter).toFixed(2)}`)
}

meterConverter(1852)

meterConverter(798)