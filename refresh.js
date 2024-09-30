function onClickrgb(){
	let inputText = document.getElementById("rgb").value;


	let firstComma = inputText.indexOf(',');
	let secondComma = inputText.indexOf(',',firstComma+1);

	if (firstComma > 0 && secondComma > 0){
		let r = inputText.slice(0,firstComma).trim();
		let g = inputText.slice(firstComma+1, secondComma).trim();
		let b = inputText.slice(secondComma+1).trim();

		document.getElementById("colorPreview2").style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
		document.getElementById("colorPreview3").style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

	}

	
}

