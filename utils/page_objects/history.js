const {element, by} = require("protractor");
const logger = require('winston')

class History {
    constructor() {
        this.titleOfHistorySection = element(by.css("h1"));
        this.historyButton = element(by.css(".top-navigation__sub-link[href='/about/who-we-are/history']"));

        this.clickOnHistoryButton = () => {
            logger.info(`i click on history Button`)
           this.historyButton.click()
        };
    }

}
module.exports = History;