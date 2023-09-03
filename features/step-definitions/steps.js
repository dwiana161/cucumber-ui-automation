const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const dashboardPage = require('../pageobjects/dashboard.page');
const newPelangganPage = require('../pageobjects/newpelanggan.page')


const pages = {
    login: LoginPage
}

Given(/^user already on (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^user input email (.+) and password (.+)$/, async (email, password) => {
    await LoginPage.login(email, password)
});
 
Then(/^url contain (.+) and showing title kasirAja$/, async (pathName) => {
    const url = browser.getUrl();
    expect(url).toHaveUrlContaining(pathName);
});

When(/^user input invalid email (.+) and invalid password (.+)$/, async (email, password) => {
    await LoginPage.login(email, password)
});

Then(/^alert message displayed (.+)$/, async (alertMessage) => {
    const message = await LoginPage.alertMessage();
    expect(message).toHaveTextContaining(alertMessage);
});

Given (/^user already (\w+) to dashboard page$/, async (page) => {
    await pages[page].open();
    await LoginPage.successLogin()
})

When(/^user click pelanggan list$/, async () => {
    await dashboardPage.btnPelanggan()
});

When(/^user click tambah$/, async () => {
    await newPelangganPage.btnAdd()
});

When(/^user input nama (.+), no.hp (.+), alamat (.+) and keterangan (.+)$/, async (nama, noHp, alamat, keterangan) => {
    await newPelangganPage.inputNamaField(nama);
    await newPelangganPage.inputNoHpField(noHp);
    await newPelangganPage.inputAlamatField(alamat);
    await newPelangganPage.inputKeteranganField(keterangan);
    await newPelangganPage.btnSave()
});

Then(/^user get success message (\w+)$/, async (Message) => {
    const message = await newPelangganPage.Message();
    expect(message).toHaveTextContaining(Message)
});
