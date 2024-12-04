window.onload = function() {
    logged();
}


function logged()
{
const logreg=document.getElementById('LogReg');
const profil=document.getElementById('Logged');


//ide if es elágazás kell, hogy ha be van jelentkezve, akkor a logreg gombot elrejtsük, a profil gombot megjelenítsük, adatbázis adatoktól függően
logreg.addEventListener('click',function(){
    logreg.style.display="none";
    profil.style.display="block";
});

profil.addEventListener('click', function(){
    logreg.style.display="block";
    profil.style.display="none";
});

}