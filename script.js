
const business_name = document.querySelector('#business_name')
const phn_num = document.querySelector('#phn_num')
const service = document.querySelector('#service')

const nxt_btn = document.querySelector('#nxt_btn')
const right_arrow = document.querySelector('.right_arrow-vf')

const yoe = document.querySelector('#exp')
const city = document.querySelector('#city')

const business_name_err = document.querySelector('#business_name_err')
const phn_err = document.querySelector('#phn_err')
const service_err = document.querySelector('#service_err')
const exp_err = document.querySelector('#exp_err')
const city_err = document.querySelector('#city_err')

const form_submit_btn = document.querySelector('#sub_btn')

const step_indicator = document.querySelector('.step_indicator')

const remove_err = function(field, err){
    field.addEventListener('input', ()=>{
        err.style.display = 'none'
    })
}

remove_err(business_name, business_name_err)
remove_err(phn_num, phn_err)
remove_err(service, service_err)
remove_err(yoe, exp_err)
remove_err(city, city_err)

nxt_btn.addEventListener('click', (e)=>{
    const alphabets = /^[a-zA-Z]+$/
    if(!business_name.value){
        business_name_err.style.display = 'flex'
    } else if(!phn_num.value){
        phn_err.style.display = 'flex'
    } else if(phn_num.value.match(alphabets) || phn_num.value.length > 10 || phn_num.value.length < 10 || phn_num.value.startsWith('1') || phn_num.value.startsWith('2') || phn_num.value.startsWith('3') || phn_num.value.startsWith('4')  || phn_num.value.startsWith('5') ){
        phn_err.style.display = 'flex'
        phn_err.textContent = `Please enter a valid number`
    } else if(!service.value){
        service_err.style.display = 'flex'
    } else {
        right_arrow.click()
        step_indicator.style.width = '100%'
        //console.log('Here')
    }
})


form_submit_btn.addEventListener('click', (e)=>{
    if(!yoe.value){
        e.preventDefault()
        exp_err.style.display = 'flex'
    } else if(!city.value){
        e.preventDefault()
        city_err.style.display = 'flex'
    } 
})


//////////////////////////SLIDER CODE///////////////////////////////

function vendor_onboarding() {

    let splides = $('.vendor_onboarding');
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
        new Splide(splides[i], {
            // Desktop on down
            perPage: 1,
            perMove: 1,
            focus: 0, // 0 = left and 'center' = center
            type: 'loop', // 'loop' or 'slide'
            gap: '2em', // space between slides
            arrows: false, // 'slider' or false
            pagination: 'slider', // 'slider' or false
            speed: 600, // transition speed in miliseconds
            dragAngleThreshold: 30, // default is 30
            autoWidth: false, // for cards with differing widths
            rewind: true, // go back to beginning when reach end
            rewindSpeed: 400,
            waitForTransition: false,
            updateOnMove: true,
            trimSpace: false, // true removes empty space from end of list
            autoplay: true,
            interval: 4000,
            breakpoints: {
                991: {
                    // Tablet
                    perPage: 1,
                    gap: '1em',
                },
                767: {
                    // Mobile Landscape
                    perPage: 1,
                    gap: '1em',
                },
                479: {
                    // Mobile Portrait
                    perPage: 1,
                    gap: '1em',
                }
            }
        }).mount();
    }

}
vendor_onboarding();

