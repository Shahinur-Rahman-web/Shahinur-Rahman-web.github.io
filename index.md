---
layout: default
title: Home
section: home
---

<section class="home-hero" style="border-bottom:1px solid var(--line);">
  <div class="wrap" style="display:grid; grid-template-columns:1.4fr 1fr; gap:48px; align-items:center;">
    <div>
      <span class="eyebrow mono">{{ site.role | upcase }}</span>
      <h1>{{ site.name }}</h1>
      <p class="role">I study how coastal communities monitor, model, and adapt to flooding and a changing climate — combining field sensors, hydrologic models, satellite data, and community engagement.</p>
      <p class="meta mono">{{ site.university }} · {{ site.department }} · {{ site.location }}</p>
    </div>
    <div class="portrait-box">
      Add your photo here<br>
      Save it as <code>assets/images/profile.jpg</code><br>
      Then replace this box with an image.
    </div>
  </div>
</section>

<section style="padding: 40px 0; border-bottom:1px solid var(--line);">
  <div class="wrap">
    <span class="eyebrow mono">CURRENTLY</span>
    <p style="max-width:680px; font-size:1.02rem; color:var(--ink);">Working on stormwater modeling, green stormwater infrastructure performance, compound flooding, and remote-sensing-based environmental change analysis.</p>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow mono">EXPLORE</span>
      <h2>Get to know my work</h2>
    </div>
    <div class="card-grid">
      <a class="card" href="{{ '/research/' | relative_url }}">
        <span class="eyebrow mono">RESEARCH</span>
        <h3>Research Projects</h3>
        <p>Hydrology, compound flood risk, green infrastructure, machine learning, air pollution, and climate-policy work.</p>
      </a>
      <a class="card" href="{{ '/skills/' | relative_url }}">
        <span class="eyebrow mono">SKILLS</span>
        <h3>Software &amp; Field Skills</h3>
        <p>Modeling tools, environmental sensing, GIS/remote sensing, and community-facing research methods.</p>
      </a>
      <a class="card" href="{{ '/publications/' | relative_url }}">
        <span class="eyebrow mono">PUBLICATIONS</span>
        <h3>Publications &amp; Manuscripts</h3>
        <p>Peer-reviewed and in-progress work spanning stormwater, climate trends, air pollution, and policy.</p>
      </a>
    </div>
  </div>
</section>
