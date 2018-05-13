var data = [
    { id: 0, name: 'nguyen van a' },
    { id: 1, name: 'nguyen van b' },
    { id: 2, name: 'nguyen van c' }
]

function getUsers() {

    return new Promise((resolve, reject) => {
        if (data.length)
            window.setTimeout(() => {
                resolve(JSON.stringify(data));
            }, 2000);
        else
            reject(new Error("Data null"));
    })
}

function getUserName(id) {
    var search = false;
    var userId;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                search = true;
                userId = i;
                break;
            }
        }
        if (search) {
            window.setTimeout(() => {
                resolve(data[userId].name);
            }, 2000);
        } else
            reject(new Error("Not find User"));
    })
}

function main() {
    var listUser = [];
    getUsers()
        .then((res) => {
            var listId = JSON.parse(res);
            for (let i = 0; i < listId.length; i++) {
                debugger;
                getUserName(i).then((userName) => { listUser.push(userName) });
            }
        })
        .then((userNames) => console.log(listUser))
        .catch((error) => console.log(error));
}