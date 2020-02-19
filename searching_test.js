Feature('Searching');

Scenario('Search an item', (I) => {
    I.amOnPage('/');
    I.fillField('Search','blouse');
    I.click('Search');
    I.see('1 result has been found.');
    
});
