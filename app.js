"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();

        let input = $("input");
        let value = input.value.trim();
        if (value !== "") {
            let div = $("div");
            for (let i = 0; i < value.length; i++) {
                let span = $("<span></span>");
                span.text(value[i]);
                div.append(span);       
            }
        
        }
        input.val("");
    
    });
});  
