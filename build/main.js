//Global variables
let paragraph = document.getElementById('para')
let lorem_arr = ['Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam cupiditate doloremque repellat, tempore, officia placeat ex provident accusantium blanditiis, accusamus aspernatur iure fugit dolorum consectetur qui porro eaque dolorem nihil soluta ipsam excepturi natus. Cumque qui labore rem, delectus minima veritatis modi voluptas assumenda molestiae nemo fugit illum sunt dicta.',
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quae accusamus maiores neque facere reprehenderit error cumque iusto. Sit praesentium itaque sequi quae! Quia, veritatis!',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti pariatur distinctio doloribus iste aperiam nostrum officiis, fuga placeat sit neque perspiciatis vero odio voluptatum quidem ullam vel, dolores, facere necessitatibus fugiat reiciendis dolorum natus minus. Consequatur dignissimos nostrum molestias dolor a dolores, ut explicabo inventore sed tempore, sunt recusandae quaerat eos reiciendis soluta architecto non! Dolorem, quae impedit delectus ab obcaecati sint repudiandae! Nemo, ullam modi placeat maiores alias consectetur eligendi veniam non voluptatibus magni!',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veritatis minima tempora cum quia repellat illo ex, dignissimos asperiores suscipit temporibus deserunt quis sequi quibusdam, fuga molestiae sit voluptatibus nisi error nulla alias. Minus similique quidem minima obcaecati optio, suscipit ab. Doloremque nam tempore quo facere cumque. Similique et, est quibusdam ab velit unde provident tenetur veniam placeat vero natus quidem nisi omnis ratione doloremque nobis pariatur distinctio amet minima soluta, saepe magni iure! Sequi fuga aperiam dolorem quisquam quod modi incidunt nostrum id eius beatae voluptas adipisci accusantium, non libero pariatur aliquid corrupti rem dolorum tempore doloribus aspernatur autem?']
let btn_arr = document.querySelectorAll('.speed-btn')
let speed = null;
let pause = document.querySelector('.pause-btn')
let play = document.querySelector('.play-btn')
let pp_container = document.querySelector('.play-pause-container')

function stop(timer){
clearInterval(timer)
}
let containerAppear = () => {
  pp_container.classList.remove('origin')
  pp_container.classList.add('appear')
  pause.classList.remove('pointer-events-none')

}
let containerHide = () => {
  setTimeout(()=>{
    pp_container.classList.add('origin')
    pp_container.classList.remove('appear')
    pause.classList.add('pointer-events-none')
  },500)

}
btnActive = (btn) => {
  btn.classList.add('btn-active')
  btn.classList.remove('btn-not-active')
}
btnNotActive = (btn) => {
  btn.classList.remove('btn-active')
  btn.classList.add('btn-not-active')
}
let pauseAppear = () => {
  setTimeout(()=>{
    pause.classList.remove('btn-origin')
    pause.classList.add('btn-appear')
    pause.classList.remove('pointer-events-none')
  },500)
}
let pauseHide = () => {
  setTimeout(()=>{
    pause.classList.add('btn-origin')
    pause.classList.remove('btn-appear')
    pause.classList.add('pointer-events-none')
  },500)
}
let playAppear = () => {
  setTimeout(()=>{
    play.classList.remove('btn-origin')
    play.classList.add('btn-appear')
    play.classList.remove('pointer-events-none')  

  },500)
}
let playHide = () => {
  setTimeout(()=>{
    play.classList.add('btn-origin')
    play.classList.remove('btn-appear')
    play.classList.add('pointer-events-none')

  },500)
}
//default speed
function autoTextFn(text, heading, speed) {

  text = [...text]//text.split``
  let i = 0, arr = [], len = text.length
  let timer = setInterval(() => {
    i++
    let take = text.shift(text[i])
    arr.push(take)
    heading.textContent = arr.join``
    // console.log(text)//sender
    // console.log(arr)//receiver
    // console.log(arr.length,len)//compare arr's length w/ original text length
    if (arr.length === len) {
      setTimeout(()=>{
        heading.textContent = ''
      },1500)
      containerHide()
      playHide()
      pauseHide()
      clearInterval(timer)//clearInterval once both lengths are the same
      //enable pointer events for all buttons
      btn_arr.forEach(btn => btn.classList.remove('pointer-events-none'))
    }
  }, speed)  
 //clearInterval if pause btn is pressed
  pause.addEventListener('click',()=>{
    playAppear()
    pauseHide()

    stop(timer)
    btn_arr.forEach(b => {
      b.classList.remove('pointer-events-none')
      btnActive(b)
  })
  })
}







const randomText = () => {
  let nextText = lorem_arr[Math.floor(Math.random() * lorem_arr.length)]
  return nextText
}


btn_arr.forEach((btn, i) => {
  btn.addEventListener('click', e => {
    containerAppear()
    pauseAppear()
    playHide()
    speed = e.target.textContent
    let text = randomText()
    let target = paragraph

    if (e.target === btn) {
      autoTextFn(text, target, speed)
      btn_arr.forEach(b => {
        b.classList.add('pointer-events-none')
        btnNotActive(b)
        pause.classList.add('bg-red-600')
        pause.classList.add('text-white')
    })
      play.addEventListener('click',()=>{
        playHide()
        pauseAppear()
        autoTextFn(text, target, speed)
        btn_arr.forEach(btn => btn.classList.add('pointer-events-none'))
      })
    }
    
  })
})






