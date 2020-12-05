
$( document ).ready(function() {
  $("#error").hide()
})

$("#myform").submit(function(e) {
alert("numbwe")
    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);

    $.ajax({
           type: "POST",
           url: 'https://api.bugs2bucks.com/api/v1/login',
           data: form.serialize(), // serializes the form's elements.
           success: function(data)
           {

               document.getElementById('sucess').innerText=data.message
               window.location="/tables";
           },
           error:function(err){
 console.log(err.status)
             var dat=JSON.parse(err.responseText)


if(err.status==422){
  document.getElementById('error').innerText=dat.email.message;

}
else{
  document.getElementById('error').innerText=dat.message;

}
          $("#error").show()
           }
         });


});
$.ajax({
   type: "GET",
   url: "https://reqres.in/api/users?page=2",
   success: function(response){
alert("enter the nuber")
 var trHTML = '';
var items = response.data

 items.forEach(function(value) {
var a="test"
   trHTML += '<tr><td>'+"<div style=' display:flex; justify-content:space-between; margin-left:auto' >" + value.email+ "<div><button style='border:none; background:none; '><i class='fa fa-check' style='color:green;'></i></button><button  style='border:none; background:none'><i class='fa fa-window-close' style='color:red;'></i></button></div>" +'</td><td>'  + value.first_name + '</td><td>' + value.last_name+ '</td></tr>';
   console.log(value)
});
  $('#datainfo').append(trHTML);
},

error:function(err){

},
});
