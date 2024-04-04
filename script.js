let avengers = ["Ironman","Captain America","Hulk","Thor","Blackwidow","Hawkeye"];
let photos = [
	'<img id="image" src="ironman.jpg">',
	'<img id="image" src="captain.jpg">',
	'<img id="image" src="hulk.jpg">',
	'<img id="image" src="thor.jpg">',
	'<img id="image" src="blackwidow.jpg">',
	'<img id="image" src="hawkeye.jpg">']
let inputElement = document.getElementById("inputData");
let buttonElement = document.getElementById("button");
let outputText = document.getElementById("outputText");
let outputImage = document.getElementById("outputImage");

buttonElement.addEventListener("click", function(){
  let inputName = inputElement.value;
  generate(inputName);
  restyle();
});

function generate(inputName) {
	let randIndex = Math.floor(Math.random() * avengers.length);
	outputText.innerText = "Hi " + inputName + ". You are " + avengers[randIndex] + "!";
	outputImage.innerHTML = photos[randIndex];
}

function restyle() {
	let randNum = Math.floor(Math.random() * 3);
	let image = document.getElementById("image");
	if (randNum == 0) {
		outputText.style.color = "red";
		outputText.style.fontSize = "10px";
		image.style.borderColor = "red";
	}
	else if (randNum == 1) {
		outputText.style.color = "blue";
		outputText.style.fontSize = "20px";
		image.style.borderColor = "blue";
	}
	else if (randNum == 2) {
		outputText.style.color = "yellow"
		outputText.style.fontSize = "30px";
		image.style.borderColor = "yellow";
	}

}