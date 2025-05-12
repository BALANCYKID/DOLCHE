;(function($D){
    var $button_cakes    = $D.querySelector('.but_cakes'),
        $cakes = $D.querySelector('.price_and_img_cakes'),
        $puff = $D.querySelector('.price_and_img_puff'),
        $bread = $D.querySelector('.price_and_img_bread');
  
    $button_cakes.addEventListener('click', function(e){
      var data = e.target.dataset,
          toggleText = $button_cakes.innerHTML,
          isVisible = $cakes.style.display == 'flex';
      
      $button_cakes.innerHTML = data.toggleText;
      data.toggleText = toggleText;
      
      $cakes.style.display = isVisible ? 'flex' : 'flex';
      $puff.style.display = isVisible ? 'none' : 'none';
      $bread.style.display = isVisible ? 'none' : 'none';
    });
})(document);
;(function($D){
    var $button_puff    = $D.querySelector('.but_puff_pastry'),
        $cakes = $D.querySelector('.price_and_img_cakes'),
        $puff = $D.querySelector('.price_and_img_puff'),
        $bread = $D.querySelector('.price_and_img_bread');
  
    $button_puff.addEventListener('click', function(e){
      var data = e.target.dataset,
          toggleText = $button_puff.innerHTML,
          isVisible = $puff.style.display == 'flex';
      
      
      $cakes.style.display = isVisible ? 'none' : 'none';
      $puff.style.display = isVisible ? 'flex' : 'flex';
      $bread.style.display = isVisible ? 'none' : 'none';
    });
})(document);
;(function($D){
    var $button_bread    = $D.querySelector('.but_bread'),
        $cakes = $D.querySelector('.price_and_img_cakes'),
        $puff = $D.querySelector('.price_and_img_puff'),
        $bread = $D.querySelector('.price_and_img_bread');
  
    $button_bread.addEventListener('click', function(e){
      var data = e.target.dataset,
          toggleText = $button_bread.innerHTML,
          isVisible = $bread.style.display == 'flex';
      
      
      $cakes.style.display = isVisible ? 'none' : 'none';
      $puff.style.display = isVisible ? 'none' : 'none';
      $bread.style.display = isVisible ? 'flex' : 'flex';
    });
})(document);






const modalLink = document.querySelector('.products');
const overlay = document.querySelector('.dropdown-content');
const closeBtn = document.querySelector('.product');
const companyBtn = document.querySelector('.about_the_company');
const closecompanyBtn = document.querySelector('.about_the_companys');
const company_menu = document.querySelector('.company_menu');
const noth = document.querySelector('.nothing');
const sims = document.querySelector('.sims');

modalLink.addEventListener('click', e => {
  overlay.classList.add('show');
  modalLink.classList.add('shows');
  closeBtn.classList.remove('shows');
  company_menu.classList.remove('show');
  companyBtn.classList.remove('shows');
  closecompanyBtn.classList.add('shows');
  noth.classList.add('sims');
});

closeBtn.addEventListener('click', e => {
    modalLink.classList.remove('shows');
  overlay.classList.remove('show');
  closeBtn.classList.add('shows');
  company_menu.classList.remove('show');
  companyBtn.classList.remove('shows');
  closecompanyBtn.classList.add('shows');
  noth.classList.remove('sims');
});
companyBtn.addEventListener('click', e => {
    company_menu.classList.add('show');
    companyBtn.classList.add('shows');
    closecompanyBtn.classList.remove('shows');
    overlay.classList.remove('show');
    modalLink.classList.remove('shows');
    closeBtn.classList.add('shows');
    noth.classList.add('sims');
  });
  
  closecompanyBtn.addEventListener('click', e => {
    companyBtn.classList.remove('shows');
      company_menu.classList.remove('show');
    closecompanyBtn.classList.add('shows');
    overlay.classList.remove('show');
    modalLink.classList.remove('shows');
    closeBtn.classList.add('shows');
    noth.classList.remove('sims');
  });
  noth.addEventListener('click', s => {
    noth.classList.remove('sims');
    closeBtn.classList.add('shows');
    modalLink.classList.remove('shows');
    overlay.classList.remove('show');
    closecompanyBtn.classList.add('shows');
    companyBtn.classList.remove('shows');
    company_menu.classList.remove('show');
  })

