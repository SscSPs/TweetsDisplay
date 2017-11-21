<?php
require_once('TwitterAPIExchange.php');


$userName = $_REQUEST["u"];
$count = $_REQUEST["c"];
$last_ID = $_REQUEST["lastID"];
$result = "";

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
	'oauth_access_token' => "",
	'oauth_access_token_secret' => "",
	'consumer_key' => "",
	'consumer_secret' => ""
);






$url = "https://api.twitter.com/1.1/statuses/user_timeline.json";

$requestMethod = "GET";

$getfield = '?screen_name=' . $userName . '&count=' . $count .'&since_id=' . $last_ID;

$twitter = new TwitterAPIExchange($settings);
$tweetsInJSON = $twitter->setGetfield($getfield)
				->buildOauth($url, $requestMethod)
				->performRequest();
//Now, tweetsJSON is in $tweetsInJSON variable.
//next we need to parse it and form html for it and store it in $result.
//	$result will be echoed in the end, and thus creatng the html content
//	we need in the page.


//Database Connection
$dbUserName = "tweetsProject";
$dbPassword = "internshipProject123";
$dbDataBase = "tweetsview";

$db = mysqli_connect("localhost", $dbUserName, $dbPassword, $dbDataBase);
if ($db->connect_error) {
	$result = "Database Connection not successful";
	echo $result;
	die("Connection failed: " . $db ->connect_error);
}

$userName = mysqli_real_escape_string($db, $userName);














//Final result, containing all the tweets
echo $result;
