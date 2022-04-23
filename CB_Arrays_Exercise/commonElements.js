function commonElements(firstArray, secondArray) {
    let commonItems = firstArray.filter(element => secondArray.includes(element))
    commonItems.forEach(element => {
        console.log(element)
    });
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)



commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)