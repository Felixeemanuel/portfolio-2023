const sendBtn = document.querySelector('#sendBtn')

// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".panel").forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         start: "top top",
//         pin: true,
//         scrub: true,
//         pinSpacing: false
//     });
// });


const sendMail = () => {

    const sendErrorText = document.querySelector('.sendErrorText')
    const fullName = document.querySelector('#fullName')
    const email = document.querySelector('#email_id')
    const message = document.querySelector('#message')

    // if (fullName.value.trim() === '' || email_id.value.trim() === '' || message.value.trim() === '') {
    //     fullName.style.border = '.5px solid firebrick'
    //     return
    //   }

    if (fullName.value.trim() === '') {
        fullName.style.border = '.5px solid firebrick'
        sendErrorText.style.visibility = 'visible'
        sendErrorText.innerText = 'Please enter a valid name'
        return
    }
    if (email.value.trim() === '') {
        email.style.border = '.5px solid firebrick'
        sendErrorText.style.visibility = 'visible'
        sendErrorText.innerText = 'Please enter an email'
        return
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!email.value.match(emailRegex)) {
        email.style.border = '.5px solid firebrick'
        sendErrorText.style.visibility = 'visible'
        sendErrorText.innerText = 'Please enter a valid email'
        return
    }

    if (message.value.trim() === '') {
        message.style.border = '.5px solid firebrick'
        sendErrorText.style.visibility = 'visible'
        sendErrorText.innerText = 'Please enter a message'
        return
    }
    

    const params = {
        name: fullName.value,
        email: email_id.value,
        message: message.value
    }


    emailjs.send("service_6e8oaug", "template_uubfzg5", params)
    .then(res => {

        fullName.value = ''
        email_id.value = ''
        message.value = ''

        gsap.fromTo("#emailSent", 1.24, { opacity: 0, x: 100 }, { opacity: 1, x: 0, ease: "elastic.out(1, 0.3)" }  )
        
    })
    .catch(err => console.log(err))
}

sendBtn.addEventListener('click', e => {
    e.preventDefault()
    
    sendMail()
})


const navSlide = () => {
    const burger = document.querySelector('.burger')
    const slider = document.querySelector('#slider')
    const navLinks = document.querySelectorAll('#slider li')
    
    burger.addEventListener('click', () => {
        slider.classList.toggle('nav-active')

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`
            }
        })
    })

}

navSlide()


const scrollToAboutSection = () => {

    const aboutSection = document.querySelector('.about_section')

    aboutSection.scrollIntoView({behavior: 'smooth', block: 'start'})
}
const scrollToWorkSection = () => {

    const workSection = document.querySelector('.works_section')

    workSection.scrollIntoView({behavior: 'smooth', block: 'start'})
}
const scrollToContactSection = () => {

    const contactSection = document.querySelector('.form-section')

    contactSection.scrollIntoView({behavior: 'smooth', block: 'start'})
}

document.querySelector('#aboutBtn').addEventListener('click', scrollToAboutSection)
document.querySelector('#workBtn').addEventListener('click', scrollToWorkSection)
document.querySelector('#contactBtn').addEventListener('click', scrollToContactSection)


const backToTopBtn = document.querySelector('#backToTopBtn')

window.onscroll = function() { scrollToTopFunc() }

const scrollToTopFunc = () => {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backToTopBtn.style.display = 'block'
    } else {
        backToTopBtn.style.display = 'none'
    }
}

const toTop = () => {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0
    window.scroll({top: 0, behavior: "smooth"})
}

backToTopBtn.addEventListener('click', toTop)

