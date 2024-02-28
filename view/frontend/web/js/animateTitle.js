require([
    'jquery',
    'Magento_Catalog/js/catalog-add-to-cart'
], function ($) {
    $(document).ready(function () {
        $('body').on('click', '.action.tocart.primary', function () {

            let originalTitle = document.title;
            let productName = '';
            let page_title = $('.product-info-main .page-title-wrapper .page-title');
            let product_item_link = $(this).closest('.product-item-details').find('.product-item-link');

            if (page_title.length) {
                productName = page_title.text().trim();
            } else if (product_item_link.length) {
                productName = product_item_link.text().trim();
            }
            let newTitle = 'You added ' + productName + ' to your shopping cart ';

            document.title = newTitle;

            setTimeout(function () {

                let index = 0;
                let animationInterval = setInterval(function () {
                    document.title = newTitle.slice(index) + newTitle.slice(0, index);
                    index = (index + 1) % newTitle.length;
                }, 100);

                setTimeout(function () {
                    clearInterval(animationInterval);
                    document.title = originalTitle;
                }, 5000);
            }, 1000);
        });
    });
});
