function Vuong(canh){
    this.canh = canh;
    
    this.getCanh = function(){
        return this.canh;
    }
 
    this.setCanh = function(canh){
        this.canh = canh;
    }
 
    this.getVuong = function(){
        return (this.canh * this.canh);
    }
}