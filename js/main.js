const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content items
function SelectItem(e){

    removeBorder();
    removeShow();
    //To add border to the selected tab
    this.classList.add('tab-border');
    //Grab content tiems from DOM
    const tabContentITem = document.querySelector(`#${this.id}-content`);
    // Add Show Class
    tabContentITem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//Listen for tab click
tabItems.forEach(item => item.addEventListener('click', SelectItem));

