require([
    'jquery',
    'Magento_Catalog/js/catalog-add-to-cart'
], function ($) {
    $(document).ready(function () {
        let originalTitle = document.title;

        $('body').on('click', '.action.tocart.primary', function () {
            let productName = '';
            let page_title = $('.product-info-main .page-title-wrapper .page-title');
            let product_item_link = $(this).closest('.product-item-details').find('.product-item-link');

            // Get the product name from the page title or product link
            if (page_title.length) {
                productName = page_title.text().trim();
            } else if (product_item_link.length) {
                productName = product_item_link.text().trim();
            }

            let newTitle = 'You added ' + productName + ' to your shopping cart ';

            document.title = newTitle;

            function animateTitle(
                newTitle,
                originalTitle,
                duration = 5000,
                interval = 100
            ) {
                let index = 0;
                let animationInterval = setInterval(function () {
                    document.title = newTitle.slice(index) + newTitle.slice(0, index);
                    index = (index + 1) % newTitle.length;
                }, interval);

                setTimeout(function () {
                    clearInterval(animationInterval);
                    document.title = originalTitle; // Restore the original page title
                }, duration);
            }

            function startTitleAnimation(
                newTitle,
                originalTitle,
                delay = 1000,
                duration = 5000,
                interval = 100
            ) {
                setTimeout(function () {
                    animateTitle(newTitle, originalTitle, duration, interval);
                }, delay);
            }
            startTitleAnimation(newTitle, originalTitle);
        });
    });
});
