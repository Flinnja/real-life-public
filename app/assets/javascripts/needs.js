/* jquery
create table html
      <tr>
        <td>date</td>
        <td>text field OR rating</td>
        <td>submit button OR edit link</td>
      </tr>
      print row 7 times
*/

$(document).ready( function() {
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
      '<td></td>' +
      '<td>' +
        '<form>' +
        '<input type="text">' +
        '<input type="submit">' +
        '</form>' +
      '</td>' +
    '</tr>';

  var j = 0;
  function printRatingRows() {
    var temp = "";
    for (var i = 0; i < 7; i++) {
      temp = temp.concat(ratingRows);
    }
    ratingRows = temp;
  }

  function printRatingBox() {
    $('.rating_container').html(ratingTable);
    $('.rating_box').append(ratingRows);
  }

// var nextColumn = "";
//   function addDates() {
//     $('.rating_box tr').first().next().
//     nextColumn = $(this).next();
//   }
//     $('tr').next().html(date.addDays(1));
//     j += 1;
//   }


  $('div.status_bar').on('click', function() {
    $(this).next().toggle();
  });

printRatingRows();
printRatingBox();

});






