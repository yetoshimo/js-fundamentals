function movies(givenArray) {
    let moviesList = {};
    for (let element of givenArray) {
        if (element.includes('addMovie')) {
            var movieName = element.slice(element.indexOf(' ') + 1);
            moviesList[movieName] = {'name': movieName};
        } else if (element.includes('directedBy')) {
            movieName = element.split(' directedBy ')[0];
            let directorName = element.split(' directedBy ')[1];
            if (Object.keys(moviesList).includes(movieName)) {
                moviesList[movieName]['director'] = directorName;
            }
        } else if (element.includes('onDate')) {
            movieName = element.split(' onDate ')[0];
            let movieDate = element.split(' onDate ')[1];
            if (Object.keys(moviesList).includes(movieName)) {
                moviesList[movieName]['date'] = movieDate;
            }
        }
    }
    for (let value of Object.values(moviesList)) {
        if (value['director'] && value['date']) {
            console.log(JSON.stringify(value))
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
)