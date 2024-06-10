document.addEventListener('DOMContentLoaded', function() {
    var fadeTexts = document.querySelectorAll('.fadeText');
    fadeTexts.forEach(function(element, index) {
        setTimeout(function() {
            element.style.opacity = 1;
        }, index * 1000); 
    });
});


