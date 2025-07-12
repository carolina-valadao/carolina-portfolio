// Setting Colour Scheme
let theme = (() => {
    const localStorageTheme = localStorage?.getItem("theme") ?? ''

    if (['dark', 'light'].includes(localStorageTheme)) {
        return localStorageTheme
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
    }
    
    return 'light'
})()

localStorage.setItem('theme', theme)

calculateBgColour()
toggleColourSchemeClasses()

// Toggle Colour Scheme
function handleColourSchemeToggleClick() {
    const element = document.documentElement
    element.classList.toggle("dark")

    const isDark = element.classList.contains("dark")
    localStorage.setItem("theme", isDark ? "dark" : "light")

    theme = isDark ? 'dark' : 'light'

    calculateBgColour()
    handleMainCatAnimation()
    toggleColourSchemeClasses()
}

function toggleColourSchemeClasses() {
    const colourSchemeEl = document.getElementsByClassName('colourScheme__toggle')[0]
    const logoEl = document.getElementsByClassName('main__logo')[0]
    const closeEl = document.getElementsByClassName('main__menuBtn')[0]
    const aboutLinkEls = document.getElementsByClassName('about__link')
    const scrollCatsEl = document.getElementsByClassName('skills__scrollCats')[0]
    const cat1El = document.getElementsByClassName('outro-1__cat--1')[0]
    const cat2El = document.getElementsByClassName('outro-1__cat--2')[0]
    const cat3El = document.getElementsByClassName('outro-1__cat--3')[0]
    const cat4El = document.getElementsByClassName('outro-1__cat--4')[0]
    const outro2CtaEl = document.getElementsByClassName('outro-2__cta')[0]
    const outro2CatEl = document.getElementsByClassName('outro-2__cat')[0]
    const menuEl = document.getElementsByClassName('menu')[0]
    const menuCloseBtnEl = document.getElementsByClassName('menu__closeBtn')[0]
    const menuItemEls = document.getElementsByClassName('menu__item')
    
    if (theme === 'light') {
        document.documentElement.classList.remove('dark')
        colourSchemeEl.classList.remove('colourScheme__toggle--dark')
        logoEl.classList.remove('main__logo--dark')
        closeEl.classList.remove('main__menuBtn--dark')
        scrollCatsEl.classList.remove('skills__scrollCats--dark')
        cat1El.classList.remove('outro-1__cat--1--dark')
        cat2El.classList.remove('outro-1__cat--2--dark')
        cat3El.classList.remove('outro-1__cat--3--dark')
        cat4El.classList.remove('outro-1__cat--4--dark')
        outro2CtaEl.classList.remove('outro-2__cta--dark')
        outro2CatEl.classList.remove('outro-2__cat--dark')
        menuEl.classList.remove('menu--dark')
        menuCloseBtnEl.classList.remove('menu__closeBtn--dark')

        for (const el of aboutLinkEls) {
             el.classList.remove("about__link--dark");
        }

        for (const el of menuItemEls) {
             el.classList.remove("menu__item--dark");
        }
    } else {
        document.documentElement.classList.add('dark')
        colourSchemeEl.classList.add('colourScheme__toggle--dark')
        logoEl.classList.add('main__logo--dark')
        closeEl.classList.add('main__menuBtn--dark')
        scrollCatsEl.classList.add('skills__scrollCats--dark')
        cat1El.classList.add('outro-1__cat--1--dark')
        cat2El.classList.add('outro-1__cat--2--dark')
        cat3El.classList.add('outro-1__cat--3--dark')
        cat4El.classList.add('outro-1__cat--4--dark')
        outro2CtaEl.classList.add('outro-2__cta--dark')
        outro2CatEl.classList.add('outro-2__cat--dark')
        menuEl.classList.add('menu--dark')
        menuCloseBtnEl.classList.add('menu__closeBtn--dark')

        for (const el of aboutLinkEls) {
            el.classList.add("about__link--dark");
        }

        for (const el of menuItemEls) {
             el.classList.add("menu__item--dark");
        }
    }
}

