//Global variables
let paragraph = document.getElementById('para')
let paragraph2 = document.getElementById('para2')
 let lorem_arr = ['Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam cupiditate doloremque repellat, tempore, officia placeat ex provident accusantium blanditiis, accusamus aspernatur iure fugit dolorum consectetur qui porro eaque dolorem nihil soluta ipsam excepturi natus. Cumque qui labore rem, delectus minima veritatis modi voluptas assumenda molestiae nemo fugit illum sunt dicta.',
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quae accusamus maiores neque facere reprehenderit error cumque iusto. Sit praesentium itaque sequi quae! Quia, veritatis!',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti pariatur distinctio doloribus iste aperiam nostrum officiis, fuga placeat sit neque perspiciatis vero odio voluptatum quidem ullam vel, dolores, facere necessitatibus fugiat reiciendis dolorum natus minus. Consequatur dignissimos nostrum molestias dolor a dolores, ut explicabo inventore sed tempore, sunt recusandae quaerat eos reiciendis soluta architecto non! Dolorem, quae impedit delectus ab obcaecati sint repudiandae! Nemo, ullam modi placeat maiores alias consectetur eligendi veniam non voluptatibus magni!',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veritatis minima tempora cum quia repellat illo ex, dignissimos asperiores suscipit temporibus deserunt quis sequi quibusdam, fuga molestiae sit voluptatibus nisi error nulla alias. Minus similique quidem minima obcaecati optio, suscipit ab. Doloremque nam tempore quo facere cumque. Similique et, est quibusdam ab velit unde provident tenetur veniam placeat vero natus quidem nisi omnis ratione doloremque nobis pariatur distinctio amet minima soluta, saepe magni iure! Sequi fuga aperiam dolorem quisquam quod modi incidunt nostrum id eius beatae voluptas adipisci accusantium, non libero pariatur aliquid corrupti rem dolorum tempore doloribus aspernatur autem?']
let lorem_txt = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quae accusamus maiores neque facere reprehenderit error cumque iusto. Sit praesentium itaque sequi quae! Quia, veritatis!'
let btn_arr = document.querySelectorAll('.speed-btn')
let btn_arr2 = document.querySelectorAll('.speed-btn2')
let speed = null;
let speed2 = 2000;
let pause = document.querySelector('.pause-btn')
let play = document.querySelector('.play-btn')
let pp_container = document.querySelector('.play-pause-container')
let pp_container2 = document.querySelector('.play-pause-container2')
let pause2 = document.querySelector('.pause-btn2')
let play2 = document.querySelector('.play-btn2')
let btn_container = document.querySelector('.btn-container')
let btn_container2 = document.querySelector('.btn-container2')
let optionsArr = document.querySelectorAll('.btn-option')
let optionsContainer = document.querySelectorAll('.options-container')
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
let containerAppear2 = () => {
  pp_container2.classList.remove('origin2')
  pp_container2.classList.add('appear2')
  pause.classList.remove('pointer-events-none')

}
let containerHide2 = () => {
  setTimeout(()=>{
    pp_container2.classList.add('origin2')
    pp_container2.classList.remove('appear2')
    pause.classList.add('pointer-events-none')
  },500)

}
let appearContainer = () =>{
btn_container.classList.add('appeared')
btn_container.classList.remove('hidden-back')
}
let appearContainer2 = () =>{
  btn_container2.classList.add('appeared')
  btn_container2.classList.remove('hidden-back')
  }
let HideContainer = () =>{
  btn_container.classList.remove('appeared')
  btn_container.classList.add('hidden-back')
}
let HideContainer2 = () =>{
  btn_container2.classList.remove('appeared')
  btn_container2.classList.add('hidden-back')
}
//set pause/play background
let pauseBg = (pause) => {
  setTimeout(()=>{
    pause.classList.add('bg-red-600')
    pause.classList.add('text-white')
  },500)
}
let playBg = (play) => {
  setTimeout(()=>{
    play.classList.add('bg-green-600')
  play.classList.add('text-white')
  },500)
}
//remove pause/play background
let pauseBgRm = (pause) => {
  setTimeout(()=>{
    pause.classList.remove('bg-red-600')
    pause.classList.remove('text-white')
  },500)
}
let playBgRm = (play) => {
  setTimeout(()=>{
    play.classList.remove('bg-green-600')
    play.classList.remove('text-white')
  },500)
}
//set pause/play background
let pauseBg2 = (pause) => {
  setTimeout(()=>{
    pause2.classList.add('bg-red-600')
    pause2.classList.add('text-white')
  },500)
}
let playBg2 = (play) => {
  setTimeout(()=>{
    play2.classList.add('bg-green-600')
    play2.classList.add('text-white')
  },500)
}
//remove pause/play background
let pauseBgRm2 = (pause) => {
  setTimeout(()=>{
    pause2.classList.remove('bg-red-600')
    pause2.classList.remove('text-white')
  },500)
}
let playBgRm2 = (play) => {
  setTimeout(()=>{
    play2.classList.remove('bg-green-600')
    play2.classList.remove('text-white')
  },500)
}
//show each button as active. (transform:scale(1.5))
btnActive = (btn) => {
  blinkFn(btn_arr,true)
  btn.classList.add('btn-active')
  btn.classList.remove('btn-not-active')
}
btnActive2 = (btn) => {
  blinkFn(btn_arr2,false)
  btn.classList.add('btn-active')
  btn.classList.remove('btn-not-active')
}
//Hide each button - not active. (transform:scale(0))
btnNotActive = (btn) => {
  btn.classList.remove('btn-active')
  btn.classList.add('btn-not-active')
}
btnNotActive2 = (btn) => {
  btn.classList.remove('btn-active')
  btn.classList.add('btn-not-active')
}
//appear/hide pause/play elements with classLists
let pauseAppear = () => {
  setTimeout(()=>{
    pause.classList.remove('btn-origin')
    pause.classList.add('btn-appear')
    pause.classList.remove('pointer-events-none')
  },150)
}
let pauseHide = () => {
  setTimeout(()=>{
    pause.classList.add('btn-origin')
    pause.classList.remove('btn-appear')
    pause.classList.add('pointer-events-none')
  },150)
}
let playAppear = () => {
  setTimeout(()=>{
    play.classList.remove('btn-origin')
    play.classList.add('btn-appear')
    play.classList.remove('pointer-events-none')

  },150)
}
let playHide = () => {
  setTimeout(()=>{
    play.classList.add('btn-origin')
    play.classList.remove('btn-appear')
    play.classList.add('pointer-events-none')

  },150)
}
let pauseAppear2 = () => {
  setTimeout(()=>{
    pause2.classList.remove('btn-origin')
    pause2.classList.add('btn-appear')
    pause2.classList.remove('pointer-events-none')
  },150)
}
let pauseHide2 = () => {
  setTimeout(()=>{
    pause2.classList.add('btn-origin')
    pause2.classList.remove('btn-appear')
    pause2.classList.add('pointer-events-none')
  },150)
}
let playAppear2 = () => {
  setTimeout(()=>{
    play2.classList.remove('btn-origin')
    play2.classList.add('btn-appear')
    play2.classList.remove('pointer-events-none')

  },150)
}
let playHide2 = () => {
  setTimeout(()=>{
    play2.classList.add('btn-origin')
    play2.classList.remove('btn-appear')
    play2.classList.add('pointer-events-none')

  },150)
}
//default speed
function autoTextFn(text, heading, speed) {
let next = []
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
        appearContainer()
        heading.textContent = ''
      },1500)
      containerHide()
      playHide()
      pauseHide()
      pauseBgRm(pause)
      playBgRm(play)
      clearInterval(timer)//clearInterval once both lengths are the same
      //enable pointer events for all buttons
      btn_arr.forEach(btn => {
        btn.classList.remove('pointer-events-none')
        btnActive(btn)
      })
    }
  }, speed)
 //clearInterval if pause btn is pressed
  pause.addEventListener('click',()=>{
    appearContainer()
    playAppear()
    pauseHide()
    playBg(play)
    pauseBgRm(pause)
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

function setVisible(btn){
  setTimeout(()=>{
    btn.style='opacity:1'
  },90)
}
//blink & blinkFn to illuminate the numbered-buttons
let blink = (btn) => {
btn.style='opacity:0'
setTimeout(()=>{
btn.style='opacity:1'
},150)
}
let blinkFn = (button,bool) => {
  if(bool){
    for(let i = button.length-1; i >= 0; i--){
      // blink right to left
      setTimeout(()=>{
        i = (button.length-1)-i
        console.log(i)
        blink(button[i])
      },100*(i))
    }
  }
  else{
    for(let i = 0; i < button.length; i++){
      setTimeout(()=>{
        blink(button[i])
      },100*i)
    }
  }

  }

blinkFn(btn_arr,false)
blinkFn(btn_arr2,true)
btn_arr.forEach((btn, i) => {

  btn.addEventListener('click', e => {
    HideContainer()
    containerAppear()
    pauseAppear()
    playHide()
    speed = e.target.textContent
    let text = randomText()
    let target = paragraph
    pauseBg(pause)
    playBgRm(play)
    paragraph.style='opacity:0;transition:.25s;'
    setTimeout(()=>{
      paragraph.style='opacity:1;transition:.25s;'
    },250)
    if (e.target === btn) {
      autoTextFn(text, target, speed)
      btn_arr.forEach(b => {
        b.classList.add('pointer-events-none')
        btnNotActive(b)
    })
      play.addEventListener('click',()=>{
        HideContainer()
        playHide()
        pauseAppear()
        pauseBg(pause)
        playBgRm(play)
        autoTextFn(text, target, speed)
        HideContainer()
        btn_arr.forEach(btn => btn.classList.add('pointer-events-none'))
      })
    }

  })
})


function hoverEffect(arr){
  arr.forEach(word =>{
    word.addEventListener('mouseover',e=>{
      e.currentTarget.style='opacity:0;transition:.25s;cursor:pointer;'
    })
    word.addEventListener('mouseout',e=>{
      e.currentTarget.style='opacity:1;transition:.25s;cursor:pointer;'
    })
  })
}

function blinkMe(nw,sp){
  nw.classList.add('blink-2')
  console.log(sp)
  setTimeout(()=>{
    nw.classList.remove('blink-2')
  },((sp)))
}
function optionsAppear(elem){
  elem.classList.remove('options-not-active')
  elem.classList.add('options-active')
}
function optionsRemove(elem){
  elem.classList.add('options-not-active')
  elem.classList.remove('options-active')
}
function noPointer(arr){
  arr.forEach(o=>o.classList.add('pointer-events-none'))
}
// noPointer(optionsArr)

function yesPointer(arr){
    arr.forEach(o=>o.classList.remove('pointer-events-none'))
}
function whichBtn(words,speed_arg){
  optionsArr.forEach(opt=>{
    opt.addEventListener('click',e=>{
      noPointer(optionsArr)
      pause2.addEventListener('click',e=>{
        yesPointer(optionsArr)
        // optionsAppear(optionsContainer)
      })
      console.log(e.target)
      if(e.target.textContent==='ASC'){
        console.log('asc')
          for(let i=0; i < words.length; i++){
            // let nextWord = words[Math.floor(Math.random()*words.length)]
            let timer2 = setTimeout(()=>{
              blinkMe(words[i],speed_arg)
              hoverEffect(words)
            },(speed_arg) * (i+1))
            pause2.addEventListener('click',e=>{
              clearTimeout(timer2)
            })
          }
          return;
      }
      if(e.target.textContent==='DESC'){
        console.log('dec')

        for(let i=words.length-1; i > 0; i--){
          // let nextWord = words[Math.floor(Math.random()*words.length)]
          let timer2 = setTimeout(()=>{
            i = (words.length)-i
            blinkMe(words[i],speed_arg)
            hoverEffect(words)
          },(speed_arg) * (i+1))
          pause2.addEventListener('click',e=>{
            clearTimeout(timer2)
          })
        }
        return;
    }
    if(e.target.textContent==='RANDOM'){
      console.log('random')

      for(let i=words.length-1; i > 0; i--){
        let nextWord = words[Math.floor(Math.random()*words.length)]
        let timer2 = setTimeout(()=>{
          i = (words.length)-i
          blinkMe(nextWord,speed_arg)
          hoverEffect(words)
        },(speed_arg) * (i+1))
        pause2.addEventListener('click',e=>{
          clearTimeout(timer2)
        })
      }
      return;
  }
    })
  })
}
function textAnimationBlink(speed_arg,p2,bool){
  if(!bool){
    let spans = document.querySelectorAll('.fade')
    spans.forEach(sp=>sp.classList.remove('blink-2'))
  }
  else{
//set speed according to btn click
p2.textContent = lorem_arr[Math.floor(Math.random()*lorem_arr.length)]
//split text into an array
let text = p2.textContent.split` `
//map over the text array, enclose each word into a span, and assign to p2
p2.innerHTML = text.map(x=>`<span class="fade">${x}</span>`).join` `
let allWords = document.querySelectorAll('.fade')
whichBtn(allWords,speed_arg)
  }

}
btn_arr2.forEach(btn=>{

  btn.addEventListener('click',e=>{
    yesPointer(optionsArr)
    HideContainer2()
    containerAppear2()
    pauseAppear2()
    playHide2()
    pauseBg2(pause2)
    playBgRm2(play2)
    btn_arr2.forEach(b => {
      b.classList.add('pointer-events-none')
      btnNotActive(b)
  })

    let first_letter = e.target.textContent[0]
    speed2 = +first_letter * 500;
    paragraph2.style='opacity:0;transition:.25s;'
    setTimeout(()=>{
      paragraph2.style='opacity:1;transition:.25s;'
      textAnimationBlink(speed2,paragraph2,true)
    },250)  
  })

})
//pause animation
pause2.addEventListener('click',()=>{
  yesPointer(optionsArr)
  appearContainer2()
  playAppear2()
  pauseHide2()
  playBg2(play2)
  pauseBgRm2(pause2)
  textAnimationBlink(speed2,paragraph2,false)
  btn_arr2.forEach(b => {
    b.classList.remove('pointer-events-none')
    btnActive2(b)
})
//play animation
play2.addEventListener('click',()=>{
          textAnimationBlink(speed2,paragraph2,true)
          HideContainer2()
          playHide2()
          pauseAppear2()
          pauseBg2(pause2)
          playBgRm2(play2)
          btn_arr2.forEach(btn => btn.classList.add('pointer-events-none'))
        })
})

