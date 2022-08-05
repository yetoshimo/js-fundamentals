function fancyBarcode(givenArray) {
    let counter = Number(givenArray.shift())
    for (let i = 0; i < counter; i++) {
        let nextItem = givenArray.shift();
        let barcodeReg = /@#+(?<validBarcode>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
        if (barcodeReg.exec(nextItem) != null) {
            let productReg = /\d+/g;
            let productGroupItem = nextItem.match(barcodeReg).groups.validBarcode.match(productReg);
            if (productGroupItem != null) {
                console.log(`Product group: ${productGroupItem.join('')}`)
            } else {
                console.log('Product group: 00')
            }
        } else {
            console.log('Invalid barcode')
        }
    }
}

fancyBarcode(["6",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##",
    '##InvaliDiteM##', 
    '@InvalidIteM@', 
    '@#Invalid_IteM@#'
])