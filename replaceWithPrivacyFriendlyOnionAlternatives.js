// Add the following as a bookmarkURL

javascript: (function()
{
    if (window.location.toString().includes("youtube"))
        window.location = window.location.toString().replace("https://www.youtube.com", "http://c7hqkpkpemu6e7emz5b4vyz7idjgdvgaaa3dyimmeojqbgpea3xqjoid.onion");
    else if (window.location.toString().includes("twitter"))
        window.location = window.location.toString().replace("https://twitter.com", "http://nitter7bryz3jv7e3uekphigvmoyoem4al3fynerxkj22dmoxoq553qd.onion");
    else if (window.location.toString().includes("reddit"))
        window.location = window.location.toString().replace("https://www.reddit.com", "http://qtpvyiaqhmwccxwzsqubd23xhmmrt75tdyw35kp43w4hvamsgl3x27ad.onion");
    else if (window.location.toString().includes("instagram"))
        window.location = window.location.toString().replace("https://www.instagram.com", "http://rlp5gt4d7dtkok3yaogocbcvrs2tdligjrxipsamztjq4wwpxzjeuxqd.onion");
    else if (window.location.toString().includes("wikipedia"))
        window.location = window.location.toString().replace(/https:\/\/.?.?\.?wikipedia.org/,'https://wikiless.org');
    else if (window.location.toString().includes("imgur"))
        window.location=window.location.toString().replace('https://imgur.com','https://imgin.voidnet.tech');
    })();

