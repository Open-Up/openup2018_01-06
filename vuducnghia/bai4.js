user = [
    { id: 1, username: 'nghia' },
    { id: 2, username: 'vu' },
    { id: 3, username: 'duc' }
]
function getUsers() {

    return new Promise(function (resolve, reject) {
        setTimeout( ()=> {
            var arID = []
            user.forEach(element => {
                arID.push(element.id)
            });

            resolve(arID)
        }, 2000)
    })
}

function getUserName(userID) {
    return new Promise(function (resolve, reject) {
        setTimeout( ()=> {
            user.forEach(element => {
                if (userID == element.id)
                    resolve(element)
            })
            reject('error')
        }, 2000)
    })
}

function main() {
    var ar = []
    getUsers().then( (data)=> {
        data.forEach(element => {
            getUserName(element).then( (data)=> {
                console.log(data)
            }).catch((err)=>{
                console.log(err)
            })
        })
    })
}
main()