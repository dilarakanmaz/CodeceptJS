Feature('Cart');

Scenario('Add an item to cart', (I) => {
I.amOnPage('/');
I.seeElement('.sf-with-ul');
I.moveCursorTo('.sf-with-ul' );
I.click('Summer Dresses');
I.scrollPageToBottom();
I.see('Printed Chiffon Dress');
I.click('Add to cart');
I.see('Product successfully added to your shopping cart');
I.click('Close window');
I.scrollPageToTop();
I.click('View my shopping cart');
I.scrollTo('.cart_description');
I.seeElement('.product-name');


});
