const {element, by, browser} = require("protractor");
const logger = require('winston')

class Homepage {
    constructor() {
        this.narrow = element(by.css(".background-video__container"));
        this.aboutButton = element(by.css(".top-navigation__item-link[href='/about']"));
        this.historyButton = element(by.css(".top-navigation__sub-link[href='/about/who-we-are/history']"));
        this.careersButton = element(by.css(".top-navigation__item-link[href='/careers']"));
        this.allCitiesCanada = element(by.xpath("//li[@title='All Cities in Canada']"));

        this.get = (url) => {
            browser.get(url);
        };
        this.hoverOnAboutButton = () =>{
            logger.info(`i move mouse to about Button and hover it`)
            browser.actions().mouseMove(this.aboutButton).perform();
        };
        this.clickOnCareersButton = () => {
            logger.info(`i click on careers Button`)
            this.careersButton.click()
        }

    }
}
module.exports = Homepage;