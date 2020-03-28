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
    cta: "",
    category: ""
  }
  let currentFilter = { ...initialFilter };
  
  function applyFilter(f) {
    const filter = `${f.type}${f.area}${f.cta}${f.category}`;
    console.log('applying: ', filter)
    $grid.isotope({ filter });
  }

  // city-region-select.html
  $('select#area-filter').on('change', ev => {
    currentFilter.area = ev.target.value;
    applyFilter(currentFilter);
  })

  // cta-select.html
  $('select#cta-filter').on('change', ev => {
    currentFilter.cta = ev.target.value;
    applyFilter(currentFilter);
  })
  
  // og filter button array
  $('.nav-item > .btn.btn-flourish').on('click', ev => {
    currentFilter.type = ev.target.getAttribute('filter-by');
    applyFilter(currentFilter);
    $('button[filter-by]').removeClass('active');
    $(ev.target).addClass('active');
  });

  // filter-button-array.html
  $('.btn.btn-flourish.filter').on('click', ev => {
    currentFilter.category = ev.target.getAttribute('data-filter-by');
    applyFilter(currentFilter);
    $('button[data-filter-by]').removeClass('active');
    $(ev.target).addClass('active');
  });

  // nav
  $('#menu-toggle').on('click', ev => {
    $('nav.fl-nav').toggleClass('hidden');
  });

}

$(document).ready(init);
