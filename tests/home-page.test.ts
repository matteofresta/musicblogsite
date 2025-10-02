import {test, expect} from '@playwright/test';


test ('Home page Navbar', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveTitle('musicblogpage');

    const logo = page.locator('img[aria-label="Logo Page"]');
    await expect(logo).toBeVisible();

    const navLinks = page.locator('li');
    await expect(navLinks).toHaveCount(3);
    await expect(navLinks.nth(0)).toHaveText('Home');
    await expect(navLinks.nth(1)).toHaveText('Recommended Music');
    await expect(navLinks.nth(2)).toHaveText('Tell us about your Music');

    const loginButton = page.getByRole('button', { name: 'Login' });
    const registerButton = page.getByRole('button', { name: 'Register' });
    await expect(loginButton).toBeVisible();
    await expect(registerButton).toBeVisible();
});

test ('Home page Header', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await expect(page).toHaveTitle('musicblogpage');


    const headerTitle = page.getByRole('heading', { name: 'Welcome To the Music World' });
    await expect(headerTitle).toBeVisible();

    await expect(page.getByText("Expand your Music Horizon and taste new songs!\n")).toBeVisible()

    const headerVisualisation = page.locator('.equalizer-container-inline')
    await expect(headerVisualisation).toBeVisible();

    const scrollArrow = page.locator('button[aria-label="Scroll to content"]');
    await expect(scrollArrow).toBeVisible();
})

test ('Home page Main content', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await expect(page).toHaveTitle('musicblogpage');

    const caroulelArrowPrevious = page.locator('button[aria-label="Previous Slide"]');
    await expect(caroulelArrowPrevious).toBeVisible();

    const caroulelArrowNext = page.locator('button[aria-label="Next Slide"]');
    await expect(caroulelArrowNext).toBeVisible();

    const carouselItems = page.locator('.carousel-slide img');
    await expect(carouselItems).toHaveCount(9);

    await caroulelArrowNext.click();
    await page.waitForTimeout(600);
    await caroulelArrowPrevious.click();
    await page.waitForTimeout(600);
})
