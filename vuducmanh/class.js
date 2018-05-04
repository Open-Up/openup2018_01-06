function square(y) {
	this.x = y;
	this.setX = function(a) {
	this.x = a; }
	this.getS = function() {
	console.log(this.x * this.x);}
}
var sq = new square(2);
sq.getS();
sq.setX(3);
sq.getS();
// VM1109:6 4
// VM1109:6 9