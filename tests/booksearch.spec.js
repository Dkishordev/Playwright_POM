import { test, expect } from '@playwright/test';
import {BookSearch} from '../pages/BookSearch.js';



test('Book search', async({page}) => {
    //login
    const booksearch= new BookSearch(page);
    await booksearch.gotoBookSearchPage();
    await booksearch.searchBooks('git');
    await page.waitForTimeout(5000);

    await test.step('', async () => {
        const row = await booksearch.rowvalue();
        expect(row).toContainText('Git Pocket Guide');
    })
    
});

test('Full row Book search ', async({page}) => {
    //login
    const booksearch= new BookSearch(page);
    await booksearch.gotoBookSearchPage();
    await booksearch.searchBooks('git');
    await page.waitForTimeout(5000);

    await test.step('', async () => {
        const rows = await booksearch.allrowvalue();
        expect(rows).toContainEqual(
        expect.objectContaining({
          title: 'Git Pocket Guide',
          author: 'Richard E. Silverman',
          publisher: "O'Reilly Media"
        })
      );
    })
    
});

