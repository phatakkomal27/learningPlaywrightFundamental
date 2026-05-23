# TTA Bank - Verify Amount Transfer Test

## Overview
This test suite validates the fund transfer functionality in the TTA Bank digital application. It verifies that users can successfully transfer funds and that the account balance is correctly updated after the transaction.

## Test Description

### Test: "Verify transfer amount successfully"
**File**: `TTA_Bank_VerifyAmtTransfer.spec.ts`

This test performs the following steps:
1. **Sign Up** - Creates a new user account with test credentials
2. **Transfer Funds** - Initiates a fund transfer of $5,000
3. **Verify Transfer** - Confirms the transfer was successful by checking the updated balance

**Expected Result**: The account balance should decrease from $50,000 to $45,000 after transferring $5,000

## Test Data

| Parameter | Value |
|-----------|-------|
| Initial Balance | $50,000.00 |
| Transfer Amount | $5,000.00 |
| Expected Final Balance | $45,000.00 |
| Test Email | abc@example.com |
| Test Password | Test@1234 |
| Test Name | Test User |

## Application URL
```
https://tta-bank-digital-973242068062.us-west1.run.app/
```

## Key Features

### Currency Conversion Function
The test includes a utility function `convertCurrencyToNumber()` that converts currency strings to numbers:
```typescript
convertCurrencyToNumber('$45,000.00'); // returns 45000
```

### XPath Selectors
Uses XPath to reliably locate the Total Balance element:
```xpath
//p[text()='Total Balance']/following-sibling::h3
```

## Running the Test

### Run a single test
```bash
npx playwright test tests/Projects/TTA_Bank/TTA_Bank_VerifyAmtTransfer.spec.ts
```

### Run with specific browser
```bash
npx playwright test tests/Projects/TTA_Bank/TTA_Bank_VerifyAmtTransfer.spec.ts --project=chromium
```

### Run with debug mode
```bash
npx playwright test tests/Projects/TTA_Bank/TTA_Bank_VerifyAmtTransfer.spec.ts --debug
```

### Run with headed mode (see the browser)
```bash
npx playwright test tests/Projects/TTA_Bank/TTA_Bank_VerifyAmtTransfer.spec.ts --headed
```

## Test Structure

The test is organized into three async functions:

### 1. `signUpForm(page: Page)`
- Navigates to the base URL
- Clicks the "Sign Up" button
- Fills in user credentials (name, email, password)
- Clicks "Create Account"

### 2. `TransferFund(page: Page, transferFundValue: number)`
- Clicks "Transfer Funds" button
- Enters the transfer amount
- Clicks "Continue"
- Confirms the transfer with "Confirm Transfer"

### 3. `VerifySuccessfulTransfer(page: Page, actualFundValue: number, transferFundValue: number)`
- Navigates to Dashboard
- Retrieves the displayed balance
- Converts currency string to number
- Asserts the balance equals expected value (actualFundValue - transferFundValue)

## Dependencies
- Playwright Test Framework
- TypeScript

## Timeout Configuration
- Default test timeout: 30 seconds
- Page navigation timeout: 2 seconds (artificial delay)

## Troubleshooting

### Test Timeout Issues
If the test times out:
1. Verify the application URL is accessible
2. Check network connectivity
3. Ensure the application is running
4. Increase timeout in `playwright.config.ts` if needed

### Element Not Found
If selectors fail:
1. Inspect the page using `--debug` flag
2. Update XPath or role-based selectors accordingly
3. Use `page.pause()` to debug at specific points

### Balance Mismatch
If balance verification fails:
1. Confirm the initial balance value matches actual account state
2. Check currency formatting on the page
3. Verify the transfer amount is correctly applied

## Reports
Test results are automatically generated in:
- HTML Report: `tta-report/`
- Allure Report: `allure-results/`

## Notes
- Uses **XPath** selector for password field: `xpath=//input[@type='password']`
- Currency verification uses numeric comparison, not text matching
- Test clears cache/cookies between runs (default Playwright behavior)
