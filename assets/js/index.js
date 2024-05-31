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

///**======================= SHOW SCROLL UP =========================== */
