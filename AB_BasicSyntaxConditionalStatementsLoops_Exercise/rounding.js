function rounder(givenNumber, toPrecision) {
    switch (true) {
        case (toPrecision > 15):
            toPrecision = 15;
            break;
    }
    console.log(`${parseFloat(givenNumber.toFixed(parseFloat(toPrecision)))}`)
}


rounder(3.14159265358979323, 2)

rounder(3.1415926535897932384626433832795,20)

rounder(3.1415926535897932384626433832795,14)

rounder(10.5, 3)

rounder(10, 17000)