// Main Cat scroll animation
window.addEventListener('scroll', handleMainCatAnimation)
window.addEventListener('resize', handleMainCatAnimation)

function handleMainCatAnimation() {
    const htmlElement = document.documentElement
    const screenScrollPercentage = (htmlElement.scrollTop / htmlElement.clientHeight / 3) * 100

    const imageContainer = document.querySelector('.main__cat')

    if (screenScrollPercentage <= 58 && imageContainer && imageContainer.style) {
        imageContainer.style.backgroundImage = `url('./images/${Math.floor(Math.min((screenScrollPercentage + 1), 58))}${theme === 'light' ? '' : '-dark'}.png')`
    } else if (screenScrollPercentage > 59) {
        imageContainer.style.backgroundImage = `url('./images/58${theme === 'light' ? '' : '-dark'}.png')`
    }
}

handleMainCatAnimation()

// Process messages animation
window.addEventListener('scroll', () => {
    const processSectionEl = document.querySelector('.process')
    const processRect = processSectionEl.getBoundingClientRect()
    const processScrollPercentage = (Math.round(-processRect.top / processRect.height * 100)) + 25

    const message1El = document.querySelector('.process__message--1')
    const message2El = document.querySelector('.process__message--2')
    const message3El = document.querySelector('.process__message--3')
    const message4El = document.querySelector('.process__message--4')

    // 1ST MESSAGE
    if (processScrollPercentage >= 0 && processScrollPercentage <= 25) {
        message1El.style.transform = `scale(${processScrollPercentage * 4}%)`
    }
    if (processScrollPercentage > 25 && processScrollPercentage <= 50) {
        message1El.style.transform = `scale(${100 - ((processScrollPercentage - 25) * 4)}%)`
    }
    // 2ND MESSAGE
    if (processScrollPercentage >= 25 && processScrollPercentage <= 50) {
        message2El.style.transform = `scale(${(processScrollPercentage - 25) * 4}%)`
    }
    if (processScrollPercentage > 50 && processScrollPercentage <= 75) {
        message2El.style.transform = `scale(${100 - ((processScrollPercentage - 50) * 4)}%)`
    }
    // 3RD MESSAGE
    if (processScrollPercentage >= 50 && processScrollPercentage <= 75) {
        message3El.style.transform = `scale(${(processScrollPercentage - 50) * 4}%)`
    }
    if (processScrollPercentage > 75 && processScrollPercentage <= 100) {
        message3El.style.transform = `scale(${100 - ((processScrollPercentage - 75) * 4)}%)`
    }
    // 4TH MESSAGE
    if (processScrollPercentage >= 75 && processScrollPercentage <= 100) {
        message4El.style.transform = `scale(${(processScrollPercentage - 75) * 4}%)`
    }
    if (processScrollPercentage > 100 && processScrollPercentage <= 125) {
        message4El.style.transform = `scale(${100 - ((processScrollPercentage - 100) * 4)}%)`
    }
})

// Skills Cats animation
window.addEventListener('scroll', () => {
    const skillsSectionEl = document.querySelector('.outer-skills')
    const skillsRect = skillsSectionEl.getBoundingClientRect()
    const skillsScrollPercentage = Math.round(-skillsRect.top / skillsRect.height * 100)

    const scrollCatsEl = document.querySelector('.skills__scrollCats')
    scrollCatsEl.style.transform = `translateX(${100 - skillsScrollPercentage * 1.85}%)`

    const secondaryTextEl = document.querySelector('.skills__secondaryText')
    secondaryTextEl.style.opacity = 0 + skillsScrollPercentage / 50
})

