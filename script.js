let main = document.querySelector('.maincontainer')

// card
function card(e) {
  let cardId = e.id
  let img = e.img
  let cardname = e.name
  let category = e.category
  let oldPrice = e.oldPrice
  let newPrice = e.newPrice
  let div = document.createElement('div')
  let cardimg = document.createElement('img')
  let cardtext = document.createElement('ul')
  let cardli = document.createElement('li')
  let cardli2 = document.createElement('li')
  let priceUL = document.createElement('ul')
  let newpriceli = document.createElement('li')
  let oldpriceli = document.createElement('li')
  // categoryClass
  let categoryClass = ''
  switch (category) {
    case "Man Wear":
      categoryClass = "man";
      break
    case "Women Wear":
      categoryClass = "women";
      break
    case "Towels":
      categoryClass = "towels";
      break
    case "Bed Sheet":
      categoryClass = "bedSheet";
      break;
  }
  main.appendChild(div)

  let card = document.querySelector(`.maincontainer > div:last-child`)
  card.classList.add('card')
  card.setAttribute('id', `${cardId}`)
  card.setAttribute('href', 'https://www.google.com')
  card.appendChild(cardimg)
  card.querySelector('img').setAttribute('src', `${img}`)
  card.appendChild(cardtext)
  card.appendChild(priceUL)

  // ul / .card-text
  let ul = card.querySelector('ul')
  ul.setAttribute('class', 'card_text')
  ul.appendChild(cardli)
  ul.querySelector('li:first-child').classList.add('cardname')
  ul.querySelector('li:first-child').innerHTML = `${cardname}`
  ul.appendChild(cardli2)
  ul.querySelector('li:last-child').classList.add('category')
  ul.querySelector('li:last-child').classList.add(`${categoryClass}`)
  ul.querySelector('li:last-child').innerHTML = `${category}`

  // div / .lastbtn
  let lastbtn = card.querySelector('ul:last-child')
  lastbtn.setAttribute('class', 'lastbtn')
  lastbtn.appendChild(newpriceli)
  lastbtn.querySelector('li:first-child').classList.add('oldprice')
  lastbtn.querySelector('.oldprice').innerHTML = `${oldPrice}`
  lastbtn.appendChild(oldpriceli)
  lastbtn.querySelector('li:last-child').classList.add('newprice')
  lastbtn.querySelector('.newprice').innerHTML = `${newPrice}`
}

for (let i = 0; i < data.length; i++) {
  const e = data[i];
  card(e)
}

// Nav Buttons Start

// WearOff nav button
let wearoff = document.getElementById('wearoff')
wearoff.addEventListener('click', () => {
  document.querySelectorAll('.card').forEach(e => {
    e.style.display = 'block'
  });
  inactive(man, women, towel, bedSheet)
  active(wearoff)
  document.querySelector('title').innerHTML = 'WearOff | Clothing Store'
})

// man nav button
let man = document.getElementById('man')
man.addEventListener('click', () => {
  document.querySelectorAll('.card').forEach(e => {
    e.style.display = 'none'
  });
  document.querySelectorAll('.man').forEach(e => {
    e.parentElement.parentElement.style.display = 'block'
  });
  inactive(wearoff, women, towel, bedSheet)
  active(man)
  title("Man Wear")
})

// women nav button
document.getElementById('women').addEventListener('click', () => {
  document.querySelectorAll('.card').forEach(e => {
    e.style.display = 'none'
  });
  document.querySelectorAll('.women').forEach(e => {
    e.parentElement.parentElement.style.display = 'block'
  });
  inactive(man, wearoff, towel, bedSheet)
  active(women)
  title('Women Wear')
})

// towel nav button
document.getElementById('towel').addEventListener('click', () => {
  document.querySelectorAll('.card').forEach(e => {
    e.style.display = 'none'
  });
  document.querySelectorAll('.towel').forEach(e => {
    e.parentElement.parentElement.style.display = 'block'
  });
  inactive(man, women, wearoff, bedSheet)
  active(towel)
  title('Towel')
})

