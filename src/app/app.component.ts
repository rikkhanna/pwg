import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
    
    useLetters = false;
    useNumbers = false;
    useSymbols = false;

    password = "";
    length = 0;
    onChangeLength(value: string){
      const parsedValue = parseInt(value);
      if(!isNaN(parsedValue)){
        this.length = parsedValue;
      }

    }
    onChangeUseLetters(){
      this.useLetters = !this.useLetters;
    }
    onChangeUseNumbers(){
      this.useNumbers = !this.useNumbers;
    }
    onChangeUseSymbols(){
      this.useSymbols = !this.useSymbols;
    }
    onButtonClick(){
      const letters = 'qwertyuiopasdfghjklzxcvbnm';
      const numbers = '0123456789';
      const symbols = '!@#$%^&*()+=';
      let qualifiedstr = '';
      if(this.useLetters){
        qualifiedstr += letters;
      }
      if(this.useNumbers){
        qualifiedstr += numbers;
      }
      if(this.useSymbols){
        qualifiedstr += symbols;
      }

      let generatedPassword = "";
      for(let i=0; i < this.length; i++){
        let index = Math.floor(Math.random() * qualifiedstr.length);
        generatedPassword += qualifiedstr[index];
      }
      this.password = generatedPassword;
      
    }

    
}