let checkbox = document.querySelector('.toggle');
let body = document.body;
let headerBg = document.querySelector('.bg');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let sm_items = document.getElementsByClassName('sm-summary-item');
let ov_items = document.getElementsByClassName('sm-overview-item');
let ig_item = document.querySelector('#insta-container');
let nums = document.getElementsByClassName('num');
let mnums = document.getElementsByClassName('min-num');
let usernames = document.getElementsByClassName('username');
let views = document.getElementsByClassName('views');
let numfollowers = document.getElementsByClassName('num-followers');
let a = document.querySelectorAll('a');
let p = document.querySelectorAll('p');
let footer = document.querySelector('footer');

window.addEventListener('load', () => {
    checkbox.addEventListener('change', changeTheme);
});

const changeTheme = () => {
    body.classList.toggle('bg-body');
    headerBg.classList.toggle('header-bg-dark');
    h2.classList.toggle('white');
    p[0].classList.toggle('desat-blue');
    p[1].classList.toggle('desat-blue');
    h3.classList.toggle('white');
    
    for (let i=0; i<sm_items.length; i++) {
        sm_items[i].classList.toggle('bg-item');
        numfollowers[i].classList.toggle('desat-blue');
        nums[i].classList.toggle('white');
        usernames[i].classList.toggle('desat-blue');
    }
    ig_item.classList.toggle('bg-item');

    for (let i=0; i<ov_items.length; i++) {
        ov_items[i].classList.toggle('bg-item');
        mnums[i].classList.toggle('white');
        views[i].classList.toggle('desat-blue');
    }
    a[0].classList.toggle('desat-blue');
    a[1].classList.toggle('desat-blue');
    footer.classList.toggle('white');
}