
let tUN;
let tweets;

function initdata(){
tUN = document.getElementById("Tusername").value;
tweets = document.getElementById("tweets");
}

function begin() {
	if (tUN.length == 0) {
		tweets.innerHTML = "No User Selected.";
		alert("Enter Username First.");
		return;
	} else {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				tweets.innerHTML = this.responseText;
			}
		};
		xmlhttp.open("GET", "pulltweets.php?q=" + tUN, true);
		xmlhttp.send();
	}
}

function clearTweets(){
	console.log("Clearing");
	tweets.innerHTML = "Cleared.";
}