// Outro Cats animation
window.addEventListener('scroll', () => {
    const outroEl = document.querySelector('.outro-1')
    const outroCat1El = document.querySelector('.outro-1__cat--1')
    const outroCat2El = document.querySelector('.outro-1__cat--2')
    const outroCat3El = document.querySelector('.outro-1__cat--3')
    const outroCat4El = document.querySelector('.outro-1__cat--4')

    const outroRect = outroEl.getBoundingClientRect()
    const outroScrollPercentage = Math.round(-outroRect.top / outroRect.height * 100)

    if (outroScrollPercentage >= -100) {
        outroCat1El.style.transform = `translate(${Math.min((outroScrollPercentage / 3), 0)}vh, ${Math.min((outroScrollPercentage / 3), 0)}vw)`
        outroCat1El.style.opacity = `${100 + outroScrollPercentage * 0.5}%`
    
        outroCat2El.style.transform = `translate(${Math.min((outroScrollPercentage / 3), 0)}vh, ${-Math.min((outroScrollPercentage / 3), 0)}vw)`
        outroCat2El.style.opacity = `${100 + outroScrollPercentage * 0.5}%`
    
        outroCat3El.style.transform = `translate(${-Math.min((outroScrollPercentage / 3), 0)}vh, ${-Math.min((outroScrollPercentage / 3), 0)}vw)`
        outroCat3El.style.opacity = `${100 + outroScrollPercentage * 0.5}%`
    
        outroCat4El.style.transform = `translate(${-Math.min((outroScrollPercentage / 3), 0)}vh, ${Math.min((outroScrollPercentage / 3), 0)}vw)`
        outroCat4El.style.opacity = `${100 + outroScrollPercentage * 0.5}%`
    }
})

// Background Color on scroll
function calculateBgColour() {
    const clientScrollTop = document.documentElement.scrollTop
    
    const htmlElement = document.documentElement
    const bodyElement = document.body

    const documentHeight = Math.max(
        htmlElement.clientHeight, htmlElement.scrollHeight, htmlElement.offsetHeight,
        bodyElement.scrollHeight, bodyElement.offsetHeight
    );

    const aboutSectionEl = document.querySelector('.about')
    const aboutRect = aboutSectionEl.getBoundingClientRect()
    const aboutScrollPercentage = Math.round(-aboutRect.top / aboutRect.height * 100)

    const fadeStartEl = document.querySelector('.about__faded--start')
    const fadeEndEl = document.querySelector('.about__faded--end')

    const projectsSectionEl = document.querySelector('.projects')
    const projectsRect = projectsSectionEl.getBoundingClientRect()
    const projectsScrollPercentageUp = Math.round(-projectsRect.top / aboutRect.height * 100)
    const projectsScrollPercentageDown = Math.round(-projectsRect.top / projectsRect.height * 100)

    const outroSectionEl = document.querySelector('.outro-1')
    const outroRect = outroSectionEl.getBoundingClientRect()
    const outroScrollPercentage = Math.round(-outroRect.top / outroRect.height * 100)


    
    const [red, green, blue] = theme === 'light' ? [ 255, 255, 255] : [25, 48, 143]
    const [redBgColor, greenBgColor, blueBgColor] = theme === 'light' ? [122, 157, 246] : [8, 16, 47]

    const increaseColor = (sectionScrollPercentage) => `
        ${Math.round(red - ((sectionScrollPercentage + 100) * ((red - redBgColor) / 100)))}, 
        ${Math.round(green - ((sectionScrollPercentage + 100) * ((green - greenBgColor) / 100)))}, 
        ${Math.round(blue - ((sectionScrollPercentage + 100) * ((blue - blueBgColor) / 100)))}
    `

    const decreaseColor = (sectionScrollPercentage) => `
        ${Math.round(redBgColor + ((sectionScrollPercentage) * ((red - redBgColor) / 100)))}, 
        ${Math.round(greenBgColor + ((sectionScrollPercentage) * ((green - greenBgColor) / 100)))}, 
        ${Math.round(blueBgColor + ((sectionScrollPercentage) * ((blue - blueBgColor) / 100)))}
    `

    const body = document.querySelector('body')

    body.style.backgroundColor = theme === 'light' ? 'rgb(255,255,255)' : 'rgb(25, 48, 143)'

    if (clientScrollTop === 0) {
        body.style.backgroundColor = theme === 'light' ? 'rgb(255,255,255)' : 'rgb(25, 48, 143)'
    }
    if (clientScrollTop === documentHeight - htmlElement.clientHeight) {
        body.style.backgroundColor = theme === 'light' ? 'rgb(255,255,255)' : 'rgb(25, 48, 143)'
    }
    if (aboutScrollPercentage > -100 && aboutScrollPercentage < 100) {
        body.style.backgroundColor = aboutScrollPercentage < 0 ? `rgb(${increaseColor(aboutScrollPercentage)})` : `rgb(${decreaseColor(aboutScrollPercentage)})`

        if (aboutScrollPercentage < 0) {
            fadeStartEl.style.background = `linear-gradient(to left, rgba(${increaseColor(aboutScrollPercentage)}, 0.4), rgba(${increaseColor(aboutScrollPercentage)}, 1))`
            fadeEndEl.style.background = `linear-gradient(to right, rgba(${increaseColor(aboutScrollPercentage)}, 0.4), rgba(${increaseColor(aboutScrollPercentage)}, 1))`
        } else {
            fadeStartEl.style.background = `linear-gradient(to left, rgba(${decreaseColor(aboutScrollPercentage)}, 0.4), rgba(${decreaseColor(aboutScrollPercentage)}, 1))`
            fadeEndEl.style.background = `linear-gradient(to right, rgba(${decreaseColor(aboutScrollPercentage)}, 0.4), rgba(${decreaseColor(aboutScrollPercentage)}, 1))`
        }
        
    }
    if (projectsScrollPercentageUp > -100 && projectsScrollPercentageUp < 100) {
        body.style.backgroundColor = projectsScrollPercentageUp < 0 && `rgb(${increaseColor(projectsScrollPercentageUp)})`
    }
    if (projectsScrollPercentageUp > -1 && projectsScrollPercentageDown < 100) {
        body.style.backgroundColor = projectsScrollPercentageDown < 101 && `rgb(${decreaseColor(projectsScrollPercentageDown)})`
    }
    if (outroScrollPercentage > -100 && outroScrollPercentage < 100) {
        body.style.backgroundColor = outroScrollPercentage < 0 ? `rgb(${increaseColor(outroScrollPercentage)})` : `rgb(${decreaseColor(outroScrollPercentage)})`
    }
}

