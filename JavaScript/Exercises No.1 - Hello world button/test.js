function say_hi() {
    var fname = document.getElementById('first_name').value;
    var lname = document.getElementById('last_name').value;

    var html = 'Hello' + ' ' + fname + ' ' + lname;

    document.getElementById('result').innerHTML = html;
}