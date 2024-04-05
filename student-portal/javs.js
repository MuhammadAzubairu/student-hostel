
var database = [

    {
        username: "muhammad",
        rage: "nas/csc/20/1149",
        password: "7777777"

    },
    {
        username: "la",
        rage: "nas/csc/20/1150",
        password: "7777777"

    },
    {
        username: "pa",
        rage: "nas/csc/20/1151",
        password: "7777777"

    },
    {
        username: "ka",
        rage: "nas/csc/20/1152",
        password: "7777777"

    }, {
        username: "ba",
        rage: "nas/csc/20/1123",
        password: "7777777"

    }

];
function isUserValid(username, rage, password) {
    for (var i = 0; i = database.length; i++) {
        if (database[i].username === username &&
            database[i].rage === rage &&
            database[i].password === password) {
            return true;
        }
    }
    return false;
}
function singin(username, rage, password) {
    if (isUserValid(username, rage, password)) {
        console.log(newsfeed);
    } else {
        alert("soory! wrong username or password");
    }
}
