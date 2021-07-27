const logger = require('../../conf/logger.config')
const {element, by} = require("protractor");

class Careers {
    constructor() {
        this.searchField = element(by.id("jobSearchFilterForm"));
        this.keywordField = element(by.xpath('.//input [@id="new_form_job_search_1445745853_copy-keyword"]'));
        this.firstFromDropdown = element(by.css(".autocomplete-suggestion[data-index='0']"));
        this.choseLocation = element(by.css('.select2-selection__arrow'));
        this.locationCanada = element(by.css("[aria-label='Canada']"));
        this.findButton = element(by.css(".recruiting-search__submit"));
        this.tittleOfFoundVacancy = element(by.css("h1"));
        this.allCitiesCanada = element(by.xpath("//li[@title='All Cities in Canada']"));


        this.clickOnKeywordField = () => {
            logger.info(`i click on ${this.keywordField}`);
            this.keywordField.click()
        };
        this.enterKeyword = (keyword) => {
            logger.info(`i enter some value in keyword field`);
            this.keywordField.sendKeys(keyword)
        };
        this.clickOnFirstSuggestedResult = () => {
            logger.info(`i click on first suggested video`);
            this.firstFromDropdown.click()
        };
        this.clickToChooseLocation = () => {
            logger.info(`i click on choseLocation field `)
            this.choseLocation.click()
        };
        this.clickOnLocationCanada = () => {
            logger.info(`i click on Canada country`)
            this.locationCanada.click()
        };
        this.clickOnAllCitiesOfCanada = () => {
            logger.info(`i click on allCitiesCanada section`)
           this. allCitiesCanada.click()
        };
        this.clickOnFindButton = () => {
            logger.info(`i click on find Button`)
            this.findButton.click()
        }
    }

}

module.exports = Careers;