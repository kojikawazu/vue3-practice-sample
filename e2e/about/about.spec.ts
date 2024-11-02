import { test, expect } from '@playwright/test';

test('about page appears.', async ({ page }) => {
    await page.goto('/');

    // Aboutページのh1タグをテスト
    await expect(
        page.getByRole('heading', {
            name: 'This is an about page',
            level: 1,
        }),
    ).toBeVisible();
});
