
const locators=require('../home-pages/home-pages-locator');

class homePages{

    goToHOmePage(){
        cy.visit('https://www.demoblaze.com/index.html'); // melakukan pengujian 
    }
    verifyHomePageAppears(){
        cy.xpath(locators.datatestid.ImageCompanylogo).should('be.visible');
    }
    clickLogInMenu(){
        cy.xpath('//*[@id="login2"]').click();
    }
    verifyLogInModalAppears(){
        cy.xpath('//*[@id="LogInModalLabel"]').should('be.visible'); 
        cy.wait(5000);
    } 
    fillLogInUsername(){
        cy.xpath('//*[@id="loginusername"]').type('binsar24@gmail.com'); //melakukan pengujian input username
    
    }
    fillLogInPassword(){
        cy.xpath('//*[@id="loginpassword"]').type('binsa123');//melakukan pengujian input password

    }
    clickLogInpButton(){
        cy.xpath('//[@type= "button") and contains(., "Login")]').click();
    }
    verifyAlertAppears(){
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('Login Successfully.');
            });
    }
}

module.exports = new homePages();