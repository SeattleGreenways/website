$(document).ready(function(){

	xively.setKey("XVHpObbqmtxoJlYgAotjEEbMMX7ON5N91OYNUTxHv2leJPdf");

	var feedID = 838532991,
	    datastreamID = "Count";

	xively.datastream.get(feedID, datastreamID, function(datastream) {
		makeMarker(datastream["current_value"]);

		xively.datastream.subscribe(feedID, datastreamID, function(event, datastream_updated) {	
			makeMarker(datastream_updated["current_value"]);
			console.log("Datastream Connected!"); 
			console.log(datastream_updated);
		});
	
	});
});

