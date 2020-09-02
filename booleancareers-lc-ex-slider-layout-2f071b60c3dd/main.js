$(document).ready(function () {

// dichiaro variabili

  var destra = $(".next");
  var sinistra = $(".prev");

// funzione per scorrere in avanti

  destra.click(function () {
    var imgActive = $("img.active");
    imgActive.removeClass("active");
    if (imgActive.hasClass("last")) {
      $("img.first").addClass("active");
    }else {
      var nextImg = imgActive.next();
      nextImg.addClass("active");
    }
  })

// funzione per scorrere indietro

  sinistra.click(function () {
    var imgActive = $("img.active");
    imgActive.removeClass("active");
    if (imgActive.hasClass("first")) {
      $("img.last").addClass("active");
    }else {
      var nextImg = imgActive.prev();
      nextImg.addClass("active");
    }
  })

// funzione per scorrere indierro con freccia

$(document).keydown(function(e){
      if (e.keyCode == 37) {
      var imgActive = $("img.active");
      imgActive.removeClass("active");
      if (imgActive.hasClass("first")) {
        $("img.last").addClass("active");
      }else {
        var nextImg = imgActive.prev();
        nextImg.addClass("active");
      }
    }
  })

// funzione per scorrere in avanti con freccia

$(document).keydown(function(e){
    if (e.keyCode == 39) {
    var imgActive = $("img.active");
    imgActive.removeClass("active");
    if (imgActive.hasClass("last")) {
      $("img.first").addClass("active");
    }else {
      var nextImg = imgActive.next();
      nextImg.addClass("active");
    }
  }
  })
});
