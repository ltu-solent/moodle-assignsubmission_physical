/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['jquery'], function($) {
    return {
        init: function() {
            if ($( ".assign_physical" ).length) {
                if ($(".btn.btn-secondary").length) {
                    $(".btn.btn-secondary").html('Get Cover Sheet');
                    $(".btn.btn-secondary").css("color", "!important");
                }
            }
        }
    };
});