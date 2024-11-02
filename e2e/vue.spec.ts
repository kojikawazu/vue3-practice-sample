import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
    await page.goto('/');

    // タイトルの確認
    await expect(page).toHaveTitle('Vue3 Vite Sample');

    // アプリケーションのルート要素が存在することを確認
    await expect(page.locator('#app')).toBeVisible();
});
