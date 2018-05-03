function reverse(x) {
	var a = new String;
	a = a + x%10;
	x = Math.floor(x/10);
	if(x<=0){
		return a;
	}else{
		return(a+reverse(x));
	}
}
