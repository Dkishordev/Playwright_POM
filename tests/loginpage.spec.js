import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';


test('Successful Login Test', async({page}) => {
    //login
    const login= new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('Test6001','User@6001');
    await page.waitForTimeout(5000);

    await test.step('Verify the sucessfull login', async () => {
      const username = await login.uservalue();
      expect(username).toContainText('Test6001');
    })

});

test('Failure Login Test', async({page}) => {
    //login
    const login= new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('Test6002','User@6001');
    await page.waitForTimeout(5000);

    await test.step('Verify the Failure login', async () => {
      const errormsg = await login.errorvalue();
      expect(errormsg).toContainText('Invalid username or password!');
    })

});