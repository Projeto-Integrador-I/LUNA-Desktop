const banner = document.getElementById('banner')
const slides = document.createElement('div')
const nav_auto = document.createElement('div')
const manual_nav = document.createElement('div')

slides.setAttribute('class', 'slides')
nav_auto.setAttribute('class', 'navigation-auto')
manual_nav.setAttribute('class', 'manual-navigation')

for (let i = 1; i < 4; i++) {
    const input = document.createElement('input')

    input.setAttribute('type', 'radio')
    input.setAttribute('name', 'radio-btn')
    input.setAttribute('id', `radio_${i}`)

    slides.appendChild(input)
}

for (let i = 1; i < 4; i++) {
    const slide = document.createElement('div')
    const img = document.createElement('img')

    slide.setAttribute('class', (i == 1 ? 'slide first' : 'slide'))

    img.setAttribute('src', `../../../assets/homeSlider/banner_${i}.jpg`)

    slide.appendChild(img)

    slides.appendChild(slide)
}

banner.appendChild(slides)

for (let i = 1; i < 4; i++) {
    const auto_btn = document.createElement('div')

    auto_btn.setAttribute('class', `auto-btn_${i}`)

    nav_auto.appendChild(auto_btn)
}

banner.appendChild(nav_auto)

for (let i = 1; i < 4; i++) {
    const manual_btn = document.createElement('label')

    manual_btn.setAttribute('for', 'radio_' + i)
    manual_btn.setAttribute('class', 'manual-btn')

    manual_nav.appendChild(manual_btn)
}

banner.appendChild(manual_nav)

let count = 1

document.getElementsByClassName('auto-btn_' + count)[0].style.backgroundColor = '#ffffff'

setInterval(() => {
    if (count > 1) {
        document.getElementsByClassName('auto-btn_' + (count - 1))[0].style.backgroundColor = 'transparent'
    }

    if (count != 3) {
        document.getElementsByClassName('auto-btn_3')[0].style.backgroundColor = 'transparent'
    }

    document.getElementById(`radio_${count}`).checked = true
    document.getElementsByClassName(`auto-btn_${count}`)[0].style.backgroundColor = '#ffffff'

    count++

    if (count > 3) {
        count = 1
    }
}, 5000)

// Style --------------------------------------------------------
const style = document.createElement('style')

style.innerHTML = `
#banner {
    margin: 0 auto;
    width: 100vw;
    height: auto;
    overflow: hidden;
  }
  
  .slides {
    width: 400%;
    height: auto;
    display: flex;
  }
  
  .slides input {
    display: none;
  }
  
  .slide {
    width: 25%;
    position: relative;
    transition: 1.5s;
  }
  
  .slide img {
    width: 100%;
  }
  
  .manual-navigation {
    position: absolute;
    width: 100%;
    margin-top: -30px;
    display: flex;
    justify-content: center;
  }
  
  .manual-btn {
    background-color: #ffffff99;
    padding: 6px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s;
  }
  
  .manual-btn:not(:last-child) {
    margin-right: 20px;
  }
  
  .manual-btn:hover {
    background-color: #ffffff;
  }
  
  #radio_1:checked ~ .first {
    margin-left: 0;
  }
  
  #radio_2:checked ~ .first {
    margin-left: -25%;
  }
  
  #radio_3:checked ~ .first {
    margin-left: -50%;
  }

  .navigation-auto div {
    padding: 6px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s;
  }
  
  .navigation-auto {
    position: absolute;
    width: 100%;
    margin-top: -30px;
    display: flex;
    justify-content: center;
  }
  
  .navigation-auto div:not(:last-child) {
    margin-right: 20px;
  }
`

document.head.appendChild(style)

// --------------------------------------------------------------