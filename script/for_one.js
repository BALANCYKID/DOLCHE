const modalLink = document.querySelector('.products');
const overlay = document.querySelector('.dropdown-content');
const closeBtn = document.querySelector('.product');
const companyBtn = document.querySelector('.about_the_company');
const closecompanyBtn = document.querySelector('.about_the_companys');
const company_menu = document.querySelector('.company_menu');

modalLink.addEventListener('click', e => {
  overlay.classList.add('show');
  modalLink.classList.add('shows');
  closeBtn.classList.remove('shows');
  company_menu.classList.remove('show');
  companyBtn.classList.remove('shows');
  closecompanyBtn.classList.add('shows');
});

closeBtn.addEventListener('click', e => {
    modalLink.classList.remove('shows');
  overlay.classList.remove('show');
  closeBtn.classList.add('shows');
  company_menu.classList.remove('show');
  companyBtn.classList.remove('shows');
  closecompanyBtn.classList.add('shows');
});
companyBtn.addEventListener('click', e => {
    company_menu.classList.add('show');
    companyBtn.classList.add('shows');
    closecompanyBtn.classList.remove('shows');
    overlay.classList.remove('show');
    modalLink.classList.remove('shows');
    closeBtn.classList.add('shows');
  });
  
  closecompanyBtn.addEventListener('click', e => {
    companyBtn.classList.remove('shows');
      company_menu.classList.remove('show');
    closecompanyBtn.classList.add('shows');
    overlay.classList.remove('show');
    modalLink.classList.remove('shows');
    closeBtn.classList.add('shows');
  });