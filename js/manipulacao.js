$(document).ready(function () {
  // Classes
  $('h1').addClass('text-center');
  $('h1').removeClass('text-center');
  console.log($('h1').hasClass('text-center'));

  //   // Atributos
  $('.btn').attr('disabled', true);
  $('.btn').removeAttr('disabled');

  // Manipulando o HTML do elemento
  console.log($('#conteudo').html());
  //   $('#conteudo').html($('p'));

  // Manipulando valores de formulários
  $('input').val('valor');
  console.log($('input').val());

  //   // Adicionando elementos
  //   var newElement = $('div');
  //   $('#conteudo').append(newElement);

  //   // Removendo elementos
  //   $('#conteudo').remove();

  //   // Ocultando elementos
  //   $('#conteudo').hide();

  //   // Exibindo elementos
  //   $('#conteudo').show();
});
