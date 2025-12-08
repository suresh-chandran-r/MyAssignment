/* Learning Objective:
Understand how to efficiently select and interact with elements on a web page using different
locator strategies XPath.
Assignment Details:
Create a test script that navigates to a CRM application, logs in, finds a specific lead by name or
ID, edits details of the lead (such as name, email, or status). */

import { test, expect } from "@playwright/test";

test('Create Lead in Leaftaps', async ({ page }) => { // page fixture

  // 1. Navigate
  await page.goto('http://leaftaps.com/opentaps/control/main');

  // 2. Enter Username
  await page.fill('#username', 'Demosalesmanager');

  // 3. Enter Password
  await page.fill('#password', 'crmsfa');

  // 4. Click Login
  await page.click('.decorativeSubmit');

  // 5. Click CRM/SFA
  await page.click('text=CRM/SFA');

  // 6. Click Leads
  await page.click('text=Leads');

  // 7. Click Create Lead
  await page.click('text=Create Lead');

  // 8–15. Fill Lead Form Fields
  await page.fill('#createLeadForm_companyName', 'Test Leaf');   //In CSS, '#' denotes 'id'
  await page.fill('#createLeadForm_firstName', 'Rajesh');
  await page.fill('#createLeadForm_lastName', 'Roy');
  await page.fill('#createLeadForm_personalTitle', 'Mr.');
  await page.fill('#createLeadForm_generalProfTitle', 'Manager');
  await page.fill('#createLeadForm_annualRevenue', '500000');
  await page.fill('#createLeadForm_departmentName', 'Sales');
  await page.fill('#createLeadForm_primaryPhoneNumber', '9876543210');

  // 16. Click Create Lead button
  await page.click('.smallSubmit'); //In CSS, '.' denotes 'class name'

  // Optional: Validate Lead Creation
  await expect(page.locator('#sectionHeaderTitle_leads')).toHaveText(/View Lead/i);
});
