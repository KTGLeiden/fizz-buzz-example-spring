function colorTitle() {
    // alert('We are changing the color!');
    // document.getElementById('title').style.color = 'red';
    $('#title').css('color', 'red');
}

function toggleImage() {
    $('#picture').toggle();
}

function sendFizzBuzz() {
    const number = $('#number').val();
    if (!number) {
        alert('Please enter a number first!');
    } else {
        $.get('api/fizzbuzz/' + number, function (result) {
            $('#results').prepend('<p><b>' + number + '</b>: ' + result + '</p>');
        });
    }
}