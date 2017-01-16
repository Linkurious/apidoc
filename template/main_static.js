// Bootstrap Scrollspy
$(this).scrollspy({ target: '#scrollingNav', offset: 18 });

// Content-Scroll on Navigation click
$('.sidenav').find('a').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href');
  if ($(id).length > 0)
    $('html,body').animate({ scrollTop: parseInt($(id).offset().top) }, 400);
  window.location.hash = $(this).attr('href');
});

// Quickjump on Pageload to hash position
if(window.location.hash) {
  var id = window.location.hash;
  if ($(id).length > 0)
    $('html,body').animate({ scrollTop: parseInt($(id).offset().top) }, 0);
}

// bootstrap popover
$('a[data-toggle=popover]')
  .popover()
  .click(function(e) {
    e.preventDefault();
  });


$('.nav-tabs-examples a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});
