// -----------------------------
// API
// -----------------------------
// define globals
var offset = 0;
var marvel_endpoint = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f7237d2d6b84524fee8eba2943790ea6&hash=d8358291a51527982a889a850adab3ac";
  console.log("Let's get coding!");
  // CODE IN HERE!

  //Marvel
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
    },
      error: function(response){
        console.log('Dang it!');
      },

    })

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
