/* jquery
create table html
      <tr>
        <td>date</td>
        <td>text field OR rating</td>
        <td>submit button OR edit link</td>
      </tr>
      print row 7 times
*/
$(document).on('page:load', function() {
  console.log("test");
  var date = new Date(day, month, year);
  var need = $(this).attr("id");

  var ratingBoxTable1 =
    '<div id="goals_rating_box" class="rating_box">
      <table id="rating_box_table">'
  var ratingBoxTable2 =
    '</table>
    </div>';

  var ratingBoxRows =
    '<tr>
      <td>' + date + '</td>
      <td>
        <form>
          <p>Rating</p>
          <input type="text">
          <input type="submit">
        </form>
      </td>
    </tr>';

  $('.status_bar').on('click', function() {
    $(this).html(ratingBoxTable1);
    for (i = 0; i < 7; i++) {
      $(this).html(ratingBoxRows);
      date += 1;
      $(this).html(ratingBoxTable2);
    }
  });
  $('#goals').css();
});
