$(document).ready(function(){
  var activeCSS = function(tab){
  
  $(tab).click(function(){
    $("li").removeClass("active");
    $(tab).addClass("active")})};
                  
  activeCSS("#online");
  activeCSS("#offline");
  activeCSS("#all");
  
    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
  var onchannels = [];
  var offchannels = [];
  var allchannels = [];
  channels.forEach(function(channel){
 var url = function(info,name){
  return "https://wind-bow.gomix.me/twitch-api/" +info +"/" + name + "?callback=?";};
   $.getJSON(url("streams", channel),function(data){
     if (data.stream !== null){
       var statusID = "chOnline";
       var statusClass ="glyphicon glyphicon-ok-sign"
     }
     else{
       var statusID = "chOffline";
       var statusClass = "glyphicon glyphicon-remove-sign";
     }
   
  $.getJSON(url("channels",channel), function(data) {
    //console.log(data);
    var logo = data.logo;
    var chName = data.name;
    //console.log(logo, chName)
    var html= "<a href='https://www.twitch.tv/"+ chName + "' target='_blank'><div class='" + statusID + " chnls' ><img src='" + logo +"'/>" + chName +"<span id='chStatus' class='" + statusClass + "'>  </span> </div></a>";
    $("#mainD").prepend(html)
    
});
   });
    
    $("#all").click(function(){
      $(".chnls").removeClass("hide");
    })
    $("#online").click(function(){
     $(".chnls").removeClass("hide"); $(".chOffline").addClass("hide");
    });
    $("#offline").click(function(){
      $(".chnls").removeClass("hide");
      $(".chOnline").addClass("hide");
    });
    $("#searchBox").keyup(function(){
      var searchval = $("#searchBox").val();
      $(".chnls").addClass("srchhide");
      $(".chnls:contains('" + searchval + "')").removeClass("srchhide");
      
    })
  })   
})