require([
    'jquery',
    'Magento_Catalog/js/catalog-add-to-cart'
], function ($, catalogAddToCart) {
    $(document).ready(function () {
        $('body').on('click', '.action.tocart.primary', function () {
            var originalTitle = document.title;
            var productName = $(this).closest('.product-item-details').find('.product-item-name').text().trim();
            var newTitle = 'You added ' + productName + ' to your shopping cart ';

            document.title = newTitle;

            setTimeout(function () {
                var index = 0;
                var animationInterval = setInterval(function () {
                    document.title = newTitle.substr(index) + newTitle.substr(0, index);
                    index = (index + 1) % newTitle.length;
                }, 100);

                // Зупиняємо анімацію після 2 секунд
                setTimeout(function () {
                    clearInterval(animationInterval);
                    document.title = originalTitle;
                }, 5000);
            }, 1000);
        });
    });
});
