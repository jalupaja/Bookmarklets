javascript: (function()
{
    if (window.location.toString().includes("youtube"))
        window.location = window.location.toString().replace("https://www.youtube.com", "https://yewtu.be");
    else if (window.location.toString().includes("youtu.be"))
        window.location = window.location.toString().replace("https://youtu.be", "https://yewtu.be");
    else if (window.location.toString().includes("twitter"))
        window.location = window.location.toString().replace("https://twitter.com", "https://nitter.net");
    else if (window.location.toString().includes("reddit"))
        window.location = window.location.toString().replace("https://www.reddit.com", "https://teddit.net");
    else if (window.location.toString().includes("instagram"))
        window.location = window.location.toString().replace("https://www.instagram.com", "https://bibliogram.art");
    else if (window.location.toString().includes("tiktok.com"))
        window.location=window.location.toString().replace('tiktok.com', 'proxitok.herokuapp.com');
    else if (window.location.toString().includes("wikipedia"))
        window.location = window.location.toString().replace(/https:\/\/.?.?\.?wikipedia.org/,'https://wikiless.org');
    else if (window.location.toString().includes("imgur"))
        window.location=window.location.toString().replace('https://imgur.com','https://rimgo.bcow.xyz');
})();
/* Add this code as a bookmark URL */