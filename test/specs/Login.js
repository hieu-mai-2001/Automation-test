import { expect } from "chai";
import LoginPage from "../pageobjects/login.page.js";
import loginData from "../test_data/Login.json" assert { type: "json" };

describe("Page object action chains", async () => {
  before("Prepare data", () => {
    console.log("Preparing data and open page login");
    LoginPage.open();
  });

  it("Login page", async () => {
    await LoginPage.login(
      loginData.correctCredentials.usernames,
      loginData.correctCredentials.password
    );

    expect("1").to.equal("1");
    await browser.pause(2000);
  });

  after("Clear data", () => {
    console.log("=======Clear data successfully=======");
  });
});
