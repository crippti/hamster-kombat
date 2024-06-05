(function () {
    function center(start, length) {
        return (length + start) / 2
    }
    
    setInterval((function fn() {
        const rect = document.getElementsByClassName('user-tap-button')[0].getBoundingClientRect();
        const x = center(rect.x, rect.width)
        const y = center(rect.y, rect.height)
        const evt1 = new PointerEvent('pointerdown', {clientX: x, clientY: y});
        const evt2 = new PointerEvent('pointerup', {clientX: x, clientY: y});
        const energy = parseInt(document.getElementsByClassName("user-tap-energy")[0].getElementsByTagName("p")[0].textContent.split(" / ")[0]);
        if (energy > 25) {
            document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt1);
            document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt2);
        }
        return fn;
    })(), 70);
})();
