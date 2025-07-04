import { test, expect } from '@playwright/test';
import { Gdpr } from '../pages/Gdpr.js';
import { Login } from '../pages/Login.js';

test('zaloguj sie', async ({ page }) => {
  const gdpr = new Gdpr (page);
  const login = new Login (page);

  await page.goto('/login');

  await gdpr.acceptCookies();

  await login.logInWithCredentials(process.env.EMAIL, process.env.PASSWORD);
  await expect(page.getByText('Logged in as $[process.env.TESTUSER]')).toBeVisible();
});