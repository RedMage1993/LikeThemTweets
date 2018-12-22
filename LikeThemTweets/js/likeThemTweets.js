$(document).ready(function() {
	function likeNextTweet() {
		var nextTweetLikeButton = $(".ProfileTweet-actionButton.js-actionFavorite:visible").first();

		if (nextTweetLikeButton.length == 0) {
			$('html, body').animate({ scrollTop: $(document).height() }, 50);
		} else {
			nextTweetLikeButton.click();
		}

		setTimeout(likeNextTweet, 500);
	}

	likeNextTweet();
});