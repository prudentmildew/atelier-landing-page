(function () {

    var resizeTimeout;
    var banner;

    document.addEventListener("DOMContentLoaded", function () {
        banner = document.getElementById("welcome-banner");
        window.addEventListener("resize", resizeThrottler, false);
        resizeHandler();
    });

    function resizeThrottler() {
        if (!resizeTimeout) {
            resizeTimeout = setTimeout(function () {
                resizeTimeout = null;
                resizeHandler();
            }, 66);
        }
    }

    function resizeHandler() {
        banner.style.height = window.innerHeight + 'px';
    }

})();