window.addEventListener('scroll', calculateBgColour)

// Tabs Section
const tabsText = [
    "Hi there! I’m Carolina, a passionate Digital Product Designer who loves crafting intuitive and visually captivating experiences. Whether you’re here for inspiration or curiosity, I hope my work sparks joy and creativity!",
    "Hello, recruiters! I’m Carolina Valadão, a UX/UI Designer with a knack for blending creativity and user-centered solutions. My goal? To design experiences that engage and inspire. Let's connect! I'd love to contribute to your team!",
    "Hey, fellow designers! I’m Carolina, a UX/UI enthusiast with a love for elegant interfaces and seamless user journeys. I believe great design is where aesthetics meet functionality. Let’s exchange ideas and create something impactful!",
    "Hi, Product Managers! I thrive at the intersection of user needs and business goals. My focus is on delivering designs that balance usability, scalability, and impact, because great products start with great collaboration!",
    "Hello, Engineers! I design with {efficiency} && {collaboration} in mind. While (I’m ≠ coder), I value clean handoffs & seamless teamwork. Together, let’s debug ideas & ship great products!"
]

function selectTab(tabId) {
    const previousActiveTab = document.querySelector('.about__link--active')
    previousActiveTab.classList.remove('about__link--active')

    const selectedTab = (document.querySelector('.about__tabs')).children[tabId + 1]
    selectedTab.children[0].classList.add("about__link--active")

    const textElement = document.querySelector('.about__content')
    textElement.innerHTML = tabsText[tabId]
}

// Menu
function openMenu() {
    const body = document.querySelector('body')
    const menuEl = document.querySelector('.menu')

    body.style.overflow = 'hidden'
    menuEl.classList.add("menu--open")
}

function closeMenu() {
    const body = document.querySelector('body')
    const menuEl = document.querySelector('.menu')

    body.style.overflow = 'unset'
    menuEl.classList.remove("menu--open")
}