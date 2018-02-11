// -----------------------------
// API
// -----------------------------
// define globals
$(document).ready(function(){
var offset = 0;
var marvel_endpoint = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=f7237d2d6b84524fee8eba2943790ea6&hash=d8358291a51527982a889a850adab3ac";
  console.log("Let's get coding!");
  // CODE IN HERE!

  //Marvel
  $.ajax({
    method: "GET",
    url: marvel_endpoint,
    data: {
        limit: 4,
        offset: offset
    },
    success: function(response){
      $(response.data.results).each(function(){
        var front= `<div class="front"><img src="${this.thumbnail.path}/standard_fantastic.jpg"></div>`;
        var back= `<div class="back"><p>${this.name}<br>${this.description}</p></div>`;
        $("main").append(`<section class="card"> ${front} ${back}</section>`);
       })
    },
      error: function(response){
        console.log('Dang it!');
      },

    })


$("#next").on('click', function(e) {
      $("main").empty();
      offset += 4;
      $.ajax({
        method: "GET",
        url: marvel_endpoint,
        data: {
            limit: 4,
            offset: offset
        },
        success: function(response){
          $(response.data.results).each(function(){
            var front= `<div class="front"><img src="${this.thumbnail.path}/standard_fantastic.jpg"></div>`;
            var back= `<div class="back"><p>${this.name}<br>${this.description}</p></div>`;
            $("main").append(`<section class="card"> ${front} ${back}</section>`);
          })
        }

      })  })

      $("main").on("click",".card", function(){
        $(this).toggleClass("flip");
      })

})
