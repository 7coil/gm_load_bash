var startTime = new Date();

function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode ) {
	consoleWrite("login as: " + steamid);
	consoleWrite(steamid + "@" + gamemode + "'s password:");
	consoleWrite();
	consoleWrite("------------------------------------------------------------");
	consoleWrite();
	consoleWrite(servername + " 2.3rc2-b");
	consoleWrite("Total Player slots allocatable: " + maxplayers);
	consoleWrite("Server map found: Setting to " + mapname);
	consoleWrite();
	consoleWrite("------------------------------------------------------------");
	consoleWrite();
	consoleWrite(" * Documentation: http://moustacheminer.com/");
	consoleWrite();
	consoleWrite("------------------------------------------------------------");
	consoleWrite();
	consoleWrite("This server set up by MOUSTACHEMINER is a free server, the exact distribution terms for each addon and script are descriped in the documentation found above.");
	consoleWrite("moustacheminer.com comes with ABSOLUTELY NO WARRANTY to whatever happens to your computer, to the extent permitted by applicable law.");
}

function DownloadingFile( filename ) {
	consoleWrite("[" + getTime() + "] " + "Downloading " + filename);
}

function SetStatusChanged( status ) {
	consoleWrite("[" + getTime() + "] " + status ); 
}

function consoleWrite( input ) {
	if (input) {
		$("#output").append( input + "</br>" );
	} else {
		$("#output").append( "</br>" );
	}
	
	$(window).scrollTop($(document).height());
}

function getTime() {
	var currTime;
	currTime = new Date();
	return currTime.getTime() - startTime.getTime();
}
