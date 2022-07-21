let main = document.querySelector('.main') 
let first = document.querySelector('.first')
let second = document.querySelector('.second')
let spanski = document.querySelector('.spanski-inside')
let i = 0
let korzina = document.querySelector('.korzina')
let a = 1

let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7]

first.onclick = () => {
    a = 1
    korzina.innerHTML = ''
    i = 0
    spanski.innerHTML = i
    main.innerHTML = ''
    arr.splice(5 , 2)
    for(let item of arr) {
        let mainInside = document.createElement('div')
        let forImg = document.createElement('div')
        let img = document.createElement('div')
        let forText = document.createElement('div')
        let Ftext = document.createElement('span')
        let Stext = document.createElement('span')
        let button = document.createElement('button')
        
        mainInside.classList.add('main-inside')
        forImg.classList.add('for-img')
        img.classList.add('img')
        forText.classList.add('for-text')
        Ftext.classList.add('Ftext')
        Stext.classList.add('Stext')
        button.classList.add('btn')
        
        Ftext.innerHTML = 'MEN’S CLOTHING (120)'
        Stext.innerHTML = 'Your perfect pack for everyday use and walks <br> in the forest. Stash your laptop (up to 15 <br> inches) in the padded sleeve, your everyday'
        button.innerHTML = 'В избранное'
        
        main.append(mainInside)
        mainInside.append(forImg)
        forImg.append(img)
        mainInside.append(forText)
        forText.append(Ftext)
        forText.append(Stext)
        forText.append(button)
        button.onclick = () => {
            if(button.innerHTML === 'В избранное') {
                button.innerHTML = 'Добавлено'
                i++
                spanski.innerHTML = i
            } else if(button.innerHTML === 'Добавлено'){
                button.innerHTML = 'В избранное'
                        i--
                        spanski.innerHTML = i
            }
            if(spanski.innerHTML == 0){
                korzina.innerHTML = ''
                let arr2 = []
    
                for(let item2 of arr2){
                    let korzinaInside = document.createElement('div')
                    let firstI = document.createElement('div')
                    let secondI = document.createElement('div')
                    let Simage = document.createElement('div')
                    let Sspan = document.createElement('span')
                    let Tspan = document.createElement('span')
                    let plus = document.createElement('div')
                    let number = document.createElement('span')
                    let minus = document.createElement('div')
                
                    korzinaInside.classList.add('korzinaInside')
                    firstI.classList.add('firstI')
                    secondI.classList.add('secondI')
                    Simage.classList.add('Simage')
                    Sspan.classList.add('Sspan')
                    Tspan.classList.add('Sspan')
                    plus.classList.add('plus')
                    number.classList.add('num')
                    minus.classList.add('plus')
                
                    Sspan.innerHTML = 'category: portfel'
                    Tspan.innerHTML = 'price: 0'
                    plus.innerHTML = '+'
                    number.innerHTML = a
                    minus.innerHTML = '-'
                
                    korzina.append(korzinaInside)
                    korzinaInside.append(firstI)
                    korzinaInside.append(secondI)
                    firstI.append(Simage)
                    firstI.append(Sspan)
                    firstI.append(Tspan)
                    secondI.append(plus)
                    secondI.append(number)
                    secondI.append(minus)
                
                
                    plus.onclick = () => {
                        if(number.innerHTML < 10) {
                            a++
                            number.innerHTML = a
                        }
                    }
                    minus.onclick = () => {
                        if(number.innerHTML > 1) {
                            a--
                            number.innerHTML = a
                        }
                    }
                }
            }
            if(spanski.innerHTML == 1){
                korzina.innerHTML = ''
                let arr2 = [1]
    
                for(let item2 of arr2){
                    let korzinaInside = document.createElement('div')
                    let firstI = document.createElement('div')
                    let secondI = document.createElement('div')
                    let Simage = document.createElement('div')
                    let Sspan = document.createElement('span')
                    let Tspan = document.createElement('span')
                    let plus = document.createElement('div')
                    let number = document.createElement('span')
                    let minus = document.createElement('div')
                
                    korzinaInside.classList.add('korzinaInside')
                    firstI.classList.add('firstI')
                    secondI.classList.add('secondI')
                    Simage.classList.add('Simage')
                    Sspan.classList.add('Sspan')
                    Tspan.classList.add('Sspan')
                    plus.classList.add('plus')
                    number.classList.add('num')
                    minus.classList.add('plus')
                
                    Sspan.innerHTML = 'category: portfel'
                    Tspan.innerHTML = 'price: 0'
                    plus.innerHTML = '+'
                    number.innerHTML = a
                    minus.innerHTML = '-'
                
                    korzina.append(korzinaInside)
                    korzinaInside.append(firstI)
                    korzinaInside.append(secondI)
                    firstI.append(Simage)
                    firstI.append(Sspan)
                    firstI.append(Tspan)
                    secondI.append(plus)
                    secondI.append(number)
                    secondI.append(minus)
                
                
                    plus.onclick = () => {
                        if(number.innerHTML < 10) {
                            a++
                            number.innerHTML = a
                        }
                    }
                    minus.onclick = () => {
                        if(number.innerHTML > 1) {
                            a--
                            number.innerHTML = a
                        }
                    }
                }
            }
            if(spanski.innerHTML == 2){
                korzina.innerHTML = ''
                let arr2 = [1 , 2]
    
                for(let item2 of arr2){
                    let korzinaInside = document.createElement('div')
                    let firstI = document.createElement('div')
                    let secondI = document.createElement('div')
                    let Simage = document.createElement('div')
                    let Sspan = document.createElement('span')
                    let Tspan = document.createElement('span')
                    let plus = document.createElement('div')
                    let number = document.createElement('span')
                    let minus = document.createElement('div')
                
                    korzinaInside.classList.add('korzinaInside')
                    firstI.classList.add('firstI')
                    secondI.classList.add('secondI')
                    Simage.classList.add('Simage')
                    Sspan.classList.add('Sspan')
                    Tspan.classList.add('Sspan')
                    plus.classList.add('plus')
                    number.classList.add('num')
                    minus.classList.add('plus')
                
                    Sspan.innerHTML = 'category: portfel'
                    Tspan.innerHTML = 'price: 0'
                    plus.innerHTML = '+'
                    number.innerHTML = a
                    minus.innerHTML = '-'
                
                    korzina.append(korzinaInside)
                    korzinaInside.append(firstI)
                    korzinaInside.append(secondI)
                    firstI.append(Simage)
                    firstI.append(Sspan)
                    firstI.append(Tspan)
                    secondI.append(plus)
                    secondI.append(number)
                    secondI.append(minus)
                
                
                    plus.onclick = () => {
                        if(number.innerHTML < 10) {
                            a++
                            number.innerHTML = a
                        }
                    }
                    minus.onclick = () => {
                        if(number.innerHTML > 1) {
                            a--
                            number.innerHTML = a
                        }
                    }
                }
            }
            if(spanski.innerHTML == 3){
                korzina.innerHTML = ''
                let arr2 = [1 , 2 , 3]
    
                for(let item2 of arr2){
                    let korzinaInside = document.createElement('div')
                    let firstI = document.createElement('div')
                    let secondI = document.createElement('div')
                    let Simage = document.createElement('div')
                    let Sspan = document.createElement('span')
                    let Tspan = document.createElement('span')
                    let plus = document.createElement('div')
                    let number = document.createElement('span')
                    let minus = document.createElement('div')
                
                    korzinaInside.classList.add('korzinaInside')
                    firstI.classList.add('firstI')
                    secondI.classList.add('secondI')
                    Simage.classList.add('Simage')
                    Sspan.classList.add('Sspan')
                    Tspan.classList.add('Sspan')
                    plus.classList.add('plus')
                    number.classList.add('num')
                    minus.classList.add('plus')
                
                    Sspan.innerHTML = 'category: portfel'
                    Tspan.innerHTML = 'price: 0'
                    plus.innerHTML = '+'
                    number.innerHTML = a
                    minus.innerHTML = '-'
                
                    korzina.append(korzinaInside)
                    korzinaInside.append(firstI)
                    korzinaInside.append(secondI)
                    firstI.append(Simage)
                    firstI.append(Sspan)
                    firstI.append(Tspan)
                    secondI.append(plus)
                    secondI.append(number)
                    secondI.append(minus)
                
                
                    plus.onclick = () => {
                        if(number.innerHTML < 10) {
                            a++
                            number.innerHTML = a
                        }
                    }
                    minus.onclick = () => {
                        if(number.innerHTML > 1) {
                            a--
                            number.innerHTML = a
                        }
                    }
                }
            }
            if(spanski.innerHTML == 4){
                korzina.innerHTML = ''
                let arr2 = [1 , 2 , 3 , 4]
    
                for(let item2 of arr2){
                    let korzinaInside = document.createElement('div')
                    let firstI = document.createElement('div')
                    let secondI = document.createElement('div')
                    let Simage = document.createElement('div')
                    let Sspan = document.createElement('span')
                    let Tspan = document.createElement('span')
                    let plus = document.createElement('div')
                    let number = document.createElement('span')
                    let minus = document.createElement('div')
                
                    korzinaInside.classList.add('korzinaInside')
                    firstI.classList.add('firstI')
                    secondI.classList.add('secondI')
                    Simage.classList.add('Simage')
                    Sspan.classList.add('Sspan')
                    Tspan.classList.add('Sspan')
                    plus.classList.add('plus')
                    number.classList.add('num')
                    minus.classList.add('plus')
                
                    Sspan.innerHTML = 'category: portfel'
                    Tspan.innerHTML = 'price: 0'
                    plus.innerHTML = '+'
                    number.innerHTML = a
                    minus.innerHTML = '-'
                
                    korzina.append(korzinaInside)
                    korzinaInside.append(firstI)
                    korzinaInside.append(secondI)
                    firstI.append(Simage)
                    firstI.append(Sspan)
                    firstI.append(Tspan)
                    secondI.append(plus)
                    secondI.append(number)
                    secondI.append(minus)
                
                
                    plus.onclick = () => {
                        if(number.innerHTML < 10) {
                            a++
                            number.innerHTML = a
                        }
                    }
                    minus.onclick = () => {
                        if(number.innerHTML > 1) {
                            a--
                            number.innerHTML = a
                        }
                    }
                }
            }
            if(spanski.innerHTML == 5){
                korzina.innerHTML = ''
                let arr2 = [1 , 2 , 3 , 4 , 5]
    
                for(let item2 of arr2){
                    let korzinaInside = document.createElement('div')
                    let firstI = document.createElement('div')
                    let secondI = document.createElement('div')
                    let Simage = document.createElement('div')
                    let Sspan = document.createElement('span')
                    let Tspan = document.createElement('span')
                    let plus = document.createElement('div')
                    let number = document.createElement('span')
                    let minus = document.createElement('div')
                
                    korzinaInside.classList.add('korzinaInside')
                    firstI.classList.add('firstI')
                    secondI.classList.add('secondI')
                    Simage.classList.add('Simage')
                    Sspan.classList.add('Sspan')
                    Tspan.classList.add('Sspan')
                    plus.classList.add('plus')
                    number.classList.add('num')
                    minus.classList.add('plus')
                
                    Sspan.innerHTML = 'category: portfel'
                    Tspan.innerHTML = 'price: 0'
                    plus.innerHTML = '+'
                    number.innerHTML = a
                    minus.innerHTML = '-'
                
                    korzina.append(korzinaInside)
                    korzinaInside.append(firstI)
                    korzinaInside.append(secondI)
                    firstI.append(Simage)
                    firstI.append(Sspan)
                    firstI.append(Tspan)
                    secondI.append(plus)
                    secondI.append(number)
                    secondI.append(minus)
                
                
                    plus.onclick = () => {
                        if(number.innerHTML < 10) {
                            a++
                            number.innerHTML = a
                        }
                    }
                    minus.onclick = () => {
                        if(number.innerHTML > 1) {
                            a--
                            number.innerHTML = a
                        }
                    }
                }
            }
            if(spanski.innerHTML == 6){
                korzina.innerHTML = ''
                let arr2 = [1 , 2 , 3 , 4 , 5 , 6]
    
                for(let item2 of arr2){
                    let korzinaInside = document.createElement('div')
                    let firstI = document.createElement('div')
                    let secondI = document.createElement('div')
                    let Simage = document.createElement('div')
                    let Sspan = document.createElement('span')
                    let Tspan = document.createElement('span')
                    let plus = document.createElement('div')
                    let number = document.createElement('span')
                    let minus = document.createElement('div')
                
                    korzinaInside.classList.add('korzinaInside')
                    firstI.classList.add('firstI')
                    secondI.classList.add('secondI')
                    Simage.classList.add('Simage')
                    Sspan.classList.add('Sspan')
                    Tspan.classList.add('Sspan')
                    plus.classList.add('plus')
                    number.classList.add('num')
                    minus.classList.add('plus')
                
                    Sspan.innerHTML = 'category: portfel'
                    Tspan.innerHTML = 'price: 0'
                    plus.innerHTML = '+'
                    number.innerHTML = a
                    minus.innerHTML = '-'
                
                    korzina.append(korzinaInside)
                    korzinaInside.append(firstI)
                    korzinaInside.append(secondI)
                    firstI.append(Simage)
                    firstI.append(Sspan)
                    firstI.append(Tspan)
                    secondI.append(plus)
                    secondI.append(number)
                    secondI.append(minus)
                
                
                    plus.onclick = () => {
                        if(number.innerHTML < 10) {
                            a++
                            number.innerHTML = a
                        }
                    }
                    minus.onclick = () => {
                        if(number.innerHTML > 1) {
                            a--
                            number.innerHTML = a
                        }
                    }
                }
            }
            if(spanski.innerHTML == 7){
                korzina.innerHTML = ''
                let arr2 = [1 , 2 , 3 , 4 , 5 , 6 , 7]
    
                for(let item2 of arr2){
                    let korzinaInside = document.createElement('div')
                    let firstI = document.createElement('div')
                    let secondI = document.createElement('div')
                    let Simage = document.createElement('div')
                    let Sspan = document.createElement('span')
                    let Tspan = document.createElement('span')
                    let plus = document.createElement('div')
                    let number = document.createElement('span')
                    let minus = document.createElement('div')
                
                    korzinaInside.classList.add('korzinaInside')
                    firstI.classList.add('firstI')
                    secondI.classList.add('secondI')
                    Simage.classList.add('Simage')
                    Sspan.classList.add('Sspan')
                    Tspan.classList.add('Sspan')
                    plus.classList.add('plus')
                    number.classList.add('num')
                    minus.classList.add('plus')
                
                    Sspan.innerHTML = 'category: portfel'
                    Tspan.innerHTML = 'price: 0'
                    plus.innerHTML = '+'
                    number.innerHTML = a
                    minus.innerHTML = '-'
                
                    korzina.append(korzinaInside)
                    korzinaInside.append(firstI)
                    korzinaInside.append(secondI)
                    firstI.append(Simage)
                    firstI.append(Sspan)
                    firstI.append(Tspan)
                    secondI.append(plus)
                    secondI.append(number)
                    secondI.append(minus)
                
                
                    plus.onclick = () => {
                        if(number.innerHTML < 10) {
                            a++
                            number.innerHTML = a
                        }
                    }
                    minus.onclick = () => {
                        if(number.innerHTML > 1) {
                            a--
                            number.innerHTML = a
                        }
                    }
                }
            }
        }
        } 
}

