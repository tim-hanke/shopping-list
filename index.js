function handleList() {
    // I'm going to need an event handler that listens for
    // a submission of the #js-shopping-list-form and adds
    // a filled out <li> to the .shopping-list <ul>
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        // I copied over the existing HTML then enclosed it in quotes
        $('.shopping-list').append(
            '<li>'+
                '<span class="shopping-item">'+$('#shopping-list-entry').val()+'</span>'+
                '<div class="shopping-item-controls">'+
                '<button class="shopping-item-toggle">'+
                    '<span class="button-label">check</span>'+
                '</button>'+
                '<button class="shopping-item-delete">'+
                    '<span class="button-label">delete</span>'+
                '</button>'+
                '</div>'+
            '</li>'
        );
        // this clears the text input
        $('#js-shopping-list-form')[0].reset();
    });

    // I need to target the whole .shopping-list, but with a selector
    // for .shopping-item-toggle, so that the new items get triggered
    // by this event selector
    $('.shopping-list').on('click', '.shopping-item-toggle', function() {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    // and also a handler for the delete button
    $('.shopping-list').on('click', '.shopping-item-delete', function() {
        $(this).closest('li').remove();
    });


};

handleList();