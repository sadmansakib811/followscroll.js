document.addEventListener('DOMContentLoaded', function() {
    const scrollLine = document.getElementById('scrollLine');
    const container = document.getElementById('container');

    window.addEventListener('scroll', function() {
        const containerRect = container.getBoundingClientRect();
        const containerHeight = containerRect.height;
        const viewportHeight = window.innerHeight;

        if (containerRect.top < viewportHeight && containerRect.bottom > 0) {
            const scrollPercent = Math.min(Math.max((viewportHeight - containerRect.top) / (containerHeight + viewportHeight), 0), 1);
            scrollLine.style.height = `${scrollPercent * 100}%`;
        } else {
            scrollLine.style.height = '0';
        }
    });
});
prompt("What's your sign?");
