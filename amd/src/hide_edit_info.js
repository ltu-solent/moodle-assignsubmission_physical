/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['jquery'], function($) {
    return {
        init: function() {
            if ($( ".assignsubmission-physical-buttons" )[0]) {
                $(".alert alert-info").css("display", "none");
                $(".alert-info + div").css("color", "#fff !important");
            }
        }
    };
});