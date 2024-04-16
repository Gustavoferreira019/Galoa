function expandirResumo() {
  var resumo = document.getElementById('resumo');
  var additionalText = document.querySelector('.additional-text');
  var btnShowMore = document.querySelector('.btn-show-more');

  if (additionalText.style.display === 'none') {
    additionalText.style.display = 'inline';
    btnShowMore.textContent = 'ver menos';
    resumo.style.height = '480px';
  } else {
    additionalText.style.display = 'none';
    btnShowMore.textContent = 'ver mais';
    resumo.style.height = '220px';
  }
}
