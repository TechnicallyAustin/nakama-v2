export function createPage(){
    const pageContent = document.querySelector('.page-content');
    const page = {
        header: function(){
            const header = pageContent.appendChild(document.createElement('header'));
            header.classList.add('page-header');
        },
        main: function(){
            const main = pageContent.appendChild(document.createElement('main'));
            main.classList.add('page-main');
        },
        footer: function(){
            const footer = pageContent.appendChild(document.createElement('footer'));
            footer.classList.add('page-footer');
        }
    };
    page.header();
    page.main();
    page.footer();
}