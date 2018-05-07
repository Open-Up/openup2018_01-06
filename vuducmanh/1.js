function reverseInt(x) {
	str = x.toString();
	// console.log(str);
	arr = str.split('');
	arr_reverse = arr.reverse();
	str_reverse = arr_reverse.join('');
	num_reverse = Number(str_reverse);
	console.log(num_reverse);
}
reverseInt(123);
