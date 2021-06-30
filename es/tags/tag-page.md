---
layout: default
---
{% assign langs = page.url | split: '/' %}
{% assign lang = langs[1] %}

<div class="container" id="tag-container" data-scroll-section>
  <h1 id="news-page-title" class="fw-bold add-short-underline">Tag : <span id="tag-title"> </span></h1>
  <div class="row" id="news-roll">
    {% for site-tag in site.tags %}
      {% for post in site.posts %}
        {% for tag in post.tags %}
          {% if site-tag[0] == tag and post.language == lang   %}
            <div class="card card-post news-card d-flex mb-4" id="-{{ site-tag[0] }}" >
              {% if post.image %}
                <div class="post-feature-image-wrapper">
                  <img class="post-feature-image img-fluid" src="{{ "/assets/images/news/"
                  | absolute_url | append: post.image }}" alt="" >
                </div>
              {% endif %}
              <div class="card-body">
                <div class="post-date d-inline-block fw-semibold mb-3">
                  {{ post.date | date: "%b %-d, %Y" }}
                </div>
                <h5 class="post-title fw-semibold mb-2 pb-1">{{ post.title }}</h5>
                <p class="card-text mb-2">
                  {%- if post.excerpt -%} {{ post.excerpt }} {%- else -%} {{
                  post.content | strip_html | truncatewords: '40' | append: "..." }} {%-
                  endif -%}
                </p>
                <a href="{{ post.url }}" class="btn-read-more d-inline-flex align-items-center">
                  <span class="text-wrapper fw-semibold text-uppercase">{{ site.data.news.more[page.language] }}</span>
                  <span class="icon-wrapper lh-0"
                    ><img class="icon-arrow-right" src="{{
                    "/assets/images/icon-arrow-right-blue.png" | absolute_url }}"
                    alt=""></span
                  >
                </a>
              </div>
            </div>
          {% endif %}
        {% endfor %}
      {% endfor %}
    {% endfor %}
  </div>
</div>

{% include snippet_tag_page.html  %}
