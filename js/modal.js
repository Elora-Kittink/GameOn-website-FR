

const modalbg = document.querySelector(".bground"); /*modalbg = .bground*/
const modalBtn = document.querySelectorAll(".modal-btn"); /*modalBtn = .modal-btn*/ 
const formData = document.querySelectorAll(".formData"); /* formData = .formData */
const closeBtn = document.querySelector (".close");
const firstname = document.getElementById ("first");
const lastname = document.getElementById ("last");
const email = document.getElementById ("email");
const numberOfTournament = document.getElementById ("quantity");
let regexTournament = new RegExp("[0-9]"); 
let regexEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
const locationCheckbox = document.getElementById("location");




function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}  /*Si le nom de class de x est "topnav" alors on lui ajoute le nom de class "responsive" sinon ça reste juste topnav*/ 

/*document.getElementById("navIcon") = editNav()*/

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));   /*pour chaque bouton, écouter l'évenement "click" et executer la onction "launchModal" */

function launchModal() {
  modalbg.style.display = "block";   /* fait apparaitre le formulaire en le passant en display block */
}

closeBtn.addEventListener ("click", closeModal)   /*au click executer la fonction closemodal*/

function closeModal () {
  modalbg.style.display = "none"; /*fermer en passant en display none*/
}

function validateFirstname() {
  let firstnameLength = firstname.value.length;
  if (firstnameLength < 2) {
    document.getElementById('errorFirstname').innerHTML = "Doit contenir au moins deux lettres";
    return false
  } else {
    document.getElementById('errorFirstname').innerHTML = "";   
    return true
  }   /*si la valeur fait moins de deux carractères afficher le message d'erreur, sinon c'est ok*/
}

firstname.addEventListener("input", validateFirstname) /*executer validateFirstname a chaque changement de caractère*/

function validateLastname() {
  let lastnameLenght = lastname.value.length;
  if (lastnameLenght < 2) {
    document.getElementById('errorLastname').innerHTML = "Doit contenir au moins deux lettres";
    return false
  } else {
    document.getElementById('errorLastname').innerHTML = "";
    return true
  }   /*si la valeur fait moins de deux carractères afficher le message d'erreur, sinon c'est ok*/
}

lastname.addEventListener("input", validateLastname) /*executer validateLastname a chaque changement de caractère*/



function validateEmail() {
  let userEmail = email.value
  if (regexEmail.test(userEmail) === false) {
    document.getElementById('errorEmail').innerHTML = "Adresse mail invalide"
    return false
  } else {
    document.getElementById('errorEmail').innerHTML = ""
    return true
  }
}  /*si la valeur n'est pas une adresse mail afficher message d'erreur, sinon c'est ok*/

email.addEventListener("input", validateEmail) /*executer validateEmail à chaque changement de caractère dans le champs*/

function validateTournament() {
  let tournamentType = numberOfTournament.value
  if (regexTournament.test(tournamentType) === false){
    document.getElementById('errorTournament').innerHTML = "Chiffre demandé"
    return false
  } else {
    document.getElementById('errorTournament').innerHTML = ""
    return true 
  }
} /*si la valeur n'est pas un chiffre afficher le message d'erreur, sinon c'est ok*/

numberOfTournament.addEventListener("input", validateTournament) /*executer validateTournament à chaque changement de caractère dans le champs*/

function validateLocation() {
  if (document.getElementById("location1").checked
      || document.getElementById("location2").checked
      || document.getElementById("location3").checked 
      ||document.getElementById("location4").checked) {
        document.getElementById('errorLocation').innerHTML = "";
          return true
        } else {
          document.getElementById('errorLocation').innerHTML = "Vous devez choisir une ville";
          return false
        }
} /*si une des locations est coché c'est ok sinon afficher le message d'erreur*/

locationCheckbox.addEventListener("mouseover", validateLocation); /*executer validateLocation au survol de la zone*/

function validateTermsOfUse() {
  if (document.getElementById("checkbox1").checked) {
    document.getElementById('errorTermsOfUse').innerHTML = "";
    return true
  } else {
    document.getElementById('errorTermsOfUse').innerHTML = "Vous devez accepter les termes et conditions";
    return false
  }
} /*si la case est cochée c'est ok sinon afficher le message d'erreur*/

document.getElementById("checkbox1").addEventListener("change", validateTermsOfUse); /*executer validateTermsOfUse à chaque changement*/


function validate() {
  if (validateFirstname()
      && validateLastname()
      && validateEmail()
      && validateTournament() 
      && validateLocation() 
      && validateTermsOfUse() ) {
      window.alert("Formulaire envoyé, merci d'avoir participé !");
      return true
  } else {
    document.getElementById('validateForm').innerHTML = "Formulaire invalide";
    return false
  }
} /*si toutes les fonctions retourne vrai alors lancer la window alert et valider le formulaire, sinon afficher le message d'erreur*/

let request = new XMLHttpRequest(); /*variable requete*/


document.getElementById("btn-submit").onclick = function() {
  request.open("POST", "https://url-service-web.com/api/addSub");
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(jsonBody));  
} /*au click sur le bouton btn-submit executer la fonction qui lancera une requete post*/

document.getElementById("formSubmit").onsubmit = validate  /*executer la fonction validate au submit du formulaire*/
