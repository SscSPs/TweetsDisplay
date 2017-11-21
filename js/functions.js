
let previousUN;
let tweets;
let tweetCount = 10;

function initdata(){
	tweets = document.getElementById("tweets");
}

function begin(tUN) {
	if(previousUN != tUN && tUN.length != 0){
		clearTweets("New Username selected, clearing old tweets.");
		previousUN = tUN;
	}
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
		xmlhttp.open("GET", "pulltweets.php?u=" + tUN + "&c=" + tweetCount, true);
		xmlhttp.send();
	}
}

function clearTweets(logMessage){
	console.log(logMessage);
	tweets.innerHTML = "";
}
