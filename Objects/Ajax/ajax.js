function getBio(){

    console.log("Je suis au début de ma fonction")

    fetch("https://opendata.agencebio.org/api/gouv/operateurs/?produit=lait&departements=35",{method: "GET"})
        .then(function(response){

        console.log(response)
            if(response.ok){
                return response.json()
            }
    }).then(function(data){

        data.items.forEach(function (laitier, index){
            let p = document.createElement("p")
            p.innerText = "Producteur : " + laitier.raisonSociale + ", adresse : " + laitier.adressesOperateurs[0].codePostal + " " + laitier.adressesOperateurs[0].codePostal + " " + laitier.adressesOperateurs[0].ville

            document.getElementById("content").appendChild(p)
        })
    })

    console.log("Je suis à la fin de ma fonction")
}