function clicked(e) {
	e.preventDefault();
	ga("send", "event", "links", "click");
}
$(".links").click(clicked);
