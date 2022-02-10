javascript: (function()
{
    var href = window.location.toString().split("/"); 
    if (href[href.length - 1] == "" && /^\d+$/.test(href[href.length - 2])) {
        href[href.length - 2]++;
    } else if (/^\d+$/.test(href[href.length - 1])){ 
        href[href.length - 1]++;
        window.location = href.join("/");
    }
}
)();
/* Add this code as a bookmark URL */