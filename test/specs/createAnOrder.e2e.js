const page = require('../../page');
const helper = require('../../helper')

describe('task 1', () => {

    it('setting the address', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton); // to check if the addresses' have been filled
        await supportivePlanButton.waitForDisplayed({ timeout: 20000 }); // to check if the addresses' have been filled

    })
    
    it('should select suportive plan', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed({ timeout: 20000 });
        await supportivePlanButton.click();
        const blanketAndHandkerchiefsButton = await $(page.blanketAndHandkerchiefsButton); // to check if Suportive plan is active
        await blanketAndHandkerchiefsButton.waitForDisplayed({ timeout: 20000 }); // to check if Suportive plan is active

    })

    it('Filling the phone number', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();

    })

    it('Adding credit card', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed({ timeout: 20000 });
        await paymentMethodButton.click();

        const addCardButton = await $(page.addCardButton);
        await addCardButton.waitForDisplayed({ timeout: 20000 });
        await addCardButton.click();

        const cardNumberField = await $(page.cardNumberField);
        await cardNumberField.waitForDisplayed({timeout: 20000});
        await cardNumberField.click();
        await cardNumberField.setValue(123456789100);
        await browser.pause({ pauseTime: 2000 });

        await browser.keys('tab');

        const cardCodeField = await $(page.cardCodeField);
        await cardCodeField.waitForDisplayed({ timeout: 20000 });
        await cardCodeField.click();
        await cardCodeField.setValue(123);
        await browser.pause({ pauseTime: 2000 });
        
        await browser.keys('tab');
        
        const linkButton = await $(page.linkButton);
        await linkButton.click();

        const cardButton = await $(page.cardButton);
        await expect(cardButton).toBeExisting();

    })

    it('writing a message to the driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const messageButton = await $(page.messageButton);
        await messageButton.click();
        const messageField = await $(page.messageField);
        await messageField.setValue("How are you doing?");
        await browser.pause({ pauseTime: 2000 });
        await expect(await messageField.getValue()).toBe('How are you doing?');
        
    })

    it('Ordering a Blanket and handkerchiefs', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed({ timeout: 20000 });
        await supportivePlanButton.click();
        const blanketAndHandkerchiefsButton = await $(page.blanketAndHandkerchiefsButton);
        await blanketAndHandkerchiefsButton.waitForDisplayed({ timeout: 20000 });
        await blanketAndHandkerchiefsButton.click();
        await browser.pause({ pauseTime: 2000 });
        await expect($(page.blanketAndHandkerchiefsSwitch)).toBeChecked();
        
    })

    it('Ordering 2 icescreams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed({ timeout: 20000 });
        await supportivePlanButton.click();
        const iceScreamAdd = await $(page.iceScreamAdd);
        await iceScreamAdd.waitForDisplayed({ timeout: 20000 });
        await iceScreamAdd.click();
        await browser.pause({ pauseTime: 2000 });
        await iceScreamAdd.click()
        await browser.pause({ pauseTime: 2000 });
        const iceScreamCounter = await $(page.iceScreamCounter).getText();
        await expect(iceScreamCounter).toBe("2");

    })

    it('The car search modal appears', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed({ timeout: 20000 });
        await supportivePlanButton.click();
        const messageButton = await $(page.messageButton);
        await messageButton.click();
        const messageField = await $(page.messageField);
        await messageField.setValue("How are you doing?");
        await browser.pause({ pauseTime: 2000 });
        const orderButton = await $(page.orderButton);
        await orderButton.click();
        await browser.pause({ pauseTime: 2000 });
        const orderModal = await $(page.orderModal);
        await orderModal.waitForDisplayed({ timeout: 40000 });

    })


})

