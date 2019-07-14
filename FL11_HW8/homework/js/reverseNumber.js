function reverseNumber(num) {
	num = num.toString();
  let str = "";
  for (var i = num.length - 1; i >= 0; i--) {
    str += num[i];
  }
  if (num < 0){
    return -parseInt(str);
	}else{
		return parseInt(str);
	}
}
reverseNumber(123);