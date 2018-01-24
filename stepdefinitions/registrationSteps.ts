import { browser } from "protractor";
import { LearnPageObject } from "../pages/learnPage";
import { AuthenticationPageObject } from "../pages/authenticationPage";
import { SignUpWithEmailPageObject } from "../pages/signUpWithEmailPage";

const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const learn: LearnPageObject = new LearnPageObject();
const authentication: AuthenticationPageObject = new AuthenticationPageObject();
const signUpWithEmail: SignUpWithEmailPageObject = new SignUpWithEmailPageObject();

var newUserId = null;

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

Given('I navigate to Lobster learn page', async function () {
    await expect(browser.getTitle()).to.eventually.equal("Learn | Lobster Ink");
  });

When('I click {string} button on Lobster learn page', async function (buttonName: string) {
          switch (buttonName) {
              case "SignUp":
              await expect(browser.getTitle()).to.eventually.equal("Learn | Lobster Ink");
              await learn.signUpButtonClick(); 
                 break;
          
              default: 
              console.log("Case undefined");
                 break;
        }
  });

When('I click {string} button on Lobster authentification page', async function (buttonName: string) {
        switch (buttonName) {
              case "SignUp":            
              await delay(500);           
              await authentication.signUpButtonClick(); 
                 break;                
    
              default: 
              console.log("Case undefined");
                 break;
            }
  });

When('Click {string} button on Lobbster sign up page', {timeout: 10 * 1000}, async function (buttonName: string) {
        switch (buttonName) {
            case "SignUp":
            await browser.executeScript("arguments[0].scrollIntoView()", signUpWithEmail.signUpButton);
            await signUpWithEmail.signUpButtonClick(); 
               break;

            default: 
            console.log("Case undefined");
               break;
            }
});

When('Fill {string}, {string}, {string}, {string}, {string}, {string} fields with valid data', async function (firstName: string, lastName: string, email:string, confirmEmail: string, password: string, confirmPassword: string){

        newUserId = Date.now();

        await signUpWithEmail.firstNameField.sendKeys(newUserId + firstName);
        await signUpWithEmail.lastNameField.sendKeys(lastName);
        await signUpWithEmail.emailField.sendKeys(newUserId + email);
        await signUpWithEmail.confirmEmailField.sendKeys(newUserId + confirmEmail);
        await signUpWithEmail.passwordField.sendKeys(password);
        await signUpWithEmail.confirmPasswordField.sendKeys(confirmPassword);
  });

  Then('I can see {string} name', async function (firstName: string) {
    await delay(3000);
    expect(await learn.userNameLabel.getText()).to.have.string(newUserId+firstName);    
  });


  