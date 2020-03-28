const init = () => {
  console.log('init');

  $('#area-filter').niceSelect();
  $('#cta-filter').niceSelect();

  const selector = '#business-list';
  const itemSelector = '.business';

  var $grid = $(selector).imagesLoaded(function(){
    $grid.isotope({
      itemSelector,
      layoutMode: 'vertical'
    });
  })

  const initialFilter = {
    area: "[data-area]",
    type: "[data-type]",
    cta: "[data-cta]"
  }
  let currentFilter = { ...initialFilter };
  
  function applyFilter(f) {
    const filter = `${f.type}${f.area}${f.cta}`;
    console.log('applying: ', filter)
    $grid.isotope({ filter });
  }

  
  $('select#area-filter').on('change', ev => {
    currentFilter.area = ev.target.value;
    applyFilter(currentFilter);
  })

  $('select#cta-filter').on('change', ev => {
    currentFilter.cta = ev.target.value;
    applyFilter(currentFilter);
  })
  
  $('.nav-item > .btn.btn-flourish').on('click', ev => {
    currentFilter.type = ev.target.getAttribute('filter-by');
    applyFilter(currentFilter);
    $('button[filter-by]').removeClass('active');
    $(ev.target).addClass('active');
  });

  // nav
  $('#menu-toggle').on('click', ev => {
    $('nav.fl-nav').toggleClass('hidden');
  });

}

$(document).ready(init);
