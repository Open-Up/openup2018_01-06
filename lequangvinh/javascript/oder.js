function oder(string) {
    var stringOder = "" + string;
    stringOder = stringOder.split("").sort().join("");
    return stringOder;
}