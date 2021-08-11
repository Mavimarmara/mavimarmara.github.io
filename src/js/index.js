import '../scss/index.scss';

$(document).ready(function() {
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
        var file = '../src/html/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});