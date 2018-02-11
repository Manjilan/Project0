// -----------------------------
// API
// -----------------------------
// define globals
<<<<<<< HEAD
$(document).ready(function(){
var offset = 4;
=======
var offset = 0;
>>>>>>> 341cb104ac93c435a040116c449ca29116b74d50
var marvel_endpoint = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f7237d2d6b84524fee8eba2943790ea6&hash=d8358291a51527982a889a850adab3ac";
  console.log("Let's get coding!");
  // CODE IN HERE!

  //Marvel
  $.ajax({
    method: "GET",
    url: marvel_endpoint,
    data: {
<<<<<<< HEAD
        limit: 4,
=======
        limit: 20,
>>>>>>> 341cb104ac93c435a040116c449ca29116b74d50
        offset: offset
    },
    success: function(response){
      $(response.data.results).each(function(){
<<<<<<< HEAD
        var front= `<div class="front"><img src="${this.thumbnail.path}/standard_fantastic.jpg"></div>`;
        var back= `<div class="back"><p>${this.name}<br>${this.description}</p></div>`;
        $("main").append(`<section class="card"> ${front} ${back}</section>`);
       })
=======
        $("main").append(`<div><p>${this.name}</p><img src="${this.thumbnail.path}/standard_fantastic.jpg"></div>`);
      })
>>>>>>> 341cb104ac93c435a040116c449ca29116b74d50
    },
      error: function(response){
        console.log('Dang it!');
      },

    })

<<<<<<< HEAD
// $(window).on('scroll', function(e) {
//       offset += 4;
//       $.ajax({
//         method: "GET",
//         url: marvel_endpoint,
//         data: {
//             limit: 4,
//             offset: offset
//         },
//         success: function(response){
//           $(response.data.results).each(function(){
//             var front= `<div class="front"><img src="${this.thumbnail.path}/standard_fantastic.jpg"></div>`;
//             var back= `<div class="back"><p>${this.name}<br>${this.description}</p></div>`;
//             $("main").append(`<section class="card"> ${front} ${back}</section>`);
//           })
//         }
//
//       })  })

      $("main").on("click",".card", function(){
        $(this).toggleClass("flip");
      })

})
=======
$(window).on('scroll', function(e) {
      offset += 20;
      $.ajax({
        method: "GET",
        url: marvel_endpoint,
        data: {
            limit: 20,
            offset: offset
        },
        success: function(response){
          $(response.data.results).each(function(){
            $("main").append(`<div><p>${this.name}</p><img src="${this.thumbnail.path}/standard_fantastic.jpg"></div>`);
          })
        }

      })  })
>>>>>>> 341cb104ac93c435a040116c449ca29116b74d50
