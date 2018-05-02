// Este es un ejemplo de como exportar funciones desde un archivo
// En index.js se importan estas funciones

export const saludo = () => {
  console.log('Hola mundo')
};

export const despedida = () => {
  console.log('Adiós mundo')
};

export const toggle = () => {
  $(function(){
    var togglemenu=$('#toggle-menu');
    var nav=$('#main-nav');
    togglemenu.on('click',function(){
      nav.add($('body')).toggleClass('mostrar');
  
    });
  });
};



