describe("DropDown", async () => {
  it("demonstrate the selectByVisibleText command", async () => {
    await browser.url("https://the-internet.herokuapp.com/dropdown");
    const selectBox = await $("#dropdown");
    console.log(await selectBox.getText("option:checked"));

    await browser.pause(3000);

    await selectBox.selectByVisibleText("Option 2");
    console.log(await selectBox.getText("option:checked"));

    await browser.pause(3000);
  });

  // it("select by value Text", function () {});

  it("Should demonstrate the selectByIndex command", async function () {
    await browser.url("https://the-internet.herokuapp.com/dropdown");
    const selectBox = await $("#dropdown");

    console.log(await selectBox.getValue());
    await selectBox.selectByIndex(2);
    console.log(await selectBox.getValue());

    await browser.pause(5000);
  });
});
