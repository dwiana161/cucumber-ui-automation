const element = require("../locator.json")

class DashboardPage {
    async header() {
        return $(element.dashboardPage.header)
    }

    async btnPelanggan(){
        return $(element.dashboardPage.btnPelanggan)
    }


}

module.exports = new DashboardPage();
