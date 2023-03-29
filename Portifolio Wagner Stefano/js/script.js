 const control = document.querySelectorAll('.control');
 let currentItem = 0;
 const items = document.querySelectorAll('.Project_image');
 const maxItems = items.length;
 controls.forEach(control => {
    control.addEventListener('click'), () => {
        const isLeft = control.classList.contains("arrow-left");
        if(isLeft) {
            currentItem -= 1;
        } else{
            currentItem += 1;
        }

        if (currentItem >=  maxItems){
            currentItem = 0;
        }

        if (currentItem < 0){
            currentItem = maxItems -1;
        }

        items.forEach(Project_image => items.classList.remove('current-item'));
    }
    
 });