function getVille() {

    // code = la valeur mis dans l'input getDepartement
    let code = document.getElementById("getDepartement").value;

    console.log(code)

    //je fetch l'api avec le lien avec le code récupéré juste au dessus
    fetch("https://geo.api.gouv.fr/departements/" + code + "/communes", {method: "GET"})
        .then(function (response) {

            console.log(response)
            if (response.ok) {
                return response.json()
            }
        }).then(function (data) {

        //pour chaque commune que je trouve imprimer les infos avec nom, code postal, population etc........................
        data.forEach(function (commune, index) {
            let p = document.createElement("p")
            p.innerText = "Nom : " + commune.nom + ", code postal : " + commune.code + ", population : " + commune.population

            document.getElementById("content").appendChild(p)
        })
    })

}
