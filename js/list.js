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

  // window.$grid = $grid;

  const initialFilter = JSON.stringify({
    area: "[data-area]",
    // cta: "",
    categories: {
      "delivery_available": false,
      "voucher_available": false,
      "meal_kits_available": false,
      "groceries_available": false,
      "alcohol_available": false,
      "nhs_donations_available": false,
      "takeaway_available": false
    }
  })
  let currentFilter = JSON.parse(initialFilter);
  
  function applyFilter(f) {
    const cats = Object.keys(f.categories).map(key => {
      return f.categories[key] ? `[data-${key}='TRUE']` : '';
    }).join('');
    const filter = `${f.area}${cats}`;
    console.log('applying: ', filter)
    $grid.isotope({ filter });
    const n = $grid.data('isotope').filteredItems.length
    $('#business-count').text(n);
  }

  // city-region-select.html
  $('select#area-filter').on('change', ev => {
    currentFilter.area = ev.target.value;
    applyFilter(currentFilter);
  });

 //filter.html
  function activeFilterControl(f) {
    let trueFilters = [];
    for (let filter in f.categories) {
      let id = "#" + filter
      if (f.categories[filter] === true) {
        trueFilters.push(filter);
        let id = "#" + filter;
        console.log(id);  
        $(id).show();
      } else {
        $(id).hide();
      }
    }
    if (trueFilters.length) {
      $('#stickyfilter').css("display","flex");
    } else {
      $('#stickyfilter').hide();
    }
  }

  // cta-select.html
  // $('select#cta-filter').on('change', ev => {
  //   currentFilter.cta = ev.target.value;
  //   applyFilter(currentFilter);
  // });

  // filter-button-array.html
  $('.btn.btn-flourish.filter').on('click', ev => {
    const filterBy = ev.target.getAttribute('data-filter-by');
    if (filterBy === 'all') {
      currentFilter.categories = JSON.parse(initialFilter).categories;
      $('.btn.btn-flourish.filter').removeClass('active');
      $(ev.target).addClass('active');
    } else {
      currentFilter.categories[filterBy] = !currentFilter.categories[filterBy];
      $('[data-filter-by="all"]').removeClass('active');
      $(ev.target).toggleClass('active');
      // if they're all unselected, active the 'all' button
      let filtersEnabled = false;
      $('.btn.btn-flourish.filter').each(function() {
        filtersEnabled = filtersEnabled || this.classList.contains('active')
      })
      if (!filtersEnabled) {
        $('[data-filter-by="all"]').addClass('active');
      }
    }
    
    activeFilterControl(currentFilter);
    applyFilter(currentFilter);
  });

  // nav
  $('#menu-toggle').on('click', ev => {
    $('nav.fl-nav').toggleClass('hidden');
  });

}

$(document).ready(init);
