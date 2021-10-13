const board=document.querySelector('#board')
const SQUARES_NUMBER=500
const colors=['#00FFFF','#40E0D0','#E0FFFF','#B0C4DE','#4682B4']
const item=document.querySelectorAll('#board')

for(let i=0;i<SQUARES_NUMBER;i++){
    const square=document.createElement("div") //создаем динамически див
    square.classList.add('square')//добавляем класс для того чтобы див был квадратиком

    square.addEventListener("mouseover",()=>
        setColor(square))//добавляем слушателя к каждому квадратику(в данном случае когда мы наводим на квадратик(mouseover))
        //когда наводим на квадратик вызывается эта функция сверху
    square.addEventListener('mouseleave', ()=>
        removeColor(square))//событие когда убираем с квадратика мышь

     // square.addEventListener("click",()=>
     //     waves(square)
     //    )

    // square.addEventListener("",()=>
    //     wave(square)
    // )


    board.append(square)

}

// function waves(element){
//     const color=getRandomColor()
//     for (let i = 0; i < item.length; i++) {
//         item[i].style.backgroundColor='#1d1d1d'
//     }}
//
//
//
//
// function wave(element){
//      const color=getRandomColor()
//       for (let i = 0; i < item.length; i++) {
//          item[i].style.backgroundColor=color
//           item[i].style.boxShadow=`0 0 2px #000`
//      }}

    // item.forEach((element)=>{
    //
    // })
    //const item=element.querySelectorAll('.div').backgroundColor='red'
    //element.item.style.backgroundColor= color
    // element.style.backgroundColor=color
    //element.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`


function setColor(element){
    const color=getRandomColor()
    element.style.backgroundColor=color
    element.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor='#1d1d1d'
    element.style.boxShadow=`0 0 2px #000`
}

function getRandomColor(){
    const index=Math.floor(Math.random()*colors.length)
    return colors[index]
}