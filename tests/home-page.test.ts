import {test, expect} from '@playwright/test';

test('Home page', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await expect(page).toHaveTitle('musicblogpage');

    const navLinks = page.locator('li a');
    await expect(navLinks).toHaveCount(3);
    await expect(navLinks.nth(0)).toHaveText('Home');
    await expect(navLinks.nth(1)).toHaveText('Recommended Music');
    await expect(navLinks.nth(2)).toHaveText('Tell us about your Music');
});
