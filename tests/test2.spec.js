const {protractor, browser, element, by} = require("protractor");
const PageFactory = require("../utils/pageFactory");

const baseUrl = "https://www.epam.com/";

const EC = protractor.ExpectedConditions;

describe("testing search job section",  ()=>{

    it('should just open homepage', async () => {
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        await PageFactory.getPage("home").get(baseUrl);
        browser.sleep(2000);
        expect(await PageFactory.getPage("home").narrow.isDisplayed()).toBe(true);
    });

    it('should click on careers button on navigation bar', async () => {
        await PageFactory.getPage("home").clickOnCareersButton();
        await browser.sleep(2000);
        await PageFactory.getPage("careers").searchField.isDisplayed();
    });


    it('should fill in search section', async () => {
        await PageFactory.getPage("careers").clickOnKeywordField();
        await PageFactory.getPage("careers").enterKeyword("QA");
        await browser.sleep(3000);
        await PageFactory.getPage("careers").firstFromDropdown.isDisplayed();
        await PageFactory.getPage("careers").clickOnFirstSuggestedResult();
        await browser.sleep(3000);
        await PageFactory.getPage("careers").choseLocation.isDisplayed();
        await PageFactory.getPage("careers").clickToChooseLocation();
        await browser.sleep(3000);
        await PageFactory.getPage("careers").locationCanada.isDisplayed();
        await PageFactory.getPage("careers").clickOnLocationCanada();
        await browser.sleep(3000);
        await PageFactory.getPage("careers").allCitiesCanada.isDisplayed();
        await PageFactory.getPage("careers").clickOnAllCitiesOfCanada();
        await PageFactory.getPage("careers").findButton.isDisplayed();
        await PageFactory.getPage("careers").clickOnFindButton();
        await browser.sleep(3000);
        await PageFactory.getPage("careers").tittleOfFoundVacancy.isDisplayed();
    });
})