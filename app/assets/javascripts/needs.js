/* jquery
create table html
      <tr>
        <td>date</td>
        <td>text field OR rating</td>
        <td>submit button OR edit link</td>
      </tr>
      print row 7 times
*/

var moment = require('moment');
moment().format();


  //modify the Date class to create a new method called addDays. Pass in an integer
  //to add days to the current date.
  var date = new Date();
  Date.prototype.addDays = function(days) {
      this.setDate(this.getDate() + parseInt(days));
      return this;
  };

  //HTML table displaying fields for rating needs.
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
        '<input type="submit">' +
        '</form>' +
      '</td>' +
    '</tr>';

function formatDate(date1) {
  var date2 = date1.toString();
  date2 = date2.substr(0, 15);
  return date2;
}

//print rating fields under each status bar.
//add extra day to the current date for each loop.
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



//add click listener to all status bars. When a particular status bar is
//clicked, the form fields appear below.
 $('div.status_bar').on('click', function() {
    $(this).next().toggle( "fast" );
  });





