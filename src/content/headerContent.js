export function headerContent(){
    const header = document.querySelector('.page-header');
    const elements = {
        title: function(){
            const title = header.appendChild(document.createElement('p'));
            title.setAttribute("class", "nakama-title mb-0 ms-3 text-white")
            title.textContent = "Nakama"
        },
        menu: function(){
            const menu = header.appendChild(document.createElement('ul'));
            menu.setAttribute("class", "menu list-unstyled d-flex justify-content-around align-items-center w-50 h-100 mb-0")
            
            const menuItems = ["Menu 1", "Menu 2", "Menu 3"]
            menuItems.forEach(item => {
                const menuItem = menu.appendChild(document.createElement('li'));
                menuItem.setAttribute("class", "menu-item text-white")
                menuItem.textContent = item
            })

        }
    }
    elements.title()
    elements.menu()
}