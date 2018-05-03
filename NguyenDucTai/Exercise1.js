function Square(edge){
    this.edge = isNaN(edge)? 0: edge;
    this.setEdge = function(edge){
    	this.edge = isNaN(edge)? this.edge: edge;
    }
    this.area = function(){
        return (this.edge *this.edge);
    };
};