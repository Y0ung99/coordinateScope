const cursor = document.querySelector('.cursor');
const column = document.querySelector('.column');
const row = document.querySelector('.row');
const coordInfo = document.querySelector('.coordinfo');


addEventListener('load', () => {
    const cursorRect = cursor.getBoundingClientRect();
    console.log(cursorRect);
    const cursorHalfWidth = cursorRect.width / 2;
    const cursorHalfHeight = cursorRect.height / 2;

    document.addEventListener('mousemove', event => {
        column.style.transform = `translateX(${event.clientX}px`; 
        row.style.transform = `translateY(${event.clientY}px)`;
        cursor.style.transform = `translate(${event.clientX-cursorHalfWidth}px, ${event.clientY-cursorHalfHeight}px)`;
        coordInfo.style.transform = `translate(${event.clientX+20}px, ${event.clientY+20}px)`;
        coordInfo.innerHTML = convertHTML(event);
    })
    
    function convertHTML(event) {
        return `
        <span>${event.clientX}px, ${event.clientY}px</span>
        `
    }
})

