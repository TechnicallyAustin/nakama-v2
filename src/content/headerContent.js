export function headerContent(){
    const header = document.querySelector('.page-header');
    const logoContainer = header.appendChild(document.createElement('div'));
    logoContainer.setAttribute("class", "logo-container text-white")
    const menuContainer = header.appendChild(document.createElement('div'));
    menuContainer.setAttribute("class", "menu-container text-white")

    const elements = {
        title: function(){
            const title = logoContainer.appendChild(document.createElement('p'));
            title.setAttribute("class", "nakama-title")
            title.textContent = "Nakama"
        },
        logo: function(){
            const logo = logoContainer.appendChild(document.createElement('img'));
            logo.setAttribute("class", "nakama-logo")
            logo.setAttribute("src", "")
            logo.setAttribute("alt", "")
        },
        menu: function(){
            const menu = menuContainer.appendChild(document.createElement('ul'));
            menu.setAttribute("class", "menu")
            
            const menuItems = ["Menu 1", "Menu 2", "Menu 3"]
            menuItems.forEach(item => {
                const menuItem = menu.appendChild(document.createElement('li'));
                menuItem.textContent = item
            })

        }
    }
    elements.title()
    elements.logo()
    elements.menu()
}