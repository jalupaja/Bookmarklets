javascript: (function()
{
    var win_loc = window.location.toString();
    if (win_loc.includes("youtube")) {
        win_loc = win_loc.replace("https://www.youtube.com", "http://c7hqkpkpemu6e7emz5b4vyz7idjgdvgaaa3dyimmeojqbgpea3xqjoid.onion");
    } else if (win_loc.includes("youtu.be")) {
        win_loc = win_loc.replace("https://youtu.be", "http://c7hqkpkpemu6e7emz5b4vyz7idjgdvgaaa3dyimmeojqbgpea3xqjoid.onion");
    } else if (win_loc.includes("twitter")) {
        win_loc = win_loc.replace("https://twitter.com", "http://nitter7bryz3jv7e3uekphigvmoyoem4al3fynerxkj22dmoxoq553qd.onion");
    } else if (win_loc.includes("reddit")) {
        win_loc = win_loc.replace("https://www.reddit.com", "http://qtpvyiaqhmwccxwzsqubd23xhmmrt75tdyw35kp43w4hvamsgl3x27ad.onion");
    } else if (win_loc.includes("instagram")) {
        win_loc = win_loc.replace("https://www.instagram.com", "http://rlp5gt4d7dtkok3yaogocbcvrs2tdligjrxipsamztjq4wwpxzjeuxqd.onion");
    } else if (win_loc.includes("tiktok.com")) {
        win_loc =win_loc.replace('tiktok.com', 'proxitok.herokuapp.com');
    } else if (win_loc.includes("wikipedia")) {
        if (win_loc.includes("www.wikipedia.org") || win_loc.includes("en.wikipedia.org"))
            var lang = "en";
        else if (win_loc.includes("www.wikipedia."))
            var lang = win_loc.split('/')[2].split('.')[2];
        else if (win_loc.includes(".wikipedia.org"))
            var lang = win_loc.split('/')[2].split('.')[0];
        else
            return;
        win_loc = win_loc.replace(/^.*\.wikipedia\.[a-zA-Z]*\//, 'https://wikiless.org/') + "?lang=" + lang;
    } else if (win_loc.includes("imgur")) {
        win_loc =win_loc.replace('https://imgur.com','https://rimgo.bcow.xyz');
    } else if (win_loc.includes("imdb")) {
        win_loc = win_loc.replace(/^.*\.?imdb\.com\//, 'http://libremdb.lqs5fjmajyp7rvp4qvyubwofzi6d4imua7vs237rkc4m5qogitqwrgyd.onion/');
    } else if (win_loc.includes("quora")) {
        win_loc = win_loc.replace(/^.*quora\.[a-zA-Z]*\//, 'https://quetre.herokuapp.com/');
    } else if (win_loc.includes("reuters")) {
        win_loc = win_loc.replace(/^.*reuters\.[a-zA-Z]*\//, 'https://neuters.de/');
    } else {
        return;
    }
    window.location = win_loc;
})();
/* Add this code as a bookmark URL */
