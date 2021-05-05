// Set the location select element as "required" if the user sets the assignment as a physical assignment.
define(['jquery'], function($) {
    function load() {
        document.getElementById("id_assignsubmission_physical_enabled").addEventListener("click", function() {
            if (document.getElementById("id_assignsubmission_physical_enabled").checked === true) {
                document.getElementById("id_location").setAttribute("required", true);
            } else {
                document.getElementById("id_location").removeAttribute("required");
            }
// SU_AMEND START - Assignment (physical): Move element in focus beneath header
            document.addEventListener('invalid', function(e){
               $(e.target).addClass("invalid");
               $('html, body').animate({scrollTop: $($(".invalid")[0]).offset().top - 80 }, 0);
            }, true);
            document.addEventListener('change', function(e){
               $(e.target).removeClass("invalid");
            }, true);
// SU_AMEND END
        }, false);
    }
    return {
        enhanceSettings: function() {
            load();
        }
    };
});