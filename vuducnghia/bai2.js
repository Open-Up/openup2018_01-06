function reverse(data){
    data += ''
    data = data.split('').reverse().join('')
    return data
}

console.log(reverse(356712))