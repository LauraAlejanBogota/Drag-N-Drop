const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd );

for(const empy of empties ){
    empty.addEventListener('dragover',dragOver);
    empty.addEventListener('dragenter',dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop', dragDrop);   
}

function dragStart() {
    this.className +='hold';
    setTimeout(() => (this.className ='inviseble'),0);
}


function dragEnd() {
    this.className= 'fill';
}
   

function dragOver() {
    console.log('over');
}

function dragEnter() {
    console.log('enter');
}

function dragLeave() {
    console.log('leave');
}

function dragDrop() {
    console.log('drop');
}
