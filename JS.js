<script>
    const transactions = document.querySelector('.transactions');

    transactions.addEventListener('scroll', function() {
        if (transactions.scrollTop > 0) {
            transactions.classList.add('scrolled');
        } else {
            transactions.classList.remove('scrolled');
        }
    });
</script>