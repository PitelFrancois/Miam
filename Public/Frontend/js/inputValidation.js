class inputValidation {
    constructor(){
        this.contactValidation();
        this.loginValidation();
        this.registerValidation();
        this.recipeValidation();
    };

    contactValidation(){
        if (document.getElementById('contactForm') != null){
            document.getElementById('contactForm').addEventListener('submit',(e)=>{
                let erreur;
                let contactName = document.getElementById('contactName');
                let contactMail = document.getElementById('contactMail');
                let rgpdValide = document.getElementById('rgpdValide');
                let contactTextarea = document.getElementById('contactMytextarea');
                if (rgpdValide.checked === false){
                    erreur = "Veuillez valider la case à cocher.";
                };
                if (!contactTextarea.value) {
                    erreur = "Veuillez renseigner un message.";
                    this.inputBorder();
                    contactMail.style.border = "1px solid red";
                }
                if (!contactMail.value){
                    erreur = "Veuillez renseigner un mail.";
                    this.inputBorder();
                    contactMail.style.border = "1px solid red";
                };
                if (!contactName.value){
                    erreur = "Veuillez renseigner un nom.";
                    this.inputBorder();
                    contactName.style.border = "1px solid red";
                };
                if (erreur){
                    e.preventDefault();
                    document.getElementById('erreurContact').innerHTML = erreur;
                    return false;
                };
            });
        };
    };

    inputBorder(){
        let contactName = document.getElementById('contactName');
        let contactMail = document.getElementById('contactMail');
        contactName.style.border = "1px solid #e1e1e1";
        contactMail.style.border = "1px solid #e1e1e1";
    };

    recipeValidation(){
        if (document.getElementById('addForm') != null){
            document.getElementById('addForm').addEventListener('submit',(e)=>{
                let erreur;
                let recipeTitle = document.getElementById('recipeTitle');
                let recipePreparationTime = document.getElementById('recipePreparationTime');
                let recipeHowManyPeople = document.getElementById('recipeHowManyPeople');
                let recipeStep1 = document.getElementById('recipeStep1');
                
                if (!recipeStep1.value){
                    erreur = "Veuillez renseigner la première étape.";
                };
                if (!recipeHowManyPeople.value){
                    erreur = "Veuillez renseigner le nombre de personnes.";
                };
                if (!recipePreparationTime.value){
                    erreur = "Veuillez renseigner un temps de préparation.";
                };
                if (!recipeTitle.value){
                    erreur = "Veuillez renseigner un titre.";
                };
                if (erreur){
                    e.preventDefault();
                    document.getElementById('erreurAdd').innerHTML = erreur;
                    return false;
                } else {
                    window.localStorage.removeItem('title');
                    window.localStorage.removeItem('preparationTime');
                    window.localStorage.removeItem('cookingTime');
                    window.localStorage.removeItem('restTime');
                    window.localStorage.removeItem('howManyPeople');
                    window.localStorage.removeItem('step1');
                    window.localStorage.removeItem('step2');
                    window.localStorage.removeItem('step3');
                    window.localStorage.removeItem('step4');
                    window.localStorage.removeItem('step5');
                    window.localStorage.removeItem('step6');
                };
            });
        };
    };
    loginValidation(){
        if (document.getElementById('formLogin') != null){
            document.getElementById('formLogin').addEventListener('submit',(e)=>{
                let erreur;
                let pseudo = document.getElementById('loginPseudo');
                let password = document.getElementById('loginPassword');
    
                if (!password.value){
                    erreur = "Veuillez renseigner un mot de passe.";
                };
                if (!pseudo.value){
                    erreur = "Veuillez renseigner un pseudo.";
                };
                
                if (erreur){
                    e.preventDefault();
                    document.getElementById('erreurLogin').innerHTML = erreur;
                    return false;
                };
            });
        };
    };
    registerValidation(){
        if (document.getElementById('formRegister') != null){
            document.getElementById('formRegister').addEventListener('submit',(e)=>{
                let erreur;
                let pseudo = document.getElementById('registerPseudo');
                let mail = document.getElementById('registerMail');
                let mail2 = document.getElementById('registerMail2');
                let password = document.getElementById('registerPassword');
                let password2 = document.getElementById('registerPassword2');
                
                if (password.value != password2.value){
                    erreur = "Les mots de passe ne sont pas identiques.";
                };
                if (mail.value != mail2.value){
                    erreur = "Les adresses mail ne sont pas identiques.";
                };
                if (!password2.value){
                    erreur = "Veuillez renseigner un mot de passe de confirmation.";
                };
                if (!password.value){
                    erreur = "Veuillez renseigner un mot de passe.";
                };
                if (!mail2.value){
                    erreur = "Veuillez renseigner une adresse mail de confirmation.";
                };
                if (!mail.value){
                    erreur = "Veuillez renseigner une adresse mail.";
                };
                if (!pseudo.value){
                    erreur = "Veuillez renseigner un pseudo.";
                };
                
                if (erreur){
                    e.preventDefault();
                    document.getElementById('erreurRegister').innerHTML = erreur;
                    return false;
                };
            });
        };
    };
};

let newInputValidation = new inputValidation;