//TODO: animate with fade
function showHist(a) {
	var sectionid = '';
	sectionid = a + '-history';
	$('#' + sectionid).removeClass('closed');
	if (a == 'nh') {
		$('#alum-history').addClass('closed');
	}
	else {
		$('#nh-history').addClass('closed');
	}
}
