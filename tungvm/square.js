function Square(sidelength){
    this.sidelength = sidelength;
    this.setSidelength = function(sidelength){
        this.sidelength = sidelength;
    }
    this.squareArea = function(){
        return this.sidelength*this.sidelength;
    }
}
var newSquare = new Square(2);

console.log(newSquare.sidelength); 
console.log(newSquare.squareArea()); 
newSquare.setSidelength(4);
console.log(newSquare.sidelength); 
console.log(newSquare.squareArea()); 
