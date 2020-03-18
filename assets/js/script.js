/*https://jsfiddle.net/KyleMit/az1deo3r/*/
$(document).ready(function() {
	  // initialize table
    var t = $('#example').DataTable({
        paging:   false,
        bFilter: false, 
        bInfo: false
    });
    
 		// add row
    $('#addRow').click(function () {
        //t.row.add( [1,2,3] ).draw();
        var rowHtml = $("#newRow").find("tr")[0].outerHTML
        console.log(rowHtml);
        t.row.add($(rowHtml)).draw();
    });
 
});