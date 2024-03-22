$(document).ready(function () {
    $(document).on('change', '#file', function(event) {
        event.preventDefault();
        var file = this.files[0];

        if (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(e) {
                $('.avatar').css('background-image', 'url(' + e.target.result + ')');
            };
        } else {
            $('.avatar').css('background-image', 'url(' + e.target.result + ')');
        }
    });

    $(document).on('change', '#range', function(event) {
        event.preventDefault();
        var range = $(this).val();

        $('.avatar').css({
            'width': range + 'px',
            'height': range + 'px'
        });

        $('#size').html(range + 'px - ' + range + 'px');
    });
});