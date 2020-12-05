
$("#signupform").submit(function(e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
           type: "post",
           url: "https://api-dev.bugs2bucks.com/api/v1/signup",
           data: form.serialize(), // serializes the form's elements.
           success: function(data)
           {
          
           },

           error: function(err)
          {
            var textarea=JSON.parse(err.responseText)
        document.getElementById('text').innerText = textarea.message.password.message

        },


         });


});
