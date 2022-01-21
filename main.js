let upper = document.getElementById("upper-case");
let lower = document.getElementById("lower-case");
let proper = document.getElementById("proper-case");
let sentence = document.getElementById("sentence-case");
let save = document.getElementById("save-text-file");

upper.addEventListener("click", function () {
    document.getElementById("secondP").innerHTML = "text"
})

lower.addEventListener("click", function () {
    let words = document.querySelector("textarea").value.toLowerCase();
    document.querySelector("textarea").value = words;
})

upper.addEventListener("click", function () {
    let words = document.querySelector("textarea").value.toUpperCase();
    document.querySelector("textarea").value = words;
})

proper.addEventListener("click", function () {
    let words = document.querySelector("textarea").value.toLowerCase().split(" ");
    words.forEach(function (item, i) {
        words[i] = item.charAt(0).toUpperCase() + item.substring(1);
    })
    document.querySelector("textarea").value = words.join(" ");
})

sentence.addEventListener("click", function () {
    let words = document.querySelector("textarea").value.toLowerCase().split(". ");
    words.forEach(function (item, i) {
        words[i] = item.charAt(0).toUpperCase() + item.substring(1);
    })
    document.querySelector("textarea").value = words.join(". ")
})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

save.addEventListener("click", function () {
    let text = document.getElementById("text").value;
    download('text.txt', text);
}, false);
