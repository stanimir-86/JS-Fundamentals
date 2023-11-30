function solve(array) {

    let result = []; 

    for (const line of array) {
        if (line.includes("addMovie ")) {
            let name = line.split("addMovie ")[1];
            result.push({ name });
        } else if (line.includes(" directedBy ")) {
            let [name, director] = line.split(" directedBy ");
            let checkMovie = result.find(el => el.name === name);
            if (checkMovie) {
                checkMovie.director = director;
            }
        } else if (line.includes(" onDate ")) {
            let [name, date] = line.split(" onDate ");
            let checkMovie = result.find(el => el.name === name);
            if (checkMovie) {
                checkMovie.date = date;
            }
        }
    }
    for (let movie of result) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]

);




