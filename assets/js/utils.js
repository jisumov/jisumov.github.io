document.addEventListener('DOMContentLoaded', function () {
    const origin = location.origin;
    document.querySelectorAll('a[href]').forEach(a => {
        try {
            const href = new URL(a.href, location.href);
            if (href.origin !== origin) {
                a.setAttribute('target', '_blank');
                a.setAttribute('rel', 'noopener noreferrer');
            }
        } catch (e) { }
    });
});