
let previousUN;
let tweets;
let tweetCount = 10;
let newTweetsHTML = '';
let latestTweetID= 0;
function initdata(current){
	previousUN = current;
	tweets = document.getElementById("tweets");
}

function begin(tUN, countNeeded) {
	tweetCount = countNeeded;
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
				newTweetsHTML = this.responseText;
			}
		};
		xmlhttp.open("GET", "pulltweets.php?u=" + tUN + "&c=" + tweetCount + "&lastID=" + latestTweetID , true);
		xmlhttp.send();
	}

	tweets.innerHTML = newTweetsHTML . tweets.innerHTML;
}

function updateLatestTweetID(id){
	latestTweetID = id;
}

function clearTweets(logMessage){
	console.log(logMessage);
	tweets.innerHTML = "Tweets will appear here once the query completes!";
}
