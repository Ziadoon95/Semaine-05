let myHeaders = new Headers({"Content-Type": "application/json"})



document.getElementById("commentButton").addEventListener("click", () => {
  
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