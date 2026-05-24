# QA Profile Form Filling Test

## Overview
This test suite validates the profile form functionality in The Testing Academy application. It verifies that users can successfully fill out a multi-section form with various input types, including text fields, radio buttons, dropdowns, checkboxes, and file uploads, and that the submitted data is correctly processed.

## Test Description

### Test: "Fill the form and verify the data"
**File**: `QA_Profile_Form.spec.ts`

This test performs the following steps:
1. **Navigate to Form** - Opens the practice form URL
2. **Fill Personal Information** - Enters first name, last name, and selects gender
3. **Select Experience** - Chooses years of experience from dropdown
4. **Enter Date** - Inputs date using date field
5. **Select Profession** - Checks profession checkboxes
6. **Select Tools** - Selects automation tools
7. **Select Regions** - Chooses continents/regions
8. **Upload File** - Uploads QAProfile.txt
9. **Submit Form** - Clicks Save Profile button
10. **Verify Response** - Parses JSON response and validates all submitted data

**Expected Result**: JSON response contains all submitted form data exactly as entered

## Application URL
```
https://app.thetestingacademy.com/playwright/tables/practice
```

## Test Data

| Field | Value |
|-------|-------|
| First Name | Komal |
| Last Name | Phatak |
| Gender | Female |
| Years of Experience | 6 |
| Date | 26-08-2022 |
| Profession | Automation Tester |
| Tools | Selenium WebDriver, UFT |
| Continents | Asia, Europe |
| Upload File | QAProfile.txt |

## Form Fields & Locators

### Text Inputs
```typescript
// First Name
page.getByRole('textbox', { name: 'First Name' })

// Last Name
page.getByRole('textbox', { name: 'Last Name' })
```

### Radio Button (Gender)
```typescript
page.getByRole('radio', { name: 'Female' })
```

### Dropdown
```typescript
page.selectOption('#years-experience', '6')
```

### Date Input
```typescript
page.locator('#profile-date')
```

### Checkboxes
```typescript
// Profession
page.getByRole('radio', { name: 'Automation Tester' })

// Tools
page.getByRole('checkbox', { name: 'Selenium WebDriver' })
page.getByRole('checkbox', { name: 'UFT' })

// Continents
page.getByRole('checkbox', { name: 'Asia' })
page.getByRole('checkbox', { name: 'Europe' })
```

### File Upload
```typescript
page.locator('#upload-image').setInputFiles('./QAProfile.txt')
```

### Submit Button
```typescript
page.getByRole('button', { name: 'Save profile' })
```

## Running the Test

### Run a single test
```bash
npx playwright test QA_Profile_Form.spec.ts
```

### Run with specific browser
```bash
npx playwright test QA_Profile_Form.spec.ts --project=chromium
```

### Run with headed mode (see the browser)
```bash
npx playwright test QA_Profile_Form.spec.ts --headed
```

### Run with debug mode
```bash
npx playwright test QA_Profile_Form.spec.ts --debug
```

### Run from root directory
```bash
npx playwright test tests/Projects/QA_Profile_Form_Filling/QA_Profile_Form.spec.ts
```

## Test Structure

### Interface: `UserData`
```typescript
interface UserData {
    firstName: string;
    lastName: string;
    gender: 'Male' | 'Female';
    yearsOfExperience: number;
    date: string;
    profession: string[];
    tools: string[];
    continent: string[];
    commands: string[];
}
```

### Function: `fillForm(page: Page, userData: UserData)`
Fills all form fields with provided user data:
- Enters text values in input fields
- Selects radio button options
- Chooses dropdown selections
- Enters dates using pressSequentially (for date input)
- Checks checkboxes for multi-select options
- Uploads files
- Submits the form

## Response Validation

The test extracts and validates JSON response with the following structure:
```json
{
  "firstName": "Komal",
  "lastName": "Phatak",
  "gender": "Female",
  "yearsExperience": "6",
  "date": "2022-08-26",
  "profession": "Automation Tester",
  "tools": ["UFT", "Selenium Webdriver"],
  "continents": ["Asia", "Europe"],
  "upload": {}
}
```

### Validation Methods Used
1. **`toBe()`** - Exact string/value match for single fields
2. **`arrayContaining()`** - Flexible array comparison (handles order differences)

### Key Assertions
```typescript
expect(actualOutput.firstName).toBe(userInfo.firstName);
expect(actualOutput.lastName).toBe(userInfo.lastName);
expect(actualOutput.gender).toBe(userInfo.gender);
expect(actualOutput.yearsExperience).toBe(userInfo.yearsOfExperience.toString());
expect(actualOutput.profession).toBe(userInfo.profession[0]);
expect(actualOutput.tools).toEqual(expect.arrayContaining(...));
expect(actualOutput.continents).toEqual(expect.arrayContaining(...));
```

## Files Included

| File | Purpose |
|------|---------|
| `QA_Profile_Form.spec.ts` | Main test file with all test logic |
| `QAProfile.txt` | Sample file for upload testing |
| `README.md` | This documentation |

## Key Test Features

- **Multiple Input Types**: Tests text, radio, dropdown, checkbox, date, and file upload
- **JSON Response Parsing**: Demonstrates how to validate API responses
- **Flexible Array Matching**: Uses `arrayContaining()` for robust array comparisons
- **Type Safety**: Full TypeScript interface for test data
- **Reusable Structure**: `fillForm()` function can be used with different data sets

## Troubleshooting

### Date Field Issues
- The date format input uses `pressSequentially()` for compatibility
- Dates are returned in ISO format (YYYY-MM-DD) in the response
- Ensure date matches expected format before submission

### Checkbox Selection Failures
- Verify element visibility before clicking
- Use `check()` method instead of `click()` for checkboxes
- Check for any overlapping elements

### File Upload Issues
- File path must be relative to the test runner's working directory
- Use `./filename` for files in the same directory
- Ensure file exists before test execution

### Array Comparison Failures
- The API may return arrays in different order than submitted
- Use `arrayContaining()` instead of exact array equality
- Trim whitespace from tool names (e.g., ' UFT' → 'UFT')

## Reports

Test results are automatically generated in:
- HTML Report: `tta-report/`
- Allure Report: `allure-results/`
- Test Results: `test-results/`

## Dependencies
- Playwright Test Framework
- TypeScript
- The Testing Academy Practice Application

## Test Status
✅ **Last Run**: May 24, 2026, 23:31:41 UTC  
✅ **Status**: PASSED  
✅ **Duration**: 11s  
✅ **Pass Rate**: 100%
