
  var date = new Date();
  Date.prototype.addDays = function(days) {
      this.setDate(this.getDate() + parseInt(days));
      return this;
  };

  var ratingTable =
      '<table class="rating_box">' +
        '<tr>' +
          '<td>' +
            '<p><b>Date</b></p>' +
          '</td>' +
          '<td>' +
            '<p><b>Rating</b></p>' +
          '</td>' +
        '</tr>' +
      '</table>';

  var ratingRows =
    '<tr>' +
      '<td class="rating_date"></td>' +
      '<td>' +
        '<form>' +
        '<input type="text">' +
        '<input class="needsSubmitButton" type="submit">' +
        '</form>' +
      '</td>' +
    '</tr>';

function formatDate(date1) {
  var date2 = date1.toString();
  date2 = date2.substr(0, 15);
  return date2;
}

function printRatingBox() {
  var tempDate = new Date();
  $('.rating_container').html(ratingTable);
  for (var i = 0; i < 7; i++) {
    date = new Date();
    $('.rating_box').append(ratingRows);
    $('.rating_date').html(formatDate(date.addDays(i)) );
    $('td.rating_date').removeAttr('class');
  }
}

printRatingBox();

 $('div.status_bar').on('click', function() {
    $(this).next().toggle( "fast" );
  });
