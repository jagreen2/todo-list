
var state = {
	items: []
}


$(function() {
	$('#add-item').click(function(event){
		var inputItem = $('#todo-input').val();
		state.items.push(inputItem);
		var li = $(`<li>${inputItem}</li>`);
		
		var ul = $('#todo');
		ul.append(li);
	});

	$('#print').click(function(event) {
		alert(state.items)
	})
});


