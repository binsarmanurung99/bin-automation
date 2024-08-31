
const locators=require('../home-pages/home-pages-locator');

class homePages{

    goToHOmePage(){
        cy.visit('https://www.demoblaze.com/index.html'); // melakukan pengujian 
    }
    verifyHomePageAppears(){
        cy.xpath(locators.datatestid.ImageCompanylogo).should('be.visible');
    }
    clickSignUpMenu(){
        cy.xpath('//*[@id="signin2"]').click();
    }
    verifySignUpModalAppears(){
        cy.xpath('//*[@id="signInModalLabel"]').should('be.visible'); 
        cy.wait(5000);
    } 
    fillUsername(){
        cy.xpath('//*[@id="sign-username"]').type('binsar24@gmail.com'); //melakukan pengujian input username
    
    }
    fillPassword(){
        cy.xpath('//*[@id="sign-password"]').type('binsa123');//melakukan pengujian input password

    }
    clickSignUpButton(){
        cy.xpath('//[@type= "button") and contains(., "Sign Up")]').click();
    }
    verifyAlertAppears(){
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('This user already exist.');
            });
    }
}

module.exports = new homePages();