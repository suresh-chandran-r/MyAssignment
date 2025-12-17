/* Assignment Details:
Automate interactions with frames, trigger alerts, and verify the displayed text based on actions using Playwright on the given application.

Preconditions:
- Use page fixture
- Load the URL (https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm)

Assignment Requirements:
- Click Try it.
- Get the message, type and accept the alert.
- Retrieve the text “You pressed OK!” and verify it.

Hints to Solve:
- Use event listener page.on and page.frameLocator to perform the required actions.
- Use the appropriate method of Alert to accept the alert.
- Assert the text after handling the Alert */

import { test, expect } from '@playwright/test';

test('Handle alert inside frame and verify message', async ({ page }) => {

  await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');

  const frame = page.frameLocator('#iframeResult');

  // Listen for alert (alert is a dialog object)
  page.on('dialog', async (alrt) => {
    console.log('Alert message:', alrt.message());
    console.log('Alert type:', alrt.type()); // confirm
    await alrt.accept(); // Accept the alert
  });

  // Click "Try it" button inside the frame
  await frame.getByRole('button', { name: 'Try it' }).click();

  // Verify the result text after accepting alert
  const resultText = frame.locator('#demo');
  await expect(resultText).toHaveText('You pressed OK!');
});