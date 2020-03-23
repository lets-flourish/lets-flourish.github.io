---
layout: the-list
title: The Flourish List
---

<div class="container">
{% for business in site.data.businesses %}
  {% if business.publish == "yes" %}
    <section class="section bg-gray overflow-hidden " data-shuffle="item " data-groups="London ">
      <div class="container-fluid ">
        <div class="row gap-y ">
          <div class="col-md-5 mx-auto text-center ">
            <a target="_blank " class=" " href="{{ business.link }} ">
              <img src="{{ business.image }}" alt="... " />
            </a>
          </div>
          <div class="col-md-7 mx-auto ">
            <div>
              <h3>
                <a style="color: #3cba92; " href="{{ business.link }} ">{{business.name}}</a>
                <small class="text-left ">
                  <b>Brewery - </b>
                </small>
              </h3>
            </div>
            <p>
              {{ business.description }}
              <!--
              <p>About Forest Road Brewing Co.: {{ business.Description }}</p>
              <p>How they're tackling COVID-19: {{ business.Description }}</p>
              -->
            </p>
            <a class=" " target="_blank " href=" {{ business.link }} ">
              <button class="btn px-8 " style="background-color: #3cba92; color: #ffffff; "> Learn more</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  {% endif %}
{% endfor %}
</div>

