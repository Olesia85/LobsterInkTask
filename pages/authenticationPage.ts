import { $ , $$ } from "protractor";

export class AuthenticationPageObject {

    public signUpWithEmailButton = $('.ghost-button.mat-button.md-accent');
   
    async signUpButtonClick(){
        await this.signUpWithEmailButton.click();
        
    }

   
}