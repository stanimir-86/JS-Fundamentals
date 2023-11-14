function tseamAccount(array) {

    let gameList = array.shift().split(" ");
    let command = array.shift();
    while (command !== "Play!") {
        let commandList = command.split(" ");
        let action = commandList[0];
        let game = commandList[1];

        switch (action) {
            case "Install": installGame(gameList, game); break;
            case "Uninstall": uninstallGame(gameList, game); break;
            case "Update": updateGame(gameList, game); break;
            case "Expansion":
                let myArr = game.split("-");
                let checkingGame = myArr[0];
                let expansion = myArr[1];
                if (gameList.includes(checkingGame)) {
                    let indexGame = gameList.indexOf(checkingGame);
                    gameList.splice(indexGame + 1, 0, `${checkingGame}:${expansion}`);
                }
                break;
        }

        command = array.shift();
    }
    function installGame(arr, game) {
        if (!arr.includes(game)) {
            arr.push(game);
        }
    }
    function uninstallGame(arr, game) {
        if (arr.includes(game)) {
            let indexGame = arr.indexOf(game);
            arr.splice(indexGame, 1);
        }
    }
    function updateGame(arr, game) {
        if (arr.includes(game)) {
            let indexGame = arr.indexOf(game);
            let removed = arr.splice(indexGame, 1);
            arr.push(removed);
        }
    }

    console.log(gameList.join(" "));
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
);
tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']);