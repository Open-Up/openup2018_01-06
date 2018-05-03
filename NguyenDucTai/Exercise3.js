function sortString(arg){
	return mergeSort(arg);
}

function mergeSort(arg){
	if (arg.length < 2){
		return arg
	}else {
		var left = mergeSort(arg.substring( 0, Math.floor(arg.length/2)));
		var right = mergeSort(arg.substring( Math.floor(arg.length/2)), arg.length);
		return merge(left,right);
	}
}

function merge(arg_1,arg_2){
	var count_1 = 0;
	var count_2 = 0;
	var a = new String();
	while (true) {
		if(count_1 >= arg_1.length){
			a = a + arg_2.substring(count_2, arg_2.length);
			break;
		}
		if(count_2 >= arg_2.length){
			a = a + arg_1.substring(count_1, arg_1.length);
			break;
		}
		if(arg_1.charCodeAt(count_1)<arg_2.charCodeAt(count_2)){
			a = a + arg_1.charAt(count_1);
			count_1++;
		}else {
			a = a + arg_2.charAt(count_2);
			count_2++;
		}
	}
	return a;
}
