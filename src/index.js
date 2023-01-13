module.exports = function toReadable (number) {
  if(number < 10){
	return getOneDigit(number);
  }

  if(number >= 10 && number < 100){
	return getTwoDigit(number);
  }

  if(number >= 100){
	return getThreeDigit(number);
  }
}

function getOneDigit(number){
	switch(number){
		case 1:
			return 'one';
		case 2:
			return 'two';
		case 3:
			return 'three';
		case 4:
			return 'four';
		case 5:
			return 'five';
		case 6:
			return 'six';
		case 7:
			return 'seven';
		case 8:
			return 'eight';
		case 9:
			return 'nine';
		case 0:
			return 'zero';
	}
}

function getTwoDigit(number){
	if(number < 10){
		return getOneDigit(number);
	}
	else if(number >= 10 && number < 20){
		switch(number){
			case 10:
				return 'ten';
			case 11:
				return 'eleven';
			case 12:
				return 'twelve';
			case 13:
				return 'thirteen';
			case 15:
				return 'fifteen';
			case 18:
				return 'eighteen';
			default:
				return getOneDigit(number % 10) + 'teen';
		}
	}else if(number % 10 == 0){
		return getTen(number);
	}else{
		return getTen(number - number % 10) + ' ' + getOneDigit(number % 10);
	}
}

function getTen(number){
	switch(number){
		case 20:
			return 'twenty';
		case 30:
			return 'thirty';
		case 40:
			return 'forty';
		case 50:
			return 'fifty';
		case 60:
			return 'sixty';
		case 70:
			return 'seventy';
		case 80:
			return 'eighty';
		case 90:
			return 'ninety';
	}
}

function getThreeDigit(number){
	if(number % 100 == 0){
		return getHundreds(number);
	}else{
		return getHundreds(number) + ' ' + getTwoDigit(number % 100);
	}
}

function getHundreds(number){
	return getOneDigit((number - number % 100)/100) + ' ' + 'hundred';
}