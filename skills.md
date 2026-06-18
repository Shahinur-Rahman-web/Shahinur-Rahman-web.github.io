---
layout: default
title: Skills
section: skills
---

<section class="page-hero">
<div class="wrap">
<span class="eyebrow mono">SKILLS</span>
<h1>Software &amp; Field Skills</h1>
<p class="lede">What I can do with a computer, with instruments in the field, and working directly with people and communities.</p>
</div>
</section>

<section>
<div class="wrap">
<div class="tabs" data-default="software">

<div class="tab-buttons">
  <button class="tab-btn" data-tab="software">Software</button>
  <button class="tab-btn" data-tab="sensing">Environmental Sensing</button>
  <button class="tab-btn" data-tab="social">Social &amp; Community Research</button>
</div>

<!-- ============================================================
     SOFTWARE TAB
     To add a new tool: add a new line  <span class="chip">TOOL NAME</span>
     ============================================================ -->
<div class="tab-panel" id="software">

<div class="chip-row">
  <span class="chip">R</span>
  <span class="chip">Python</span>
  <span class="chip">PCSWMM</span>
  <span class="chip">ArcGIS Pro</span>
  <span class="chip">Google Earth Engine</span>
  <span class="chip">QGIS</span>
  <span class="chip">Random Forest</span>
  <span class="chip">XGBoost</span>
  <span class="chip">SHAP</span>
  <span class="chip">Mann-Kendall / Sen's Slope</span>
  <span class="chip">PELT Change-Point Detection</span>
  <span class="chip">ADD MORE TOOLS HERE</span>
</div>

<br>

**How I typically use these together:** I move raw data from field instruments or Google Earth Engine into R for cleaning and statistical analysis, pass model inputs into PCSWMM or Python for hydrologic and ML modeling, and use ArcGIS Pro or QGIS for spatial outputs and visualization. ADD or EDIT this paragraph to describe your own workflow.

</div>

<!-- ============================================================
     ENVIRONMENTAL SENSING TAB
     To add a new sensing skill: copy one entry block and paste below.
     ============================================================ -->
<div class="tab-panel" id="sensing" hidden>

<div class="entry">
<div class="entry-head"><h3>HOBO Water-Level Logger Deployment &amp; Correction</h3></div>

Deployed HOBO loggers in bioswale and rain garden infrastructure to capture water level during storm events. Developed a two-step pressure-correction workflow in R to remove barometric drift and reconcile timezone offsets (GMT-5 logger vs. UTC rain gauge) before using the data for hydrologic model calibration.

</div>

<div class="entry">
<div class="entry-head"><h3>RTK GPS Survey</h3></div>

High-precision elevation and boundary surveying used to delineate subcatchments for hydrologic modeling of stormwater infrastructure.

</div>

<div class="entry">
<div class="entry-head"><h3>Rainfall &amp; Water Sampling</h3></div>

Rain gauge data collection and reconciliation across instruments with differing timezone settings. ADD a line about water sampling — what parameters you tested, where, and what it was for.

</div>

<div class="entry">
<div class="entry-head"><h3>Native Seed Collection &amp; Greenhouse Operations</h3></div>

Collected native plant seed for coastal restoration plantings and managed greenhouse and nursery supply chain operations. ADD any specific techniques, species, or scale details you want to highlight.

</div>

<!-- ============================================================
     FIELD PHOTOS — replace the placeholder boxes with real images.
     To add a real photo:
       1. Save your photo as a .jpg or .png file
       2. Upload it to the  assets/images/  folder
       3. Replace a placeholder block with:
          <img src="/assets/images/YOUR-PHOTO-FILENAME.jpg" alt="Short description">
     ============================================================ -->

**Field photos**

<div class="photo-grid">
  <div class="photo-box">Add photo<br>(e.g. HOBO logger install)</div>
  <div class="photo-box">Add photo<br>(e.g. site visit)</div>
  <div class="photo-box">Add photo<br>(e.g. water sampling)</div>
  <div class="photo-box">Add photo<br>(e.g. RTK GPS survey)</div>
  <div class="photo-box">Add photo<br>(e.g. seed collection)</div>
  <div class="photo-box">Add photo<br>(e.g. greenhouse work)</div>
</div>

</div>

<!-- ============================================================
     SOCIAL & COMMUNITY RESEARCH TAB
     Fill this in with your survey / interview / outreach experience.
     ============================================================ -->
<div class="tab-panel" id="social" hidden>

<div class="entry">
<div class="entry-head"><h3>ADD TITLE — e.g. Household Surveys / Key Informant Interviews</h3></div>

Describe the kind of community-facing research you've done here — e.g. surveys, key informant interviews, focus group discussions, community meetings. Include the location, population engaged, and the purpose of the work.

</div>

<div class="entry">
<div class="entry-head"><h3>ADD TITLE — e.g. Stakeholder Engagement / Participatory Mapping</h3></div>

Add a second item here if relevant, or delete this block.

</div>

</div>

</div><!-- end tabs -->
</div><!-- end wrap -->
</section>
