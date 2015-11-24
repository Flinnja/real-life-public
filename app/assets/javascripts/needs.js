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
  var need = $(this).attr("id");

  var ratingTable1 =
    '<div id="goals_rating_box" class="rating_box">' +
    '<table id="rating_box_table">';
  var ratingTable2 =
    '</table>' +
    '</div>';

  var ratingRows =
    '<tr>' +
      '<td>' + date + '</td>' +
      '<td>' +
        '<%= form_for :need do |f| %>' +
          '<p>Rating</p>' +
          '<%= f.text_field :goals_average %>' +
          '<%= f.submit %>' +
        '<% end %>' +
      '</td>' +
    '</tr>';

var createRatingRows = "";


function printRatingRows() {
  for (i = 0; i < 7; i++) {
    createRatingRows += ratingRows;
    date += 1;
  }
  return createRatingRows;
}

  $('.status_bar').on('click', function() {
    $(this).html(
      ratingTable1 + printRatingRows() + ratingTable2;
    );
  });
});
