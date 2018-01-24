import { $ , $$ } from "protractor";

export class SignUpWithEmailPageObject {

    public signUpButton = $('#sign-up-button');
    public firstNameField = $('#FirstName');
    public lastNameField = $('#LastName');
    public emailField = $('#Email');
    public confirmEmailField = $('#ConfirmEmail');
    public passwordField = $('#Password');
    public confirmPasswordField = $('#ConfirmPassword');
     
    async signUpButtonClick(){
        await this.signUpButton.click();
    }
}