
/* Learning Objective:
Understand how to efficiently select and interact with elements on a web page using different
locator strategies XPath.
Assignment Details:
Create a test script that navigates to a CRM application, logs in, finds a specific lead by name or
ID, edits details of the lead (such as name, email, or status). */

import { test, expect } from "@playwright/test";

test('Edit Lead in Leaftaps', async ({ page }) => {

  // 1. Navigate
  await page.goto('http://leaftaps.com/opentaps/control/main');

  // 2. Enter username
  await page.fill('#username', 'Demosalesmanager');

  // 3. Enter password
  await page.fill('#password', 'crmsfa');

  // 4. Click Login
  await page.click('.decorativeSubmit');

  // 5. Click CRM/SFA
  await page.click('text=CRM/SFA');

  // 6. Click Leads
  await page.click('text=Leads');

  // 7. Click Find Leads
  await page.waitForSelector('text=Find Leads');
  await page.click('text=Find Leads');

  // 8. Enter First Name
  await page.waitForSelector('(//input[@name="firstName"])[3]');
  await page.fill('(//input[@name="firstName"])[3]', 'John');

  // 9. Click Find Leads button
  await page.click('//button[text()="Find Leads"]');

  // Wait for results to load
  await page.waitForSelector('//div[@class="x-grid3-cell-inner x-grid3-col-partyId"]/a');

  // 10. Click the first resulting Lead ID
  await page.click('//div[@class="x-grid3-cell-inner x-grid3-col-partyId"]/a');

  // 11. Click Edit
  await page.click('text=Edit');

  // 12. Edit Company Name
  await page.fill('#updateLeadForm_companyName', 'Updated Test Leaf');

  // 13. Edit Annual Revenue
  await page.fill('#updateLeadForm_annualRevenue', '750000');

  // 14. Edit Department
  await page.fill('#updateLeadForm_departmentName', 'Marketing');

  // 15. Enter Description
  await page.fill('#updateLeadForm_description', 'Updated lead details.');

  // 16. Click Update
  await page.click('//input[@value="Update"]');

  // Optional Validation
  await expect(page.locator('#sectionHeaderTitle_leads')).toHaveText(/View Lead/i);
});
