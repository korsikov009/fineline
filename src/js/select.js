function Select () {

    this.createOptions = function(array, classSelect, classOption) {
        var $select = $("." + classSelect);
        var option = document.createElement('option');
        for (var i = 0; i < array.length; i++) {
            $select.append("<option>" + array[i] + "</option>")
                .addClass("." + classOption)
                .attr('value', array[i]);
        }
    }

    function isItDown(viewport) {
        var heightOfList = 0;

        viewport.children().each(function() {
            heightOfList += $(this).height();
        });

        return viewport.height() + viewport.scrollTop() - heightOfList;
    }

    function reverseArrow ($viewport, $parent) {

        if (!isItDown($viewport)) {
            $parent.addClass('down');
        } else {
            $parent.removeClass('down');
        }
    }

    this.reverseArrowDown = function(viewport) {
        var $viewport = $(viewport);
        var $parent = $viewport.parent();
        $viewport.scroll( function() {
            reverseArrow($viewport, $parent);
        });
    }
}