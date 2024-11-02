import { test, expect } from '@playwright/test';

test.describe('Tcomment list', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/comments');
    });

    test('The page title is displayed.', async ({ page }) => {
        await expect(
            page.getByRole('heading', {
                name: 'コメント一覧',
                level: 2,
            }),
        ).toBeVisible();
    });

    test('Comments are displayed correctly.', async ({ page }) => {
        // ローディング表示の確認
        await expect(page.getByText('読み込み中...')).toBeVisible();

        // コメントの読み込み完了を待機（waitForSelectorを避ける）
        await expect(page.locator('.bg-gray-800').first()).toBeVisible();

        // コメントが複数表示されていることを確認
        const comments = page.locator('.bg-gray-800');
        const count = await comments.count();
        expect(count).toBeGreaterThan(0);

        // 最初のコメントの構造を確認
        await expect(page.locator('.bg-gray-800').first().locator('h3')).toContainText('name:');
        await expect(page.locator('.bg-gray-800').first().locator('p').first()).toContainText('email:');
        await expect(page.locator('.bg-gray-800').first().locator('p').last()).toContainText('body:');
    });

    test('Error messages are displayed in the event of an error', async ({ page }) => {
        // APIをモックする前にページに移動
        await page.goto('/comments');

        // APIリクエストをインターセプトしてエラーを返す
        await page.route('**/comments', async route => {
            await route.fulfill({
                status: 500,
                contentType: 'application/json',
                body: JSON.stringify({ message: 'Server error' }),
            });
        });

        // ページを再読み込み
        await page.reload();

        // ローディング表示が消えるまで待機
        await expect(page.getByTestId('loading')).toBeHidden();

        // エラーメッセージのテキストで探す場合
        await expect(page.getByText('Server error')).toBeVisible({ timeout: 10000 });
    });
});
