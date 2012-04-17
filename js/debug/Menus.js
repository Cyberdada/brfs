
/// <reference path="../jquery-1.7.1.min.js" />
"use strict";

var Menus = (function () {
    // Privates
    var Rows = [];
    var _currentControl =null;
   

    //Public functions
    return {
        editMenus: function () {
        },
        saveMenus: function () {  
        },

        loadMenus: function(){ 
          $( "#divmenu" ).html(
            $( "#menutemplate" ).render( PocoMenu )
            );
          $(".menuHead").each(function(ix,itm) {
            $(itm).button({icons: {
            primary: "ui-icon-triangle-1-s"}
            }).click(function () {  
              $('#the_menu' +parseInt(ix +1,10)).slideToggle('medium');
            });
          });
        }
  }
}
)();

  	$(document).ready(function () {
  	      $( "#divmenu" ).html(
            $( "#menutemplate" ).render( PocoMenu )
            );
          $( "#divmenu"  ).accordion({
              collapsible: true,
              autoHeight: false
    });
    //	Menus.loadMenus();

  });