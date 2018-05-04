function alphabetical(string) {
	var arr_letter = string.split('');
	var arr_letter_sort = arr_letter.sort();
	var string_sort = arr_letter_sort.join('');
	console.log(string_sort);
}
alphabetical('openupvietnam');