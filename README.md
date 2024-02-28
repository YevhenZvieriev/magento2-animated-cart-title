## Description 

This module enhances the user experience on a Magento 2 website by adding a dynamic title tab change feature when a product is added to the shopping cart. 
It utilizes jQuery and Magento_Catalog's built-in functionality to achieve this.

This module adds a subtle yet engaging interaction for users, providing feedback that their action of adding a product to the cart has been completed.

This works for both PDP and PLP.

How the module works:

1. It listens for a click event on elements with the class `".action.tocart.primary"`, typically representing the "Add to Cart" button on product pages.

2. When clicked, it retrieves the name of the product being added by finding the closest element with the class `".product-item-details"` and locating the product name within it.

3. It then constructs a new title tab for the document indicating that the product has been added to the shopping cart.

4. The script creates a dynamic animation effect by continuously changing the document title to display a scrolling effect of the new title text.

5. After 5 seconds, the animation stops, and the document title reverts to its original value.


[animated-title.webm](https://github.com/YevhenZvieriev/magento2-animated-cart-title/assets/43544955/c347975f-8136-43b3-bb9a-bc7ca16c77dd)
