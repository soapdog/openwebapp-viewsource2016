var config = {
	eventName: "View Source 2016",
	description: "Some handy links related to the conference topics",
	emailLabel: "e-mail",
    progressLabel: "Sending:",
	actionButtonLabel: "Send information",
	goBackButtonLabel: "Back",
    emailIntro: `Oi,\n\nHere is the information you requested during View Source 2016.\n\n`,
    emailSubject: "[View Source 2016] Handy Links",
	kpis: [
		{id: "webcompat", name: "Web Compat"},
        {id: "devtools", name: "Firefox Dev Tools"},
		{id: "webvr", name: "WebVR"},
		{id: "gamedev", name: "Game Development"},
        {id: "community", name: "Project Magnet"},
        {id: "community", name: "Joining Mozilla Community"}
		
	],
	successMsg: "Just sent you a message with your choosen topics!",
	errorMsg: "Can't send the info :-("
}
