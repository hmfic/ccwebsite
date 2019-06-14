$(document).ready(function() {

        // process the form
        $('form').submit(function(event) {

            // get the form data
            // there are many ways to get this data using jQuery (you can use the class or id also)
            var formData = {
                'name'              : $('input[name=name]').val(),
                'email'             : $('input[name=email]').val(),
                'message'           : $('textarea[name=message]').val()
            };

            // process the form
            $.ajax({
                type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
                url         : '/process.php', // the url where we want to POST
                data        : formData,
                dataType    : 'json', // what type of data do we expect back from the server
                encode      : true
            })
                // using the done promise callback
                .done(function(data) {

                    // log data to the console so we can see
                    console.log(data); 

			$('#idButton').prop('disabled', true);
			$('#idButton').text('Message sent - thanks!');

                    // here we will handle errors and validation messages
                });

            // stop the form from submitting the normal way and refreshing the page
            event.preventDefault();
        }); //end submit

// begin new section

$('#contactForm').bootstrapValidator({
	container: 'tooltip',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                message: 'The name field is not valid',
                validators: {
                    notEmpty: {
                        message: 'The name field is required and cannot be empty'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The name field must be more than 6 and less than 30 characters long'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email field is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
	   message: {
                validators: {
                    notEmpty: {
                        message: 'A message is required and cannot be empty'
                    }
                }
            },
        }
    });
// end new section

$('#main-nav li a').on('click', function() {
    $(this).parent().parent().find('.active').removeClass('active');
    $(this).parent().addClass('active').css('font-weight', 'bold');
});

    });
