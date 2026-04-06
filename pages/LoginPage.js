exports.LoginPage = class LoginPage {
    constructor(page){
        this.page = page;
        this.loginLink = "button#login";
        this.usernameInput = "input#userName";
        this.passwordInput = "input#password";
        this.loginButton = "button#login";
        this.usernameValue ="label#userName-value";
        this.errorValue ="#name";
    }

    async gotoLoginPage(){
        await this.page.goto('/books');
    }

    async login(username,password) {
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();

    }

    async uservalue() {
        return this.page.locator(this.usernameValue);
    }

    async errorvalue() {
        return this.page.locator(this.errorValue);
    }
}