second.onclick = () => {
    a = 1
    korzina.innerHTML = ''
    i = 0
    spanski.innerHTML = i
    main.innerHTML = ''
    arr = [1 , 2 , 3 , 4 , 5 , 6 , 7]
    for(let item of arr) {
        let mainInside = document.createElement('div')
        let forImg = document.createElement('div')
        let img = document.createElement('div')
        let forText = document.createElement('div')
        let Ftext = document.createElement('span')
        let Stext = document.createElement('span')
        let button = document.createElement('button')
        
        mainInside.classList.add('main-inside')
        forImg.classList.add('for-img')
        img.classList.add('img')
        forText.classList.add('for-text')
        Ftext.classList.add('Ftext')
        Stext.classList.add('Stext')
        button.classList.add('btn')
        
        Ftext.innerHTML = 'MEN’S CLOTHING (120)'
        Stext.innerHTML = 'Your perfect pack for everyday use and walks <br> in the forest. Stash your laptop (up to 15 <br> inches) in the padded sleeve, your everyday'
        button.innerHTML = 'В избранное'
        
        main.append(mainInside)
        mainInside.append(forImg)
        forImg.append(img)
        mainInside.append(forText)
        forText.append(Ftext)
        forText.append(Stext)
        forText.append(button)
        button.onclick = () => {
            if(button.innerHTML === 'В избранное') {
                button.innerHTML = 'Добавлено'
                i++
                spanski.innerHTML = i
            } else if(button.innerHTML === 'Добавлено'){
                button.innerHTML = 'В избранное'
                        i--
                        spanski.innerHTML = i
            }
            if(spanski.innerHTML == 0){
                korzina.innerHTML = ''
                let arr2 = []
    
                for(let item2 of arr2){
                    let korzinaInside = document.createElement('div')
                    let firstI = document.createElement('div')
                    let secondI = document.createElement('div')
                    let Simage = document.createElement('div')
                    let Sspan = document.createElement('span')
                    let Tspan = document.createElement('span')
                    let plus = document.createElement('div')
                    let number = document.createElement('span')
                    let minus = document.createElement('div')
                
                    korzinaInside.classList.add('korzinaInside')
                    firstI.classList.add('firstI')
                    secondI.classList.add('secondI')
                    Simage.classList.add('Simage')
                    Sspan.classList.add('Sspan')
                    Tspan.classList.add('Sspan')
                    plus.classList.add('plus')
                    number.classList.add('num')
                    minus.classList.add('plus')
                
                    Sspan.innerHTML = 'category: portfel'
                    Tspan.innerHTML = 'price: 0'
                    plus.innerHTML = '+'
                    number.innerHTML = a
                    minus.innerHTML = '-'
                
                    korzina.append(korzinaInside)
                    korzinaInside.append(firstI)
                    korzinaInside.append(secondI)
                    firstI.append(Simage)
                    firstI.append(Sspan)
                    firstI.append(Tspan)
                    secondI.append(plus)
                    secondI.append(number)
                    secondI.append(minus)
                
                
                    plus.onclick = () => {
                        if(number.innerHTML < 10) {
                            a++
                            number.innerHTML = a
                        }
                    }
                    minus.onclick = () => {
                        if(number.innerHTML > 1) {
                            a--
                            number.innerHTML = a
                        }
                    }
                }
            }
            if(spanski.innerHTML == 1){
                korzina.innerHTML = ''
                let arr2 = [1]
    
                for(let item2 of arr2){
                    let korzinaInside = document.createElement('div')
                    let firstI = document.createElement('div')
                    let secondI = document.createElement('div')
                    let Simage = document.createElement('div')
                    let Sspan = document.createElement('span')
                    let Tspan = document.createElement('span')
                    let plus = document.createElement('div')
                    let number = document.createElement('span')
                    let minus = document.createElement('div')
                
                    korzinaInside.classList.add('korzinaInside')
                    firstI.classList.add('firstI')
                    secondI.classList.add('secondI')
                    Simage.classList.add('Simage')
                    Sspan.classList.add('Sspan')
                    Tspan.classList.add('Sspan')
                    plus.classList.add('plus')
                    number.classList.add('num')
                    minus.classList.add('plus')
                
                    Sspan.innerHTML = 'category: portfel'
                    Tspan.innerHTML = 'price: 0'
                    plus.innerHTML = '+'
                    number.innerHTML = a
                    minus.innerHTML = '-'
                
                    korzina.append(korzinaInside)
                    korzinaInside.append(firstI)
                    korzinaInside.append(secondI)
                    firstI.append(Simage)
                    firstI.append(Sspan)
                    firstI.append(Tspan)
                    secondI.append(plus)
                    secondI.append(number)
                    secondI.append(minus)
                
                
                    plus.onclick = () => {
                        if(number.innerHTML < 10) {
                            a++
                            number.innerHTML = a
                        }
                    }
                    minus.onclick = () => {
                        if(number.innerHTML > 1) {
                            a--
                            number.innerHTML = a
                        }
                    }
                }
            }
            if(spanski.innerHTML == 2){
                korzina.innerHTML = ''
                let arr2 = [1 , 2]
    
                for(let item2 of arr2){
                    let korzinaInside = document.createElement('div')
                    let firstI = document.createElement('div')
                    let secondI = document.createElement('div')
                    let Simage = document.createElement('div')
                    let Sspan = document.createElement('span')
                    let Tspan = document.createElement('span')
                    let plus = document.createElement('div')
                    let number = document.createElement('span')
                    let minus = document.createElement('div')
                
                    korzinaInside.classList.add('korzinaInside')
                    firstI.classList.add('firstI')
                    secondI.classList.add('secondI')
                    Simage.classList.add('Simage')
                    Sspan.classList.add('Sspan')
                    Tspan.classList.add('Sspan')
                    plus.classList.add('plus')
                    number.classList.add('num')
                    minus.classList.add('plus')
                
                    Sspan.innerHTML = 'category: portfel'
                    Tspan.innerHTML = 'price: 0'
                    plus.innerHTML = '+'
                    number.innerHTML = a
                    minus.innerHTML = '-'
                
                    korzina.append(korzinaInside)
                    korzinaInside.append(firstI)
                    korzinaInside.append(secondI)
                    firstI.append(Simage)
                    firstI.append(Sspan)
                    firstI.append(Tspan)
                    secondI.append(plus)
                    secondI.append(number)
                    secondI.append(minus)
                
                
                    plus.onclick = () => {
                        if(number.innerHTML < 10) {
                            a++
                            number.innerHTML = a
                        }
                    }
                    minus.onclick = () => {
                        if(number.innerHTML > 1) {
                            a--
                            number.innerHTML = a
                        }
                    }
                }
            }
            if(spanski.innerHTML == 3){
                korzina.innerHTML = ''
                let arr2 = [1 , 2 , 3]
    
                for(let item2 of arr2){
                    let korzinaInside = document.createElement('div')
                    let firstI = document.createElement('div')
                    let secondI = document.createElement('div')
                    let Simage = document.createElement('div')
                    let Sspan = document.createElement('span')
                    let Tspan = document.createElement('span')
                    let plus = document.createElement('div')
                    let number = document.createElement('span')
                    let minus = document.createElement('div')
                
                    korzinaInside.classList.add('korzinaInside')
                    firstI.classList.add('firstI')
                    secondI.classList.add('secondI')
                    Simage.classList.add('Simage')
                    Sspan.classList.add('Sspan')
                    Tspan.classList.add('Sspan')
                    plus.classList.add('plus')
                    number.classList.add('num')
                    minus.classList.add('plus')
                
                    Sspan.innerHTML = 'category: portfel'
                    Tspan.innerHTML = 'price: 0'
                    plus.innerHTML = '+'
                    number.innerHTML = a
                    minus.innerHTML = '-'
                
                    korzina.append(korzinaInside)
                    korzinaInside.append(firstI)
                    korzinaInside.append(secondI)
                    firstI.append(Simage)
                    firstI.append(Sspan)
                    firstI.append(Tspan)
                    secondI.append(plus)
                    secondI.append(number)
                    secondI.append(minus)
                
                
                    plus.onclick = () => {
                        if(number.innerHTML < 10) {
                            a++
                            number.innerHTML = a
                        }
                    }
                    minus.onclick = () => {
                        if(number.innerHTML > 1) {
                            a--
                            number.innerHTML = a
                        }
                    }
                }
            }
            if(spanski.innerHTML == 4){
                korzina.innerHTML = ''
                let arr2 = [1 , 2 , 3 , 4]
    
                for(let item2 of arr2){
                    let korzinaInside = document.createElement('div')
                    let firstI = document.createElement('div')
                    let secondI = document.createElement('div')
                    let Simage = document.createElement('div')
                    let Sspan = document.createElement('span')
                    let Tspan = document.createElement('span')
                    let plus = document.createElement('div')
                    let number = document.createElement('span')
                    let minus = document.createElement('div')
                
                    korzinaInside.classList.add('korzinaInside')
                    firstI.classList.add('firstI')
                    secondI.classList.add('secondI')
                    Simage.classList.add('Simage')
                    Sspan.classList.add('Sspan')
                    Tspan.classList.add('Sspan')
                    plus.classList.add('plus')
                    number.classList.add('num')
                    minus.classList.add('plus')
                
                    Sspan.innerHTML = 'category: portfel'
                    Tspan.innerHTML = 'price: 0'
                    plus.innerHTML = '+'
                    number.innerHTML = a
                    minus.innerHTML = '-'
                
                    korzina.append(korzinaInside)
                    korzinaInside.append(firstI)
                    korzinaInside.append(secondI)
                    firstI.append(Simage)
                    firstI.append(Sspan)
                    firstI.append(Tspan)
                    secondI.append(plus)
                    secondI.append(number)
                    secondI.append(minus)
                
                
                    plus.onclick = () => {
                        if(number.innerHTML < 10) {
                            a++
                            number.innerHTML = a
                        }
                    }
                    minus.onclick = () => {
                        if(number.innerHTML > 1) {
                            a--
                            number.innerHTML = a
                        }
                    }
                }
            }
            if(spanski.innerHTML == 5){
                korzina.innerHTML = ''
                let arr2 = [1 , 2 , 3 , 4 , 5]
    
                for(let item2 of arr2){
                    let korzinaInside = document.createElement('div')
                    let firstI = document.createElement('div')
                    let secondI = document.createElement('div')
                    let Simage = document.createElement('div')
                    let Sspan = document.createElement('span')
                    let Tspan = document.createElement('span')
                    let plus = document.createElement('div')
                    let number = document.createElement('span')
                    let minus = document.createElement('div')
                
                    korzinaInside.classList.add('korzinaInside')
                    firstI.classList.add('firstI')
                    secondI.classList.add('secondI')
                    Simage.classList.add('Simage')
                    Sspan.classList.add('Sspan')
                    Tspan.classList.add('Sspan')
                    plus.classList.add('plus')
                    number.classList.add('num')
                    minus.classList.add('plus')
                
                    Sspan.innerHTML = 'category: portfel'
                    Tspan.innerHTML = 'price: 0'
                    plus.innerHTML = '+'
                    number.innerHTML = a
                    minus.innerHTML = '-'
                
                    korzina.append(korzinaInside)
                    korzinaInside.append(firstI)
                    korzinaInside.append(secondI)
                    firstI.append(Simage)
                    firstI.append(Sspan)
                    firstI.append(Tspan)
                    secondI.append(plus)
                    secondI.append(number)
                    secondI.append(minus)
                
                
                    plus.onclick = () => {
                        if(number.innerHTML < 10) {
                            a++
                            number.innerHTML = a
                        }
                    }
                    minus.onclick = () => {
                        if(number.innerHTML > 1) {
                            a--
                            number.innerHTML = a
                        }
                    }
                }
            }
            if(spanski.innerHTML == 6){
                korzina.innerHTML = ''
                let arr2 = [1 , 2 , 3 , 4 , 5 , 6]
    
                for(let item2 of arr2){
                    let korzinaInside = document.createElement('div')
                    let firstI = document.createElement('div')
                    let secondI = document.createElement('div')
                    let Simage = document.createElement('div')
                    let Sspan = document.createElement('span')
                    let Tspan = document.createElement('span')
                    let plus = document.createElement('div')
                    let number = document.createElement('span')
                    let minus = document.createElement('div')
                
                    korzinaInside.classList.add('korzinaInside')
                    firstI.classList.add('firstI')
                    secondI.classList.add('secondI')
                    Simage.classList.add('Simage')
                    Sspan.classList.add('Sspan')
                    Tspan.classList.add('Sspan')
                    plus.classList.add('plus')
                    number.classList.add('num')
                    minus.classList.add('plus')
                
                    Sspan.innerHTML = 'category: portfel'
                    Tspan.innerHTML = 'price: 0'
                    plus.innerHTML = '+'
                    number.innerHTML = a
                    minus.innerHTML = '-'
                
                    korzina.append(korzinaInside)
                    korzinaInside.append(firstI)
                    korzinaInside.append(secondI)
                    firstI.append(Simage)
                    firstI.append(Sspan)
                    firstI.append(Tspan)
                    secondI.append(plus)
                    secondI.append(number)
                    secondI.append(minus)
                
                
                    plus.onclick = () => {
                        if(number.innerHTML < 10) {
                            a++
                            number.innerHTML = a
                        }
                    }
                    minus.onclick = () => {
                        if(number.innerHTML > 1) {
                            a--
                            number.innerHTML = a
                        }
                    }
                }
            }
            if(spanski.innerHTML == 7){
                korzina.innerHTML = ''
                let arr2 = [1 , 2 , 3 , 4 , 5 , 6 , 7]
    
                for(let item2 of arr2){
                    let korzinaInside = document.createElement('div')
                    let firstI = document.createElement('div')
                    let secondI = document.createElement('div')
                    let Simage = document.createElement('div')
                    let Sspan = document.createElement('span')
                    let Tspan = document.createElement('span')
                    let plus = document.createElement('div')
                    let number = document.createElement('span')
                    let minus = document.createElement('div')
                
                    korzinaInside.classList.add('korzinaInside')
                    firstI.classList.add('firstI')
                    secondI.classList.add('secondI')
                    Simage.classList.add('Simage')
                    Sspan.classList.add('Sspan')
                    Tspan.classList.add('Sspan')
                    plus.classList.add('plus')
                    number.classList.add('num')
                    minus.classList.add('plus')
                
                    Sspan.innerHTML = 'category: portfel'
                    Tspan.innerHTML = 'price: 0'
                    plus.innerHTML = '+'
                    number.innerHTML = a
                    minus.innerHTML = '-'
                
                    korzina.append(korzinaInside)
                    korzinaInside.append(firstI)
                    korzinaInside.append(secondI)
                    firstI.append(Simage)
                    firstI.append(Sspan)
                    firstI.append(Tspan)
                    secondI.append(plus)
                    secondI.append(number)
                    secondI.append(minus)
                
                
                    plus.onclick = () => {
                        if(number.innerHTML < 10) {
                            a++
                            number.innerHTML = a
                        }
                    }
                    minus.onclick = () => {
                        if(number.innerHTML > 1) {
                            a--
                            number.innerHTML = a
                        }
                    }
                }
            }
        }
        } 
}
for(let item of arr) {
    let mainInside = document.createElement('div')
    let forImg = document.createElement('div')
    let img = document.createElement('div')
    let forText = document.createElement('div')
    let Ftext = document.createElement('span')
    let Stext = document.createElement('span')
    let button = document.createElement('button')
    
    mainInside.classList.add('main-inside')
    forImg.classList.add('for-img')
    img.classList.add('img')
    forText.classList.add('for-text')
    Ftext.classList.add('Ftext')
    Stext.classList.add('Stext')
    button.classList.add('btn')
    
    Ftext.innerHTML = 'MEN’S CLOTHING (120)'
    Stext.innerHTML = 'Your perfect pack for everyday use and walks <br> in the forest. Stash your laptop (up to 15 <br> inches) in the padded sleeve, your everyday'
    button.innerHTML = 'В избранное'
    
    main.append(mainInside)
    mainInside.append(forImg)
    forImg.append(img)
    mainInside.append(forText)
    forText.append(Ftext)
    forText.append(Stext)
    forText.append(button)

    button.onclick = () => {
        if(button.innerHTML === 'В избранное') {
            button.innerHTML = 'Добавлено'
            i++
            spanski.innerHTML = i
        } else if(button.innerHTML === 'Добавлено'){
            button.innerHTML = 'В избранное'
                    i--
                    spanski.innerHTML = i
        }
        if(spanski.innerHTML == 0){
            korzina.innerHTML = ''
            let arr2 = []

            for(let item2 of arr2){
                let korzinaInside = document.createElement('div')
                let firstI = document.createElement('div')
                let secondI = document.createElement('div')
                let Simage = document.createElement('div')
                let Sspan = document.createElement('span')
                let Tspan = document.createElement('span')
                let plus = document.createElement('div')
                let number = document.createElement('span')
                let minus = document.createElement('div')
            
                korzinaInside.classList.add('korzinaInside')
                firstI.classList.add('firstI')
                secondI.classList.add('secondI')
                Simage.classList.add('Simage')
                Sspan.classList.add('Sspan')
                Tspan.classList.add('Sspan')
                plus.classList.add('plus')
                number.classList.add('num')
                minus.classList.add('plus')
            
                Sspan.innerHTML = 'category: portfel'
                Tspan.innerHTML = 'price: 0'
                plus.innerHTML = '+'
                number.innerHTML = a
                minus.innerHTML = '-'
            
                korzina.append(korzinaInside)
                korzinaInside.append(firstI)
                korzinaInside.append(secondI)
                firstI.append(Simage)
                firstI.append(Sspan)
                firstI.append(Tspan)
                secondI.append(plus)
                secondI.append(number)
                secondI.append(minus)
            
            
                plus.onclick = () => {
                    if(number.innerHTML < 10) {
                        a++
                        number.innerHTML = a
                    }
                }
                minus.onclick = () => {
                    if(number.innerHTML > 1) {
                        a--
                        number.innerHTML = a
                    }
                }
            }
        }
        if(spanski.innerHTML == 1){
            korzina.innerHTML = ''
            let arr2 = [1]

            for(let item2 of arr2){
                let korzinaInside = document.createElement('div')
                let firstI = document.createElement('div')
                let secondI = document.createElement('div')
                let Simage = document.createElement('div')
                let Sspan = document.createElement('span')
                let Tspan = document.createElement('span')
                let plus = document.createElement('div')
                let number = document.createElement('span')
                let minus = document.createElement('div')
            
                korzinaInside.classList.add('korzinaInside')
                firstI.classList.add('firstI')
                secondI.classList.add('secondI')
                Simage.classList.add('Simage')
                Sspan.classList.add('Sspan')
                Tspan.classList.add('Sspan')
                plus.classList.add('plus')
                number.classList.add('num')
                minus.classList.add('plus')
            
                Sspan.innerHTML = 'category: portfel'
                Tspan.innerHTML = 'price: 0'
                plus.innerHTML = '+'
                number.innerHTML = a
                minus.innerHTML = '-'
            
                korzina.append(korzinaInside)
                korzinaInside.append(firstI)
                korzinaInside.append(secondI)
                firstI.append(Simage)
                firstI.append(Sspan)
                firstI.append(Tspan)
                secondI.append(plus)
                secondI.append(number)
                secondI.append(minus)
            
            
                plus.onclick = () => {
                    if(number.innerHTML < 10) {
                        a++
                        number.innerHTML = a
                    }
                }
                minus.onclick = () => {
                    if(number.innerHTML > 1) {
                        a--
                        number.innerHTML = a
                    }
                }
            }
        }
        if(spanski.innerHTML == 2){
            korzina.innerHTML = ''
            let arr2 = [1 , 2]

            for(let item2 of arr2){
                let korzinaInside = document.createElement('div')
                let firstI = document.createElement('div')
                let secondI = document.createElement('div')
                let Simage = document.createElement('div')
                let Sspan = document.createElement('span')
                let Tspan = document.createElement('span')
                let plus = document.createElement('div')
                let number = document.createElement('span')
                let minus = document.createElement('div')
            
                korzinaInside.classList.add('korzinaInside')
                firstI.classList.add('firstI')
                secondI.classList.add('secondI')
                Simage.classList.add('Simage')
                Sspan.classList.add('Sspan')
                Tspan.classList.add('Sspan')
                plus.classList.add('plus')
                number.classList.add('num')
                minus.classList.add('plus')
            
                Sspan.innerHTML = 'category: portfel'
                Tspan.innerHTML = 'price: 0'
                plus.innerHTML = '+'
                number.innerHTML = a
                minus.innerHTML = '-'
            
                korzina.append(korzinaInside)
                korzinaInside.append(firstI)
                korzinaInside.append(secondI)
                firstI.append(Simage)
                firstI.append(Sspan)
                firstI.append(Tspan)
                secondI.append(plus)
                secondI.append(number)
                secondI.append(minus)
            
            
                plus.onclick = () => {
                    if(number.innerHTML < 10) {
                        a++
                        number.innerHTML = a
                    }
                }
                minus.onclick = () => {
                    if(number.innerHTML > 1) {
                        a--
                        number.innerHTML = a
                    }
                }
            }
        }
        if(spanski.innerHTML == 3){
            korzina.innerHTML = ''
            let arr2 = [1 , 2 , 3]

            for(let item2 of arr2){
                let korzinaInside = document.createElement('div')
                let firstI = document.createElement('div')
                let secondI = document.createElement('div')
                let Simage = document.createElement('div')
                let Sspan = document.createElement('span')
                let Tspan = document.createElement('span')
                let plus = document.createElement('div')
                let number = document.createElement('span')
                let minus = document.createElement('div')
            
                korzinaInside.classList.add('korzinaInside')
                firstI.classList.add('firstI')
                secondI.classList.add('secondI')
                Simage.classList.add('Simage')
                Sspan.classList.add('Sspan')
                Tspan.classList.add('Sspan')
                plus.classList.add('plus')
                number.classList.add('num')
                minus.classList.add('plus')
            
                Sspan.innerHTML = 'category: portfel'
                Tspan.innerHTML = 'price: 0'
                plus.innerHTML = '+'
                number.innerHTML = a
                minus.innerHTML = '-'
            
                korzina.append(korzinaInside)
                korzinaInside.append(firstI)
                korzinaInside.append(secondI)
                firstI.append(Simage)
                firstI.append(Sspan)
                firstI.append(Tspan)
                secondI.append(plus)
                secondI.append(number)
                secondI.append(minus)
            
            
                plus.onclick = () => {
                    if(number.innerHTML < 10) {
                        a++
                        number.innerHTML = a
                    }
                }
                minus.onclick = () => {
                    if(number.innerHTML > 1) {
                        a--
                        number.innerHTML = a
                    }
                }
            }
        }
        if(spanski.innerHTML == 4){
            korzina.innerHTML = ''
            let arr2 = [1 , 2 , 3 , 4]

            for(let item2 of arr2){
                let korzinaInside = document.createElement('div')
                let firstI = document.createElement('div')
                let secondI = document.createElement('div')
                let Simage = document.createElement('div')
                let Sspan = document.createElement('span')
                let Tspan = document.createElement('span')
                let plus = document.createElement('div')
                let number = document.createElement('span')
                let minus = document.createElement('div')
            
                korzinaInside.classList.add('korzinaInside')
                firstI.classList.add('firstI')
                secondI.classList.add('secondI')
                Simage.classList.add('Simage')
                Sspan.classList.add('Sspan')
                Tspan.classList.add('Sspan')
                plus.classList.add('plus')
                number.classList.add('num')
                minus.classList.add('plus')
            
                Sspan.innerHTML = 'category: portfel'
                Tspan.innerHTML = 'price: 0'
                plus.innerHTML = '+'
                number.innerHTML = a
                minus.innerHTML = '-'
            
                korzina.append(korzinaInside)
                korzinaInside.append(firstI)
                korzinaInside.append(secondI)
                firstI.append(Simage)
                firstI.append(Sspan)
                firstI.append(Tspan)
                secondI.append(plus)
                secondI.append(number)
                secondI.append(minus)
            
            
                plus.onclick = () => {
                    if(number.innerHTML < 10) {
                        a++
                        number.innerHTML = a
                    }
                }
                minus.onclick = () => {
                    if(number.innerHTML > 1) {
                        a--
                        number.innerHTML = a
                    }
                }
            }
        }
        if(spanski.innerHTML == 5){
            korzina.innerHTML = ''
            let arr2 = [1 , 2 , 3 , 4 , 5]

            for(let item2 of arr2){
                let korzinaInside = document.createElement('div')
                let firstI = document.createElement('div')
                let secondI = document.createElement('div')
                let Simage = document.createElement('div')
                let Sspan = document.createElement('span')
                let Tspan = document.createElement('span')
                let plus = document.createElement('div')
                let number = document.createElement('span')
                let minus = document.createElement('div')
            
                korzinaInside.classList.add('korzinaInside')
                firstI.classList.add('firstI')
                secondI.classList.add('secondI')
                Simage.classList.add('Simage')
                Sspan.classList.add('Sspan')
                Tspan.classList.add('Sspan')
                plus.classList.add('plus')
                number.classList.add('num')
                minus.classList.add('plus')
            
                Sspan.innerHTML = 'category: portfel'
                Tspan.innerHTML = 'price: 0'
                plus.innerHTML = '+'
                number.innerHTML = a
                minus.innerHTML = '-'
            
                korzina.append(korzinaInside)
                korzinaInside.append(firstI)
                korzinaInside.append(secondI)
                firstI.append(Simage)
                firstI.append(Sspan)
                firstI.append(Tspan)
                secondI.append(plus)
                secondI.append(number)
                secondI.append(minus)
            
            
                plus.onclick = () => {
                    if(number.innerHTML < 10) {
                        a++
                        number.innerHTML = a
                    }
                }
                minus.onclick = () => {
                    if(number.innerHTML > 1) {
                        a--
                        number.innerHTML = a
                    }
                }
            }
        }
        if(spanski.innerHTML == 6){
            korzina.innerHTML = ''
            let arr2 = [1 , 2 , 3 , 4 , 5 , 6]

            for(let item2 of arr2){
                let korzinaInside = document.createElement('div')
                let firstI = document.createElement('div')
                let secondI = document.createElement('div')
                let Simage = document.createElement('div')
                let Sspan = document.createElement('span')
                let Tspan = document.createElement('span')
                let plus = document.createElement('div')
                let number = document.createElement('span')
                let minus = document.createElement('div')
            
                korzinaInside.classList.add('korzinaInside')
                firstI.classList.add('firstI')
                secondI.classList.add('secondI')
                Simage.classList.add('Simage')
                Sspan.classList.add('Sspan')
                Tspan.classList.add('Sspan')
                plus.classList.add('plus')
                number.classList.add('num')
                minus.classList.add('plus')
            
                Sspan.innerHTML = 'category: portfel'
                Tspan.innerHTML = 'price: 0'
                plus.innerHTML = '+'
                number.innerHTML = a
                minus.innerHTML = '-'
            
                korzina.append(korzinaInside)
                korzinaInside.append(firstI)
                korzinaInside.append(secondI)
                firstI.append(Simage)
                firstI.append(Sspan)
                firstI.append(Tspan)
                secondI.append(plus)
                secondI.append(number)
                secondI.append(minus)
            
            
                plus.onclick = () => {
                    if(number.innerHTML < 10) {
                        a++
                        number.innerHTML = a
                    }
                }
                minus.onclick = () => {
                    if(number.innerHTML > 1) {
                        a--
                        number.innerHTML = a
                    }
                }
            }
        }
        if(spanski.innerHTML == 7){
            korzina.innerHTML = ''
            let arr2 = [1 , 2 , 3 , 4 , 5 , 6 , 7]

            for(let item2 of arr2){
                let korzinaInside = document.createElement('div')
                let firstI = document.createElement('div')
                let secondI = document.createElement('div')
                let Simage = document.createElement('div')
                let Sspan = document.createElement('span')
                let Tspan = document.createElement('span')
                let plus = document.createElement('div')
                let number = document.createElement('span')
                let minus = document.createElement('div')
            
                korzinaInside.classList.add('korzinaInside')
                firstI.classList.add('firstI')
                secondI.classList.add('secondI')
                Simage.classList.add('Simage')
                Sspan.classList.add('Sspan')
                Tspan.classList.add('Sspan')
                plus.classList.add('plus')
                number.classList.add('num')
                minus.classList.add('plus')
            
                Sspan.innerHTML = 'category: portfel'
                Tspan.innerHTML = 'price: 0'
                plus.innerHTML = '+'
                number.innerHTML = a
                minus.innerHTML = '-'
            
                korzina.append(korzinaInside)
                korzinaInside.append(firstI)
                korzinaInside.append(secondI)
                firstI.append(Simage)
                firstI.append(Sspan)
                firstI.append(Tspan)
                secondI.append(plus)
                secondI.append(number)
                secondI.append(minus)
            
            
                plus.onclick = () => {
                    if(number.innerHTML < 10) {
                        a++
                        number.innerHTML = a
                    }
                }
                minus.onclick = () => {
                    if(number.innerHTML > 1) {
                        a--
                        number.innerHTML = a
                    }
                }
            }
        }
    }
    }





