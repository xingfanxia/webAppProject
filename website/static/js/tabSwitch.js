$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  var target = $(e.target).attr("href") // activated tab
  alert(target);
});

// function getSearchTermPlayer() {
//     var keyword = document.getElementById('srch-term-player');
//     alert(keyword.value);
// }