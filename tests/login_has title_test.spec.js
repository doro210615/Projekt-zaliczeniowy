import { test, expect } from '@playwright/test';
import { Gdpr } from '../pages/Gdpr.js';

test('has title', async ({ page }) => {
  const gdpr = new Gdpr (page);

  await page.goto('/login');

  await page.locator('.fc-cta-consent').click();
  await expect(page.locator('.fc-cta-consent')).not.toBeVisible();

  await page.locator('[data-qa="login-email"]').fill('doro@wp.pl');
  await page.locator('[data-qa="login-password"]').fill('Test12');
  await page.locator('[data-qa="login-button"]').click();
  await expect(page.getByText("Logged in as doro")).toBeVisible();

});