// bedSheet nav button
document.getElementById('bedSheet').addEventListener('click', () => {
  document.querySelectorAll('.card').forEach(e => {
    e.style.display = 'none'
  });
  document.querySelectorAll('.bedSheet').forEach(e => {
    e.parentElement.parentElement.style.display = 'block'
  });
  inactive(man, women, towel, wearoff)
  active(bedSheet)
  title('Bed Sheet')
})

// Nav Buttons End


// active/inactive nav functions
function inactive(a, b, c, d) {
  a.querySelector('p').classList.remove('active')
  b.querySelector('p').classList.remove('active')
  c.querySelector('p').classList.remove('active')
  d.querySelector('p').classList.remove('active')
}
function active(a) {
  a.querySelector('p').classList.add('active')
}
function title(title) {
  document.querySelector('title').innerHTML = `WearOff | ${title} | Clothing Store`
}
function mainHidden() {
  document.querySelector('header').style.display = 'none'
  document.querySelector('nav').style.display = 'none'
  main.style.display = 'none'
  productContainer.style.display = 'flex'
  window.scrollTo({
    top: 1,
    left: 1,
    behavior: "instant",
  });
}
// Product Container
let productContainer = document.querySelector('.productContainer')
main.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function () {
    mainHidden()
    console.log(`Your Card ID is ${card.id}`)
    let i = card.id
    let d = data[i]
    let img = d.img
    let title = d.name
    let colortitle = d.color[0].colorname
    let oldPrice = d.oldPrice
    let newPrice = d.newPrice
    let discription = d.description
    let size = d.size
    productContainer.querySelector('img').setAttribute('src', `${img}`)
    productContainer.querySelector('#colorTitle').innerHTML = `${colortitle}`
    productContainer.querySelector('#title').innerHTML = `${title}`
    productContainer.querySelector('.oldPrice').innerHTML = `${oldPrice}`
    productContainer.querySelector('.newPrice').innerHTML = `${newPrice}`
    productContainer.querySelector('#descPara').innerHTML = `${discription}`
    productContainer.querySelector('#size').innerHTML = `${size}`
    
    // product colors
    for (let i = 0; i < d.color.length; i++) {
      const e = d.color[i];
      let div = document.createElement('div')
      let colorCircle = document.createElement('div')
      let img = document.createElement('img')
      let p = document.createElement('p')
      let colorName = e.colorname
      let colorCode = e.colorcode
      let colorImage = e.colorimg

      document.querySelector('.productColors').appendChild(div)
      document.querySelector('.productColors > div:last-child').classList.add(`color${i}`)
      document.querySelector('.productColors > div:last-child').appendChild(img)
      document.querySelector('.productColors > div:last-child > img').classList.add('colorImg')
      document.querySelector('.productColors > div:last-child > .colorImg').setAttribute('src', `${colorImage}`)
      document.querySelector('.productColors > div:last-child').appendChild(p)
      document.querySelector('.productColors > div:last-child > p').classList.add('colorName')
      document.querySelector('.productColors > div:last-child > .colorName').innerHTML = `${colorName}`
      // Colorinnum
      document.querySelector('.colors > .colorsinnum').innerHTML = d.color.length
      // colorCircle
      document.querySelector('.colors').appendChild(colorCircle)
      document.querySelector('.colors > div:last-child').classList.add(`colorcircle${i}`, 'colorcircle')
      document.querySelector(`.colorcircle${i}`).style.background = `${colorCode}`
    }

    function coloractive(a) {
      document.querySelectorAll('.productColors > div > img').forEach(element => {
        element.classList.remove('coloractive')
      });
      a.querySelector('img').classList.add('coloractive')
    }

    // productColor Events
    document.querySelector('.productColors > div:first-child > img').classList.add('coloractive')
    document.querySelectorAll('.productColors > div').forEach(element => {
      element.addEventListener('click', () => {
        let c = element
        let cn = element.className.at(-1)
        productContainer.querySelector('img').setAttribute('src', `${d.color[`${cn}`].colorimg}`)
        productContainer.querySelector('#colorTitle').innerHTML = `${d.color[`${cn}`].colorname}`
        coloractive(c)
      })
    });

    // back
    document.querySelector('.back').addEventListener('click', () => {
      productContainer.style.display = 'none'
      document.querySelector('header').style.display = 'flex'
      document.querySelector('nav').style.display = 'flex'
      main.style.display = 'flex'
    })

  })
});