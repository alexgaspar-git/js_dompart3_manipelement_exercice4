let myObj = {
    HTML: "71%",
    CSS: "95%",
    JS: "50%",
    React: "18%",
    Laravel: "100%"
}

let elements = document.querySelectorAll('#liste-competences>h2');

let i = 0
for (let key in myObj) {
    let titre = elements[i];
    titre.innerText += ": " + myObj[key];
    let verif = myObj[key].substr(0, myObj[key].length -1);
    if (verif > 50 && verif < 100 && verif != 50) {
        titre.style.backgroundColor = 'green'
        titre.style.olor = 'white'
    } else if (verif == 100) {
        titre.style.backgroundColor = "gold"
    } else if (verif < 50) {
        titre.style.backgroundColor = "red"
    }
    titre.style.width = verif+"%";
    i++
}