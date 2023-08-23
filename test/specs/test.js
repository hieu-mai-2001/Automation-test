// NavigateAndAssert.js
const assert = require("assert");

(async () => {
  
  try {
    // Navigate to "http://qatechhub.com"
    await browser.url("http://qatechhub.com");

    // Write a method to print PASS or FAIL based on title comparison
    const expectedTitle =
      "QA Automation Tools Trainings and Tutorials | QA Tech Hub";
    const actualTitle = await browser.getTitle();
    try {
      assert.strictEqual(actualTitle, expectedTitle);
      console.log("PASS: Title matches.");
    } catch (error) {
      console.log("FAIL: Title does not match.");
    }

    // Navigate to the Facebook page
    await browser.url("https://www.facebook.com");

    // Navigate back to the QA Tech Hub website
    await browser.back();

    // Print the URL of the current page
    const currentURL = await browser.getUrl();
    console.log("Current URL:", currentURL);

    // Navigate forward
    await browser.forward();

    // Reload the page
    await browser.reloadSession();
  } finally {
    // Close the Browser
    await browser.deleteSession();
  }
})();
