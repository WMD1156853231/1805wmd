define([], function () {
    return {
        aside: (function () {
            console.log('.gouwu');
            var $gw = $('.asidecontent');
            $gw.on('click', '.gouwu', function () {
                $gw.animate({
                    right: 0
                })
            });
        })()
    }
})