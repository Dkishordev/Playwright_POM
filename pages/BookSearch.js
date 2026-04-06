exports.BookSearch = class BookSearch {
    constructor(page){
        this.page = page;
        this.searchBox = "input#searchBox";
        this.searchButton = "div#searchBox-wrapper svg > path";
        this.rowcontents = "[id='see-book-Git Pocket Guide']";
        this.allrowcontents = "tbody tr";
    }

    async gotoBookSearchPage(){
        await this.page.goto('/books');
    }

    async searchBooks(bookname) {
        await this.page.locator(this.searchBox).fill(bookname);
        await this.page.locator(this.searchButton).click();

    }

    async rowvalue(){
        return this.page.locator(this.rowcontents);

    }

    async allrowvalue(){
        const rows = this.page.locator(this.allrowcontents);
        const count = await rows.count();
        const data = [];

        for (let i = 0; i < count; i++) {
        const row = rows.nth(i);
        const cells = row.locator('td');

        data.push({
        title: await cells.nth(1).innerText(),
        author: await cells.nth(2).innerText(),
        publisher: await cells.nth(3).innerText()
        });
        }

        return data;

    }
    
}