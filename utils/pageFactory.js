const Homepage = require("./page_objects/homepage");
const CareersPage = require("./page_objects/careers");
const HistoryPage = require("./page_objects/history");

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "home":
                return new Homepage()
            case "careers":
                return new CareersPage()
            case "history":
                return new HistoryPage()
        }
    }
}

module.exports = PageFactory;