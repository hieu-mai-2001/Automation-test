import { expect } from "chai";
// Write a script to open google.com and verify that title is Google
// and also verify that it is redirected to google.co.in
describe("", () => {
  before("open page", () => {
    browser.url("https://www.google.com/");
  });

  it("correct", async () => {
    const actualTitle = await browser.getTitle();
    const expectedTitle = "Google";
    expect(actualTitle).to.equal(expectedTitle);

    const actualUrl = await browser.getUrl();
    const expectedUrl = "google.co.in";
    expect(actualUrl).to.include(expectedUrl);
  });
});
