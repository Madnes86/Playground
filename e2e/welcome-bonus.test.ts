import { test, expect } from '@playwright/test';

test('Pixel perfect', async ({ page }) => {
    await page.goto('/testing/Welcome-Bonus');
    await page.setViewportSize({ width: 1280, height: 566 });
    await page.screenshot({ path: 'e2e/screen.png', fullPage: true });
    await expect(page).toHaveScreenshot('reference-hero.png', {
        threshold: 0
    });
});
// test('get screen', async ({ page }) => {
//     await page.goto('https://mtrading.io/products/welcome-bonus');
//     await page.addStyleTag({
//         content: `
//             header, footer {
//                 display: none !important;
//             }
//         `
//     });
//     const hero = page.locator('.hero-block');
//     await hero.screenshot({ path: 'e2e/reference-hero.png'});
// });