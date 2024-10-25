class localStorage {
    constructor(){
        this.loginPseudo();
        this.loginPassword();
        this.recipeTitle();
        this.recipePreparationTime();
        this.recipeCookingTime();
        this.recipeRestTime();
        this.recipeHowManyPeople();
        this.recipeStep1();
        this.recipeStep2();
        this.recipeStep3();
        this.recipeStep4();
        this.recipeStep5();
        this.recipeStep6();
    };
    recipeStep6(){
        let recipeStep6 = document.getElementById('recipeStep6');
        if (recipeStep6 != null){
            recipeStep6.addEventListener("keyup", ()=> {
                let recipeStep6Value = recipeStep6.value;
                window.localStorage.removeItem('step6');
                window.localStorage.setItem('step6',recipeStep6Value);
            });
            recipeStep6.value = window.localStorage.getItem('step6');
        };
    };
    recipeStep5(){
        let recipeStep5 = document.getElementById('recipeStep5');
        if (recipeStep5 != null){
            recipeStep5.addEventListener("keyup", ()=> {
                let recipeStep5Value = recipeStep5.value;
                window.localStorage.removeItem('step5');
                window.localStorage.setItem('step5',recipeStep5Value);
            });
            recipeStep5.value = window.localStorage.getItem('step5');
        };
    };
    recipeStep4(){
        let recipeStep4 = document.getElementById('recipeStep4');
        if (recipeStep4 != null){
            recipeStep4.addEventListener("keyup", ()=> {
                let recipeStep4Value = recipeStep4.value;
                window.localStorage.removeItem('step4');
                window.localStorage.setItem('step4',recipeStep4Value);
            });
            recipeStep4.value = window.localStorage.getItem('step4');
        };
    };
    recipeStep3(){
        let recipeStep3 = document.getElementById('recipeStep3');
        if (recipeStep3 != null){
            recipeStep3.addEventListener("keyup", ()=> {
                let recipeStep3Value = recipeStep3.value;
                window.localStorage.removeItem('step3');
                window.localStorage.setItem('step3',recipeStep3Value);
            });
            recipeStep3.value = window.localStorage.getItem('step3');
        };
    };
    recipeStep2(){
        let recipeStep2 = document.getElementById('recipeStep2');
        if (recipeStep2 != null){
            recipeStep2.addEventListener("keyup", ()=> {
                let recipeStep2Value = recipeStep2.value;
                window.localStorage.removeItem('step2');
                window.localStorage.setItem('step2',recipeStep2Value);
            });
            recipeStep2.value = window.localStorage.getItem('step2');
        };
    };
    recipeStep1(){
        let recipeStep1 = document.getElementById('recipeStep1');
        if (recipeStep1 != null){
            recipeStep1.addEventListener("keyup", ()=> {
                let recipeStep1Value = recipeStep1.value;
                window.localStorage.removeItem('step1');
                window.localStorage.setItem('step1',recipeStep1Value);
            });
            recipeStep1.value = window.localStorage.getItem('step1');
        };
    };
    recipeHowManyPeople(){
        let recipeHowManyPeople = document.getElementById('recipeHowManyPeople');
        if (recipeHowManyPeople != null){
            recipeHowManyPeople.addEventListener("keyup", ()=> {
                let recipeHowManyPeopleValue = recipeHowManyPeople.value;
                window.localStorage.removeItem('howManyPeople');
                window.localStorage.setItem('howManyPeople',recipeHowManyPeopleValue);
            });
            recipeHowManyPeople.value = window.localStorage.getItem('howManyPeople');
        };
    };
    recipeRestTime(){
        let recipeRestTime = document.getElementById('recipeRestTime');
        if (recipeRestTime != null){
            recipeRestTime.addEventListener("keyup", ()=> {
                let recipeRestTimeValue = recipeRestTime.value;
                window.localStorage.removeItem('restTime');
                window.localStorage.setItem('restTime',recipeRestTimeValue);
            });
            recipeRestTime.value = window.localStorage.getItem('restTime');
        };
    };
    recipeCookingTime(){
        let recipeCookingTime = document.getElementById('recipeCookingTime');
        if (recipeCookingTime != null){
            recipeCookingTime.addEventListener("keyup", ()=> {
                let recipeCookingTimeValue = recipeCookingTime.value;
                window.localStorage.removeItem('cookingTime');
                window.localStorage.setItem('cookingTime',recipeCookingTimeValue);
            });
            recipeCookingTime.value = window.localStorage.getItem('cookingTime');
        };
    };
    recipePreparationTime(){
        let recipePreparationTime = document.getElementById('recipePreparationTime');
        if (recipePreparationTime != null){
            recipePreparationTime.addEventListener("keyup", ()=> {
                let recipePreparationTimeValue = recipePreparationTime.value;
                window.localStorage.removeItem('preparationTime');
                window.localStorage.setItem('preparationTime',recipePreparationTimeValue);
            });
            recipePreparationTime.value = window.localStorage.getItem('preparationTime');
        };
    };
    recipeTitle(){
        let recipeTitle = document.getElementById('recipeTitle');
        if (recipeTitle != null){
            recipeTitle.addEventListener("keyup", ()=> {
                let recipeTitleValue = recipeTitle.value;
                window.localStorage.removeItem('title');
                window.localStorage.setItem('title',recipeTitleValue);
            });
            recipeTitle.value = window.localStorage.getItem('title');
        };
    };
    loginPseudo(){
        let loginPseudo = document.getElementById('loginPseudo');
        if (loginPseudo != null){
            loginPseudo.addEventListener("keyup", ()=> {
                let loginPseudoValue = loginPseudo.value;
                window.localStorage.removeItem('pseudo');
                window.localStorage.setItem('pseudo',loginPseudoValue);
            });
            loginPseudo.value = window.localStorage.getItem('pseudo');
        };
        
    };
    loginPassword(){
        let loginPassword = document.getElementById('loginPassword');
        if (loginPassword != null){
            loginPassword.addEventListener("keyup", ()=> {
                let loginPasswordValue = loginPassword.value;
                window.localStorage.removeItem('password');
                window.localStorage.setItem('password',loginPasswordValue);
            });
            loginPassword.value = window.localStorage.getItem('password');
        };
    };
};

let newLocalStorage = new localStorage;