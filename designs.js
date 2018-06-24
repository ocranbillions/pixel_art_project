$(function(){
    var height, width;
    // Select color input
    // Select size input

    // When size is submitted by the user, call makeGrid()    
    $('input[type=submit]').on('click', function(event){
        //remove previous table if any
        $('tr').remove();

        height = Number($('#inputHeight').val());
        width = Number($('#inputWeight').val());

        event.preventDefault();
        makeGrid();
    });

    //using jquery's event delegation to listen to just one element (td) 
    //instead of setting up listeners for all the td's
    $('table').on('click', 'td', function() {
        var chosenColor = $('#colorPicker').val();

        var whiteBackground = "rgba(0, 0, 0, 0)";

        if($(this).css('backgroundColor') === whiteBackground) {
            $(this).css('background', chosenColor);
        }else{            
            $(this).css('background', whiteBackground);
        }
    });


    
    function makeGrid() {
        var table, row, eachRow, cell;

        table = document.getElementById("pixelCanvas");
        for(row = 0; row < height; row++) {
            eachRow = table.insertRow(row);

            for(cell = 0; cell < width; cell++) 
                eachRow.insertCell(cell);            
        }


    }

});