let arr2 = []

for(let item2 of arr2){
    let korzinaInside = document.createElement('div')
    let firstI = document.createElement('div')
    let secondI = document.createElement('div')
    let Simage = document.createElement('div')
    let Sspan = document.createElement('span')
    let Tspan = document.createElement('span')
    let plus = document.createElement('div')
    let number = document.createElement('span')
    let minus = document.createElement('div')

    korzinaInside.classList.add('korzinaInside')
    firstI.classList.add('firstI')
    secondI.classList.add('secondI')
    Simage.classList.add('Simage')
    Sspan.classList.add('Sspan')
    Tspan.classList.add('Sspan')
    plus.classList.add('plus')
    number.classList.add('num')
    minus.classList.add('plus')

    Sspan.innerHTML = 'category: portfel'
    Tspan.innerHTML = 'price: 0'
    plus.innerHTML = '+'
    number.innerHTML = a
    minus.innerHTML = '-'

    korzina.append(korzinaInside)
    korzinaInside.append(firstI)
    korzinaInside.append(secondI)
    firstI.append(Simage)
    firstI.append(Sspan)
    firstI.append(Tspan)
    secondI.append(plus)
    secondI.append(number)
    secondI.append(minus)


    plus.onclick = () => {
        if(number.innerHTML < 10) {
            a++
            number.innerHTML = a
        }
    }
    minus.onclick = () => {
        if(number.innerHTML > 1) {
            a--
            number.innerHTML = a
        }
    }
}