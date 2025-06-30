import { test, expect } from '@playwright/test'

test ('post', async ({ request }) => {
    const response = await request.post('api/searchProducts', {
        form : {
            search_product : 'top'
        }

    });
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data).toHaveProperty('products');
    expect(data.products.lenght).toBeGreaterThan(0);
    expect(data.products[0].name.toLowerCase()).toContain('top');
});


