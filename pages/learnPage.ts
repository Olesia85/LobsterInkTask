import { $ , $$ } from "protractor";

export class LearnPageObject {

    public signUpButton = $('.signup-link ');
    public userNameLabel = $('.color-blacks-54.text-align-end');

    
    async signUpButtonClick(){
        await this.signUpButton.click();
    }
}