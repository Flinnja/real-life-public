
display 5 status bars

test
user should be able to click status bar and it displays:
a table with 7 rows and 3 columns.
Each row represents a day of the current week.
Column 1 displays the day of the week.
Column 2 displays either a blank field for the user to submit a rating, or the submitted rating.
Column 3 is either a submit button or an edit link.

When the submit button is clicked, the calculate_average method in the need model is called. This updates the average rating and the status bar.
The status bar represents the current average rating for the week.

Display modified status bar.

cannot submit rating for a day in the future

