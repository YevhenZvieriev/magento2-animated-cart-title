define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    return function (config) {
        if (!config.enable) {
            return;
        }

        $(document).ready(function () {
            let originalTitle = document.title;
            let newTitle = '';
            let animationDuration = config.animationDuration * 1000;

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

                if (config.useValueFromAdmin === '1' && config.animationTitleTabText !== '') {
                    newTitle = config.animationTitleTabText + ' ';
                } else {
                    newTitle = 'You added ' + productName + ' to your shopping cart ';
                }

                document.title = newTitle;

                function animateTitle(
                    newTitle,
                    originalTitle,
                    duration,
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
                    }, animationDuration);
                }

                function startTitleAnimation(
                    newTitle,
                    originalTitle,
                    delay = 1000,
                    duration,
                    interval = 100
                ) {
                    setTimeout(function () {
                        animateTitle(newTitle, originalTitle, animationDuration, interval);
                    }, delay);
                }

                startTitleAnimation(newTitle, originalTitle);
            });
        });
    };
});
