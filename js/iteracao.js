$(document).ready(function () {
  let listItens = $('ul li');

  console.log(listItens);

  listItens.addClass('text-center');

  listItens.each(function (index, elemento) {
    console.log(index, elemento);

    $(elemento).removeClass('text-center');
  });
});
