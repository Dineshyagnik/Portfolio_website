console.log('Hello');

document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('hideSidebar');
    if (document.querySelector('.sidebar').classList.contains('hideSidebar')) {
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else {
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'
        }, 300)
    }
})