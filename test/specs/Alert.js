describe("Alerts", async () => {
  it("accept alert", async () => {
    await browser.url("https://the-internet.herokuapp.com/javascript_alerts");
    const btnAlert = await $('[onclick = "jsConfirm()"]');

    await btnAlert.waitForExist({ timeout: 3000 });

    await btnAlert.click();

    browser.acceptAlert();

    await browser.pause(3000);
  });

  it("dismiss alert", async () =>
  {
    const btnAlert = await $('[onclick = "jsConfirm()"]');
    await btnAlert.click();
    browser.dismissAlert();
    await browser.pause(3000);
  });

  it("dismiss alert", async () =>
  {
    const btnAlert = await $('[onclick = "jsConfirm()"]');
    await btnAlert.click();
    const alertText = await browser.getAlertText();
    console.log("content :", alertText);
    await browser.pause(3000);
  });
});
