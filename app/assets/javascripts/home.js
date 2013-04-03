$("document").ready(function(){
  $("#cleanliness a").click(function(){
    $("#cleanliness a").removeClass('active');
    $(this).addClass('active');
  });
  $("#availability a").click(function(){
    $("#availability a").removeClass('active');
    $(this).addClass('active');
  });
  $("#counter a").click(function(){
    $("#counter a").removeClass('active');
    $(this).addClass('active');
  });
  $("#price a").click(function(){
    $("#price a").removeClass('active');
    $(this).addClass('active');
  });
  
  $("#commentSubmit").click(function(){
    var commentValue = $("textarea#commentVal").val();
    var myString = "<div class='comment-item group'><div class='profile-thumbnail small'><img src='assets/avatar2.png'></div><h3 class='comment-user'>You</h3>"+commentValue+"</div>";
    $("#commentContainer").html(myString);
    $("textarea#commentVal").val('');
  });
});