
const business_name = document.querySelector('#business_name')
const phn_num = document.querySelector('#phn_num')
const service = document.querySelector('#service')

const nxt_btn = document.querySelector('#nxt_btn')
const right_arrow = document.querySelector('#service')


const business_name_err = document.querySelector('#business_name_err')
const phn_err = document.querySelector('#phn_err')
const service_err = document.querySelector('#service_err')

const remove_err = function(field, err){
    field.addEventListener('input', ()=>{
        err.style.display = 'none'
    })
}

remove_err(business_name, business_name_err)
remove_err(phn_num, phn_err)
remove_err(service, service_err)

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
        //console.log('Here')
    }
})