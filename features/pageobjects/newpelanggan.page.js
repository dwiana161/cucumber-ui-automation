const element = require("../locator.json")

class NewCategoryPage {
    async btnAdd() {
        return $(element.pelangganPage.btnAdd)
    }

    async inputNamaField() {
        return $(element.addNewPelangganPage.nama);
    }

    async inputNoHpField() {
        return $(element.addNewPelangganPage["no.hp"]);
    }

    async inputAlamatField() {
        return $(element.addNewPelangganPage.alamat);
    }

    async inputKeteranganField() {
        return $(element.addNewPelangganPage.keterangan);
    }

    async btnSave() {
        return $(element.addNewPelangganPage.btnSave)
    }


    async Message() {
        return $(element.addNewPelangganPage.message)
    }
}

module.exports = new NewCategoryPage();