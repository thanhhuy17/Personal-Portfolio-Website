///**======================= SERVICES MODAL  =========================== */
const modal = document.querySelectorAll('.services_modal'),
      modalButton = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')
// Tạo biến activeModal để chứa class cần thêm vào
let activeModal = (modalClick) =>{
    modal[modalClick].classList.add('active-modal')
}
// Duyệt qua biến modalButton chứa class .services__button để lắng nghe sự kiện click
// Nếu được click  thì thêm activeModal vào
modalButton.forEach((modalButton, i)=>{
    modalButton.addEventListener('click', ()=>{
        activeModal(i)
    })
})

// Close
// let activeCloseModal = (modalClick) =>{
//     modal[modalClick].classList.remove('active-modal')
// }
// // Duyệt qua biến modalClose chứa class .services__modal-close để lắng nghe sự kiện click
// // Nếu được click  thì xóa activeModal ra
// modalClose.forEach((modalClose, i)=>{
//     modalClose.addEventListener('click', ()=>{
//         activeCloseModal(i)
//     })
// })
// Cách 2 để đóng
// Duyệt qua class modalClose
modalClose.forEach((modalClose)=>{
    // Lắng nghe sự kiện click
    modalClose.addEventListener('click', ()=>{
        //có click thì xóa class active-modal
        modal.forEach((modalRemodeClass)=>{
            modalRemodeClass.classList.remove('active-modal')
        })
    })
})


///**======================= SWIPER TESTIMONIAL  =========================== */
const swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },
})

///**======================= SHOW SCROLL UP FOR HOME =========================== */
// const scrollUp = ()=>{
//     const scrollUp = document.getElementById('scroll-up')

//     this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
///**======================= SHOW SCROLL UP =========================== */
const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY>=350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
} 
window.addEventListener('scroll', scrollUp)


