///**======================= SERVICES MODAL  =========================== */
const modal = document.querySelectorAll('.services_modal'),
      modalButton = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let activeModal = (modalClick) =>{
    modal[modalClick].classList.add('active-modal')
}
modalButton.forEach((modalButton, i)=>{
    modalButton.addEventListener('click', ()=>{
        activeModal(i)
    })
})

// Close
let activeCloseModal = (modalClick) =>{
    modal[modalClick].classList.remove('active-modal')
}
modalClose.forEach((modalClose, i)=>{
    modalClose.addEventListener('click', ()=>{
        activeCloseModal(i)
    })
})
///**======================= SWIPER TESTIMONIAL  =========================== */

///**======================= SHOW SCROLL UP =========================== */
