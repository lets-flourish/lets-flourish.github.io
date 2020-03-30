const init = () => {
  console.log('init');

  const API_KEY = 'etiCjOTVIG3Qn5gesvVRT9I0W70snRNV59Xqkacw';

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

  const initialFilter = JSON.stringify({
    area: "[data-area]",
    // cta: "",
    postcodes: [],
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
    let filter;
    if(f.postcodes.length) {
      filter = f.postcodes.map(r => `#id${r.id}${f.area}${cats}`).join(',');
    } else {
      filter = `${f.area}${cats}`
    }console.log('applying filter', f);
    console.log('applying css selector: ', filter);
    $grid.isotope({ filter });
    const n = $grid.data('isotope').filteredItems.length
    $('.business-count').text(n);
  }

  // city-region-select.html
  $('select#area-filter').on('change', ev => {
    const area = ev.target.value;
    if (area === 'postcode') {
      $('#postcodeQuery').show();
      return;
    }
    $('#postcodeQuery').hide();
    currentFilter.area = area;
    currentFilter.postcodes = [];
    applyFilter(currentFilter);
    $('#query')[0].value = "";
    $('#postcode-query-copy').hide();
    $('#button-filters-copy').show();
  });

 // filter.html
  function activeFilterControl(f) {
    let trueFilters = [];
    for (let filter in f.categories) {
      let id = "#" + filter
      if (f.categories[filter] === true) {
        trueFilters.push(filter);
        let id = "#" + filter;
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

  // postcode-search.html
  $('#postcodeQuery').submit(ev => {
    ev.preventDefault();
    const postcode = $('#query')[0].value;
    const radius = 1.5 // km
    if (postcode.length === 0) return;
    $('#spinner').show();
    $('#searchError').hide();
    console.log({postcode, radius})
    // const baseURL = 'http://localhost:5000/fake.json'
    const baseURL = 'https://wwn4ibhc05.execute-api.eu-west-2.amazonaws.com/prod/v1/places';
    const submitURL = 'https://docs.google.com/forms/u/2/d/e/1FAIpQLSePTw6SCO9HeB23fuYvb3b3oaCNBMTkIcnJBEnMTNMLVnWzUA/viewform';
    const url = `${baseURL}?postcode=${postcode}&radius=${radius}`
    $.ajax(url, {
      headers: {
        'X-Api-Key': API_KEY
      }
    })
      .done((data, status) => {
        console.log({data, status});
        if (data.results.length === 0) {
          currentFilter.postcodes = ["-1"];
          $('#errorMessage').html(`
            we don't know of any businesses around ${postcode}.&nbsp;
            If you do, <a href="${submitURL}">please submit it to the list</a>.&nbsp;
            We update daily.`) ;
          $('#searchError').show();
        } else {
          currentFilter.postcodes = data.results;
        }
        currentFilter.area = "";
        applyFilter(currentFilter);
      })
      .fail((jqXHR, status, errorThrown) => {
        console.log({jqXHR, status, errorThrown})
        $('#errorMessage').text(jqXHR.responseJSON.error) ;
        $('#searchError').show();
      })
      .always(() => {
        $('#postcode-query-copy').show();
        $('#button-filters-copy').hide();
        $('.radius').text(`${radius}km`);
        $('#spinner').hide();
      })
  })

  // nav
  $('#menu-toggle').on('click', ev => {
    $('nav.fl-nav').toggleClass('hidden');
  });

}

$(document).ready(init);
