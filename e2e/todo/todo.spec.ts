import { test, expect } from '@playwright/test';

test.describe('TODOリスト', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/todo');
    });

    test('The page title is displayed.', async ({ page }) => {
        await expect(
            page.getByRole('heading', {
                name: 'TODOリスト',
                level: 2,
            }),
        ).toBeVisible();
    });

    test('New TODOs can be added.', async ({ page }) => {
        const todoText = 'テストTODO';

        // 入力とTODO追加
        await page.getByPlaceholder('新しいタスクを入力').fill(todoText);
        await page.getByRole('button', { name: '追加' }).click();

        // 追加されたTODOが表示されているか確認
        await expect(page.getByText(todoText)).toBeVisible();
    });

    test('Able to complete TODOs.', async ({ page }) => {
        // TODOを追加
        await page.getByPlaceholder('新しいタスクを入力').fill('完了するTODO');
        await page.getByRole('button', { name: '追加' }).click();

        // チェックボックスをクリック
        await page.getByRole('checkbox').first().check();

        // 取り消し線が付いているか確認
        await expect(page.locator('span.line-through')).toBeVisible();
    });

    test('Can edit TODOs.', async ({ page }) => {
        // 新規追加用の入力欄を特定
        const addInput = page.getByPlaceholder('新しいタスクを入力');

        // TODOを追加
        await addInput.fill('編集前のTODO');
        await page.getByRole('button', { name: '追加' }).click();

        // 追加されたTODOが表示されるまで待機
        await expect(page.getByTestId('todo-text')).toHaveText('編集前のTODO');

        // 編集ボタンをクリック
        await page
            .getByRole('button')
            .filter({ has: page.locator('svg[data-icon="pen"]') })
            .click();

        // 編集用の入力欄を特定して編集
        const editInput = page.getByTestId('todo-edit-input');
        await editInput.waitFor({ state: 'visible' });
        await editInput.fill('編集後のTODO');
        await editInput.press('Enter');

        // 編集後のテキストを確認
        await expect(page.getByTestId('todo-text')).toHaveText('編集後のTODO');
    });

    test('TODOs can be deleted.', async ({ page }) => {
        const todoText = '削除するTODO';

        // TODOを追加
        await page.getByPlaceholder('新しいタスクを入力').fill(todoText);
        await page.getByRole('button', { name: '追加' }).click();

        // 削除ボタンをクリック
        await page
            .getByRole('button')
            .filter({ has: page.locator('svg[data-icon="trash"]') })
            .click();

        // TODOが削除されたことを確認
        await expect(page.getByText(todoText)).toBeHidden();
    });
});
