
function grabWord(){
	var gotIt = document.getElementById('input').value;
	document.getElementById('input').value = "";
	document.getElementById('input').focus;
	fetch('/b', {
		method: "POST",
		body: JSON.stringify({word: gotIt}),
		headers: {
			"Content-Type": "application/json"
		}
	}).then(function(res){
		return res.json()
	}).then(function(res){
		console.log(res);
	}).catch(function(err){
		console.log(err);
	})
}

function insertWord(word){
	document.getElementById("display").innerHTML = word;
}
function displayWord() {
	fetch('/a')
  .then(function(response) {
  	return response.json()
  }).then(function(json) {
    insertWord(json.word)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
}	



// http://local/8080/a