//Hide all topics
$(document).on("change","#hide",function (e) {
    e.preventDefault();
     ($(this).is(':checked')) ?  $("#topic-list ul").hide() :  $("#topic-list ul").show();
});

// Add topic to list

$(document).on("submit","#add-topic", function (e) {
    e.preventDefault();
    const newTopic = $("#add-topic input:last").val();
    if (newTopic != "") {
        $("#topic-list ul").prepend("<li><span class='name'>" + newTopic + "</span></li> ");
        $("#topic-list ul li:first .name").css("text-transform", "capitalize");
        $("#topic-list ul li:first").append("<span class='delete'>delete</span>");
    }
    $("#add-topic input:last").val("");
});

// Delete list element with button 

$(document).on("click",".delete", function (e) {
    e.preventDefault();
    $(this).parent().remove();
});

// Search input 

$("#search-topics input").on("keyup", function (e) {
    const searchValue = $(this).val().toLowerCase();
    const topics = $("#topic-list ul li span.name");
    topics.filter( function(){
         ($(this).text().toLowerCase().indexOf(searchValue) != -1) ? $(this).parent().show() : $(this).parent().hide();
    })
});