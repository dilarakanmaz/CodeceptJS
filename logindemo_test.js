Feature('Login');

Scenario('Login to site', (I) => {
I.amOnPage('/');
I.click('Sign in');
I.fillField('Email address','d.kanmaz@yandex.com');
I.fillField('passwd', secret('Dk123456'));
I.click('Sign in');
I.see('My account');

});
