
  let Pretraga = (function() {
      let predmeti;
      

      function pretragaPredmet(nazivPredmeta) {
          console.log("pretraga predmeta: function call");
          for (let i = 0; i < predmeti.length; i++) {
              predmeti[i].style.display = "";
          }
          if (nazivPredmeta === "") { return; }
          for (let i = 0; i < predmeti.length; i++) {
              if (!predmeti[i].getElementsByTagName("td")[0].innerText.toUpperCase().includes(nazivPredmeta.toUpperCase())) {
                  predmeti[i].style.display = "none";
              }
          }
      }
        function pretragaNastavnik() {
      input = document.getElementById("searchByTeacher");
      filter = input.value.toUpperCase();
      table = document.getElementById("table-classes");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[2];
          if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
              } else {
                  tr[i].style.display = "none";
              }
          }
      }
  }

      function pretragaGodina(godina) {
          let firstYear = document.getElementsByClassName("first-year");
          let secondYear = document.getElementsByClassName("second-year");
          for (let i = 0; i < firstYear.length; i++)
              firstYear[i].style.display = "";
          for (let i = 0; i < secondYear.length; i++)
              secondYear[i].style.display = "";
          if (parseInt(godina) == 1) {
              for (let i = 0; i < secondYear.length; i++)
                  secondYear[i].style.display = "none";
          } else if (parseInt(godina) == 2) {
              for (let i = 0; i < firstYear.length; i++)
                  firstYear[i].style.display = "none";
          } else {
              for (let i = 0; i < firstYear.length; i++)
                  firstYear[i].style.display = "";

              for (let i = 0; i < secondYear.length; i++)
                  secondYear[i].style.display = "";
          }
      }

      function postaviElemente(postavljeniPredmeti) {
          predmeti = postavljeniPredmeti;
          return predmeti;
      }

      return {
          pretragaPredmet: pretragaPredmet,
          pretragaNastavnik: pretragaNastavnik,
          pretragaGodina: pretragaGodina,
          postaviElemente: postaviElemente
      }
  }());