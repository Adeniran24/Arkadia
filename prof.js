window.onload = function() {
    logged();
}


function logged()
{
const logreg=document.getElementById('LogReg');
const profil=document.getElementById('Logged');


//ide if es elágazás kell, hogy ha be van jelentkezve, akkor a logreg gombot elrejtsük, a profil gombot megjelenítsük, adatbázis adatoktól függően
logreg.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
});

profil.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
});

}