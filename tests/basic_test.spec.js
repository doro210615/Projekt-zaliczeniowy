import { test, expect } from 'playwright/test'

test('has title', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');

  await expect(page).toHaveTitle('Automation Exercise');
  await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();

});
