import { test, expect } from '@playwright/test'

test('get', async ({ request }) => {
    const response = await request.get('api/productlist');
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data).toHaveProperty('products');
    expect(data.products.lenght).toBeGreaterThan(0);
});