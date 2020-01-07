/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['jquery'], function($) {
 
    return {
        init: function() {
            if ($( ".assignsubmission-physical-submission" ).length) {
                $("#id_submitbutton").css("display", "none");
            }
        }
    };
});

