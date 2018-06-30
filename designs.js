/*
 *
 *
 *
*/

let height, width, selectedColor, target, targetColor;

const tbl = $('#pixelCanvas');
const button = $('input[type=submit]');
const colorPicker = $('#colorPicker');
const noColor = "rgba(0, 0, 0, 0)";	//Initial value of td (cell) backroundColor


//When form is submitted
button.on('click', function(event){
    event.preventDefault();

    //Remove previous tr & td if any
    tbl.children().remove();

    height = $('#inputHeight').val();
    width = $('#inputWeight').val();

    makeGrid();
});


//When cell is clicked
tbl.on('click', 'td', function(evt) {
	//Get selected color
    selectedColor = colorPicker.val();
    //Get clicked cell
    target = $(evt.target);
    //Get color of clicked cell
    targetColor = target.css('backgroundColor');
    
    if(targetColor === noColor) 
        //Set cell color on 1st click
        target.css('background', selectedColor);
    else  
        //Revert to no color on 2nd click
        target.css('background', noColor); 
});



//===== FUNCTION DECLARATIONS =====//

function makeGrid() {
    for(let row = 0; row < height; row++) {
    	//Create row
        tbl.append("<tr></tr>");

        for(let cell = 0; cell < width; cell++)
        	//Create cells for each row
            $("table tr").eq(row).append("<td></td>"); 
    }
}

