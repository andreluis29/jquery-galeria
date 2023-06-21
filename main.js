$(function() {
  $('header button').on('click', function() {
    $('form').slideDown();
  });

  $('form button[type="reset"]').on('click', function() {
    $('form').slideUp();
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    const urlImage = $('#urlImage').val();
    const novoItem = $('<li style="display: none;"></li>');
    $(`<img src="${urlImage}" >`).appendTo(novoItem);
    $(`<div class="overlay-imagem-link"><a href="${urlImage}title="Ver imagem em tamanho real "target="_blank">Ver imagem em tamanho real</a></div>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(2000);
    $('input').val('');
  });
});
