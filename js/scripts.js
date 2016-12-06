
$.jribbble.setToken('a6106cf897b31aee84b2f1234e0eec9ec7a9c855c74373186ba6966bff1a2bac');

$.jribbble.users('aleksili').shots({per_page: 6}).then(function(shots) {
  var html = [];
  
  shots.forEach(function(shot) {
    html.push('<li class="shots--shot">');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img class="work__item" src="' + shot.images.normal + '">');
    html.push('</a></li>');
  });
  
  $('.shots').html(html.join(''));
});
