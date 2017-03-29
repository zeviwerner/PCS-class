(function () {
    "use strict";

    let commentBtn = $('#commentBtn'),
        commentForm = $('#commentForm');
        
    commentBtn.click(() => {
        commentForm.show();
    });

})();