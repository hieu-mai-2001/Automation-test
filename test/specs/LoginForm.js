describe("open page", () => {
  it("open page", async () => {
    browser.url("https://the-internet.herokuapp.com/login");
    const inputUsername = await $("#username");
    const inputPassword = await $("#password");
    const btnLogin = await $(".radius");

    await inputUsername.waitForExist({ timeout: 3000 });
    await inputPassword.waitForExist({ timeout: 3000 });

    await inputUsername.setValue("tomsmith");
    await inputPassword.setValue("SuperSecretPassword!");

    await btnLogin.click();

    await browser.pause(2000);
  });
});
