$('#map').usmap({
  // The click action
  click: function(event, data) {
    $('#clicked-state')
      .text('You clicked: '+data.name);
  }
});