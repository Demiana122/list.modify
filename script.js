$(document).ready(function(){
    
    $('#addItemButton').click(function(){
        var newItem = $('#newItem').val();
        if(newItem) {
            $('#itemList').append('<li>' + newItem + '<span class="deleteItem">x</span></li>');
            $('#newItem').val(''); 
        }
    });

    $(document).on('click', '.deleteItem', function(){
        $(this).parent().remove();
    });

  
    $('#newItem').keypress(function(event){
        if(event.which == 13) {
            $('#addItemButton').click();
        }
    });
});
