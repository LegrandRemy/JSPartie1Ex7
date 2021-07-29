
//Déclaration variable bouton d'envoi
let sendForm = document.getElementById('send');
//On écoute l'evenement click sur le bouton et on appelle la fonction sdForm() envoi formulaire quand on l'a entendu
sendForm.addEventListener('click', sdForm);


//Exemple 1

//Declaration de la fonction sdForm() qui affiche un message (majeur, mineur, impossible)
function sdForm() {
    //Déclaration de la variable du resultat
    let result;
    //Déclaration de la variable qui contient la valeur ecrite dans le champ
    let birth = document.getElementById('birthDate').value;
    //Condition : si Age compris entre 18 et 120 ans...
    if (birth >= 18 && birth <= 120) {
        // Alors ...
        result = `Vous etes majeur, vous avez ${birth} ans`;
    }
    //Sinon Si .... Age compris entre 0 et 18 ans ...
    else if (birth < 18 && birth > 0) {
        // Alors...
        result = `Vous etes mineur, vous avez ${birth} ans`;
        alert(result);
    }
    //Sinon (age inferieur a 0 et superieur a 120 ans) ...
    else {
        // Alors...
        result = 'Age incorrect (ne peut être inferieur a 0 ou superieur a 120)';
        alert(result);
    }
}

// Exemple 2

let sendForm2 = document.getElementById('send2');
sendForm2.addEventListener('click', sdForm2);

function sdForm2 () {
    let birth2 = document.getElementById('birthDate').value;
    let message;
if (birth2 >= 18 && birth2 <= 120) {
    message = `Vous etes majeur, vous avez ${birth2} ans`;
}
else if (birth2 < 18 && birth2 > 0) {
    message = `Vous etes mineur, vous avez ${birth2} ans`;
}
else {
    message = 'Age incorrect (ne peut être inferieur a 0 ou superieur a 120)';
}
document .getElementById('paragraph').innerHTML = message;
}