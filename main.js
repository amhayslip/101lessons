$('.check-answer').on('click', function () {
  $(this).closest('.exercise').find('.answer').toggleClass('show');
  $(this).toggleClass('close-answer');

  if ($(this).hasClass('close-answer')) {
    $(this).html('Close');
  } else {
    $(this).html('Check Your Answer');
  }
});