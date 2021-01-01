/*Prvi zadatak */
function VelikaSlika(x) {
  x.style.height = "200px";
  x.style.width = "200px";
 
 } 
  function NormalnaSlika(x) {
   x.style.height = "192px";
   x.style.width = "108px";
 }


/*Treci zadatak */
window.show= function(elementId) { 
  document.getElementById("prvagodina").style.display="none";
  document.getElementById("drugagodina").style.display="none";
 document.getElementById(elementId).style.display="block";
 }

function Prikazi(){
  document.getElementById("prvagodina").style.display="block";
  document.getElementById("drugagodina").style.display="block";
}


 /*Četvrti zadatak*/
// Ne radi za profesora Jurića jer matematiku u računarstvu 1 on i profesorica Turčinhodžić drže predmet zajedno
// a moja funkcija provjerava da li je tekst unutar ćelija isti a u slučaju TP-a i MUR1  nije.
newFunction();
function newFunction() {
  $('table').on('mouseover', 'td', function () {
    //Zadrzava tekst unutar ćelije preko koje se prešlo mišem u varijabli
    var textToMatch = $(this).text();
    // Petlja kojom se prolazi kroz td-ove
    $('td').each(function () {
      var text = $(this).text();
      if (textToMatch === text)
        $(this).parent().addClass('matching');
    });
  });
  $('table').on('mouseout', 'td', function () {
    $('.matching').removeClass('matching');
  });
}




 