/**
 * Created by julienbrault on 15-03-07.
 */
alert("bienvenue!");

var age= prompt("Quel est votre âge?");

console.log("Je comprends que votre âge, en nombre d'année terrestre, est"+"age");


var nombre= prompt("Entrez un nombre entre 1 et 100");

if (nombre>= 1 && nombre<=100)
{alert("merci")}

if (nombre<1 || nombre>100)
{alert("mauvaise entrée")}



var mys=24;

var essai1= prompt("Essayez de deviner le nombre que j'ai choisi entre 1 et 100");

if (essai1<1 || essai1>100)
{alert("mauvaise entrée")}

if (essai1==mys)
{alert("Vous avez trouvé le nombre")}

if (essai1<mys && essai1>1)
{alert("Votre nombre est trop petit.")}

if (essai1>mys && essai1<100)
{alert("Votre nombre est trop grand.")}


for(var y=0;y<=4;y++) {
    var mys=24;

    var essai1= prompt("Vous avez 5 esssais pour deviner le nombre que j'ai choisi entre 1 et 100");

    if (essai1<1 || essai1>100)
    {alert("mauvaise entrée")}

    if else (essai1==mys);
    {alert("Vous avez trouvé le nombre"); break}


    if else (essai1<mys && essai1>1);
    {alert("Votre nombre est trop petit.")}

    if else (essai1>mys && essai1<100);
    {alert("Votre nombre est trop grand.")}
}