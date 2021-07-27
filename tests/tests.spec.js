const {protractor, browser, element, by} = require("protractor");
const PageFactory = require("../utils/pageFactory");

const baseUrl = "https://www.epam.com/";

const EC = protractor.ExpectedConditions;

describe("testing epam.com webpage", () => {

    it('should open homepage', async () => {
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        await PageFactory.getPage("home").get(baseUrl);
        browser.sleep(2000);
        expect(await PageFactory.getPage("home").narrow.isDisplayed()).toBe(true);
    })

    it('should hover on about navigation button and click on history button', async () => {
        await PageFactory.getPage("home").hoverOnAboutButton();
        expect(await PageFactory.getPage("history").historyButton.isDisplayed()).toBe(true);
        browser.wait(EC.visibilityOf(PageFactory.getPage("history").historyButton), 5000);
        await PageFactory.getPage("history").clickOnHistoryButton();
        await browser.sleep(2000);
        expect(await PageFactory.getPage("history").titleOfHistorySection.isDisplayed()).toBe(true);
    });

    it('should click on careers button on navigation bar', async () => {
        await PageFactory.getPage("home").clickOnCareersButton();
        await browser.sleep(2000);
        await PageFactory.getPage("careers").searchField.isDisplayed();
    });

})