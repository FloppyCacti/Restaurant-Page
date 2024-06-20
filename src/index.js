import homePage from './home_page.js';
import menuPage from './menu_page.js';
import './style.css';

const buttons = document.querySelectorAll('.button a');

buttons.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        
        let id = element.getAttribute('id');

        switch(id){
            case 'homeButton':
                homePage();
                break;
            case 'menuButton':
                menuPage();
                break;
            case 'contactButton':
                contactPage();
                break;
        }
    })
});