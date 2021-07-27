let sendformulaire = document.getElementById('send');
sendformulaire.addEventListener ('click' , sdformulaire, sdformulaire1);


function sdformulaire (){
    let result;
let birth = document.getElementById('birthdate').value;
if (birth<18){
    result = `Vous etes mineur, vous avez ${birth} ans`;
}
    else {
        result =`Vous etes majeur, vous avez ${birth} ans`;
    }
    
    alert(result);
}
function sdformulaire1 (){
    let result;
    let birth = document.getElementById('birthdate').value;
if (birth<0){
    result = 'Age incorrect (ne peut être inferieur a 0)'
    alert(result);
}
}