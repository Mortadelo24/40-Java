import html from './colorFlipper.html?raw';


const getNewColor = ():string =>{
    const letters = '0123456789ABCDEF';
    let color:string = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let currentColor: string = "white";



const template = document.createElement("div") as HTMLDivElement;
template.innerHTML = html;

const spanColor =  template.querySelector<HTMLSpanElement>("#colorCodeSpan")!

const changeBackgroundColor = (color: string)=>{
    template.querySelector<HTMLDivElement>("#backGround")!.style.backgroundColor = color;
    // document.querySelector("body")!.style.backgroundColor = color;
}
const changeColorSpan = (color: string) =>{
    spanColor.style.color = color;
    spanColor.innerText = color;
}



const changeColorButton = template.querySelector("#changeColorButton");


changeColorButton?.addEventListener("click",()=>{
    currentColor =  getNewColor();
    changeBackgroundColor(currentColor);
    changeColorSpan(currentColor);
})







const renderColorFlipper = (element: HTMLElement)=>{
    element.innerHTML = "";
    element.appendChild(template);
}

export { 
    renderColorFlipper
}