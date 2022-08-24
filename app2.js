const serviceContentDiv= document.querySelector('.service-content');
const serviceContent = ['Web development', 'Logo Designer', 'Branding', 'Others'];


serviceContentDiv.innerHTML = serviceContent.map(services => {
    return `
    <p>${services}</p>
    `
}).join('')
