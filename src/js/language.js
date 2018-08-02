function Language(language, languageSelected, listClass, listLiClass) {
    var $language = $('.' + language);
    var $list = $('.' + listClass);
    var $li = $('.' + listLiClass);
    var $languageSelected = $('.' + languageSelected);

    function replaceElement(oldElem, newElem) {
        var safe = oldElem.html();
        oldElem.html(newElem.html());
        newElem.html(safe);
    }


    $language.click(function(event) {
        $list.slideToggle(300);
    });

    $list.click(function(event){
        var target = event.target;
        while (!$(target).hasClass(listLiClass)) {
            target = target.parentNode;
        }
        replaceElement( $languageSelected, $(target));
    });
}