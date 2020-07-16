//Exercices intermédiaires


/*6. Dans votre fichier script.js créez une nouvelle balise à l'aide de la méthode createElement et attribuez lui
 le texte de votre choix à l'aide de la méthode createNodeText, ensuite greffez le texte à la div en 
 utilisant la méthode appendChild
*/

let myHeaders = new Headers({"Content-Type": "application/json"})


let form = document.getElementById("my-form");

document.getElementById("submit-btn").addEventListener("click", () => {
  
    let formAuteur= document.getElementById("auteur").value;
    let formComment = document.getElementById("comment").value;
    let body = {
        "auteur" :formAuteur,
        "comment" : formComment
    }
    
    let bodyToJson = JSON.stringify(body);
  
    console.log(bodyToJson); 

    fetch("https://quotes-light-api.herokuapp.com/api/comments/", {
      method: "POST",
        headers: myHeaders,
        body: bodyToJson
  })




}) ;
fetch("https://quotes-light-api.herokuapp.com/api/comments/",{method:"GET"})
.then(response => response.json())
.then(data => {

  console.log(data[0]);
   data.forEach(element => {
    let auteurContent = element.auteur;
    let commentContent = element.comment;
    
    //create the tags
        var node = document.createElement("p");
        var nodeDeux = document.createElement("p");
        var hr = document.createElement("hr");

//Fill a html content by varaibles
    var textnode = document.createTextNode(auteurContent); 
    var textnodeDeux = document.createTextNode(commentContent); 
    
//Fill Html tags by variables 
    node.appendChild(textnode); 
    nodeDeux.appendChild(textnodeDeux);                            
//deteminer l'endroit des balises
let currentDiv = document.getElementById("balise");
  /*   document.getElementById("balise").appendChild(node);     
    document.getElementById("balise").appendChild(nodeDeux);  */
    document.body.insertBefore(node, currentDiv.nextElementSibling)
    document.body.insertBefore(nodeDeux, currentDiv.nextElementSibling)
    document.body.insertBefore(hr, currentDiv.nextElementSibling)
/*     document.getElementById("balise").appendChild(hr);
 */
  }); 
});

// Consignes exercices globaux:

//9. Testez votre code, ouvrez votre index.html dans votre navigateur, ouvrez l'inspecteur d'élément, allez dans
// l'onglet "console". Maintenant, remplissez votre formulaire avec les valeurs demandées (l'auteur, et le commentaire).
// Clickez sur le bouton submit, une erreur est elle renvoyée? Si non allez dans l'onglet network et vérifier le
// statut de votre requête, si il est défini sur 200 c'est que votre requête a fonctionné!

//10. Maintenant, créez une méthode fetch qui va aller récupérer toutes les données de l'API, comme la semaine dernière.
// Elle va vous retourner un tableau d'objets. Pour chaque élément de ce tableau, créez dynamiquement une div pour 
//afficher le commentaire dans votre index.html