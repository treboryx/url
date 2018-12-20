var endpoint = "https://www.jsonstore.io/26c4b29cb3008769e443e1a861ab7d4e1d2bd7dde53747f8d7365023c1aa66c2";

function fetchJSON(a) {
    var e = new XMLHttpRequest;
    e.open("GET", a, false);
    e.send(null);
    return e.responseText
}
var hashh = window.location.hash.substr(1);
if (window.location.hash != "") {
    var res = JSON.parse(fetchJSON(endpoint + "/" + hashh));
    var data = res.result;
    if (data != null) {
        window.location.href = data
    }
}