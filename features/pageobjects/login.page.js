const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {

    get inputEmailField() {
        return $('#email');
    }

    get inputPasswordField() {
        return $('#password');
    }

    get btnSubmit() {
        return $('button[type="submit"]')
    }

    async alertMessage() {
        return $('div[role=\'alert\']');
    }

    async login (email,password) {
        await this.inputEmailField.setValue(email);
        await this.inputPasswordField.setValue(password);
        await this.btnSubmit.click();
   }

   async successLogin () {
    await this.inputEmailField.setValue("kasirToko@gmail.com");
    await this.inputPasswordField.setValue("kasir123");
    await this.btnSubmit.click();
}

   open() {
    return super.open('/');
   }
}

module.exports = new LoginPage();

