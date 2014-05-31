$(document).ready(function(){

	xively.setKey("XVHpObbqmtxoJlYgAotjEEbMMX7ON5N91OYNUTxHv2leJPdf");

	var feedID = 838532991,
			datastreamID = "Count";

	xively.datastream.get(feedID, datastreamID, function(datastream) {
		console.log(datastream);
	

		xively.datastream.subscribe(feedID, datastreamID, function(event, datastream_updated) {	console.log(datastream_updated); });
	
	});
});

