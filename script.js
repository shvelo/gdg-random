var teamList = $("#teams");
var teams = [
"Hello World 2.0", "LB Dev", "Tourist Guide", "Exception", "TSU State Uni", "Keyword", "ITI", "Young Programmers", "Tous"
];
var i = 0;
var showNext = function() {
	if(teams.length == 0){
		return;
	}
	var next = Math.floor(Math.random() * teams.length);
	teamList.append('<li id="team' + i + '"><span>' + teams[next] + '</span></li>');
	teams.splice(next,1);
	var item = teamList.find("#team" + i);
	setTimeout(function(){
		item.addClass("show");
		setTimeout(showNext, 2000);
		setTimeout(function(){
			if(teams.length == 0) clearInterval(interval);
		}, 3000);
	}, 10);
	i++;
}
var interval;
$("#overlay").click(function(){
	interval = setInterval(function(){
		$("body").mCustomScrollbar("scrollTo", "bottom", {scrollInertia: 80});
	}, 10);
	$("#overlay").fadeOut("slow", showNext);
})
$("body").mCustomScrollbar({
	autoHideScrollbar: false,
	scrollInertia: 60,
	contentTouchScroll: true,
	scrollButtons: {
	    enable: true
	},
	theme: "light",
	advanced:{
        updateOnContentResize: true,
        updateOnBrowserResize: true
    }
});