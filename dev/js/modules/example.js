// Este es un ejemplo de como exportar funciones desde un archivo
// En index.js se importan estas funciones

export const saludo = () => {
  console.log('Hola mundo')
};

export const despedida = () => {
  console.log('Adiós mundo')
};

export const toggle = () => {
  $(function () {
    var togglemenu = $('#toggle-menu');
    var nav = $('#main-nav');
    togglemenu.on('click', function () {
      nav.add($('body')).toggleClass('mostrar');

    });
  });
};

export const fixed = () => {
  $(function () {

    $(window).scroll(function () {
      var windowHeight = $(window).scrollTop();
      var contenido2 = $("#filtro").offset();
      contenido2 = contenido2.top;
      console.log(windowHeight)
      if (windowHeight >= 550) {

        $("#filtro").css("position", "fixed");
        $("#filtro").css("margin-top", "0px");
      } else if (windowHeight <= 550) {
        $("#filtro").css("position", "inherit");
        $("#filtro").css("margin-top", "0px");
      } 

      if (windowHeight >= 1700) {

        $("#filtro").css("margin-top", "-700px");
    
      } 
    });
  });
};
