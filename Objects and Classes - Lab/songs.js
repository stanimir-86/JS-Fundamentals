function songs(array) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numbersOfSongs = array.shift();
    let typeSongs = array.pop();

    for (let i = 0; i < numbersOfSongs; i++) {
        let [type, name, time] = array[i].split("_");
        let song = new Song(type, name, time);
        songs.push(song);

    }

    if (typeSongs === "all") {
        for (let j = 0; j < songs.length; j++) {
            let element = songs[j].name;
            console.log(element);

        }
    } else {
        let filtered = songs.filter((el) => el.type === typeSongs);
        for (let k = 0; k < filtered.length; k++) {
            let element = filtered[k].name;
            console.log(element);
        }
    }

}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);