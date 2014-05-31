$(document).ready(function(){

	xively.setKey("XVHpObbqmtxoJlYgAotjEEbMMX7ON5N91OYNUTxHv2leJPdf");

	var feedID = 838532991;

	xively.datastream.get(feedID, function(datastream) {
		console.log(datastream);
	

		xively.datastream.subscribe(feedID, function(event, datastream_updated) {	console.log(datastream_updated); });
	
	});
});

