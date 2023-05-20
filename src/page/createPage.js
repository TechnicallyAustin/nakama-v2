export function createPage(){
    const pageContent = document.querySelector('.page-content');
    const page = {
        header: function(){
            const header = pageContent.appendChild(document.createElement('header'));
            header.setAttribute('class', 'page-header w-100 h-100 bg-dark');
        },
        main: function(){
            const main = pageContent.appendChild(document.createElement('main'));
            main.setAttribute('class', 'page-main w-100 h-100 bg-info');
        },
        footer: function(){
            const footer = pageContent.appendChild(document.createElement('footer'));
            footer.setAttribute('class', 'page-footer w-100 h-100 bg-dark');
        }
    };
    page.header();
    page.main();
    page.footer();
}