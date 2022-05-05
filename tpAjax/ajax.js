function getVille() {

    // idDep = la valeur mis dans l'input getDepartement
    let idDep = document.getElementById("getDepartement").value;


    //je fetch l'api avec le lien avec le code récupéré juste au dessus
    fetch("https://geo.api.gouv.fr/departements/" + idDep + "/communes", {method: "GET"})
        .then(function (response) {

            console.log(response)
            if (response.ok) {
                return response.json()
            }
        }).then(function (data) {
        document.getElementById("selectCom").innerHTML="<option selected disabled>--Choisir commune--</option>";

        data.sort(function (a,b)){
            return a.nomlocaleCompare(b.nom)
        }

        data.forEach(function (city) {
            let option = document.createElement("option")
            option.innerText = city.nom
            option.setAttribute("value", city.code)

            document.getElementById("selectCom").appendChild(option)
        })
    })

}
