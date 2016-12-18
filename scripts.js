function addListItem(){
	var text = $("#new-text").val();
	$("#todolistM").append('<li>'+text+ 
		'<button class="delete">Delete</button></li>');
	$("#new-text").val('');
}

function addListItem2(){
	var text2 = $("#new-text2").val();
	$("#todolistT").append('<li>'+text2+
		'<button class="delete">Delete</button></li>');
	$("#new-text2").val('');
}

function addListItem3(){
	var text3 = $("#new-text3").val();
	$("#todolistW").append('<li>'+text3+' <button class="delete">Delete</button></li>');
	$("#new-text3").val('');
}

function addListItem4(){
	var text4 = $("#new-text4").val();
	$("#todolistTh").append('<li>'+text4+' <button class="delete">Delete</button></li>');
	$("#new-text4").val('');
}

function addListItem5(){
	var text5 = $("#new-text5").val();
	$("#todolistF").append('<li>'+text5+' <button class="delete">Delete</button></li>');
	$("#new-text5").val('');
}

function deleteItem(){
	$(this).parent().remove();
}


$(function(){
	$("#add").on('click', addListItem); 
	$("#add2").on('click', addListItem2);
	$("#add3").on('click', addListItem3);
	$("#add4").on('click', addListItem4);
	$("#add5").on('click', addListItem5);

	$(document).on('click', ".delete", deleteItem);
});