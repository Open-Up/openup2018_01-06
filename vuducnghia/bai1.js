function square(x) { 
    this.canh = x; 
    this.dientich = function () { return this.canh * this.canh }; 
    this.set = function (x) { this.canh = x } 
}

var hv = new square(5)
console.log(hv.dientich())
hv.set(6)
console.log(hv.dientich())
