<script>
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetUrl = link.getAttribute('href');
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300);
        });
    });
</script>