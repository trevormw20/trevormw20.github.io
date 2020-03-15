const date = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
document.getElementById("dateUpdated").textContent = new Date(document.lastModified).toUTCString("en-US", date);