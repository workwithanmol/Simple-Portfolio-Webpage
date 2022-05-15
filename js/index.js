const hire = document.querySelectorAll('.hire_me')
const arrow = document.querySelectorAll('.fa-arrow-up');

hire.addEventListener('mouseover', function(e) {
    // console.log(e.target)
    if (e.target.className == "hire_me") {
        e.target.children.style.Color="#FFB742";
    }
});

hire.addEventListener('mouseout', function(e) {
    // console.log(e.target)
    if (e.target.className == "hire_me") {
        e.target.children.style.Color ="#212529";
    }
});