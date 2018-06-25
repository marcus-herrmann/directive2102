<template>
  <section class="section" id="applicability">
    <div class="section__inner">
      <h2>Applicability</h2>
      <div class="applicability">
        <div class="applicability-item">
          <h3>What is Covered?</h3>
          <p>The directive aims to laws relating to websites and mobile applications of public sector bodies. Quote
            <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2016.327.01.0001.01.ENG#d1e719-1-1">
              Article 3, 1</a>:</p>
          <blockquote>Public sector body means the State, regional or local authorities, bodies governed by public law
            [...]
          </blockquote>
          <p>For example:</p>
          <ul class="text-list">
            <li>Administrations</li>
            <li>Courts</li>
            <li>Police departments</li>
            <li>Public hospitals</li>
            <li>Universities</li>
            <li>Schools</li>
            <li>Libraries</li>
          </ul>
        </div>
        <div class="applicability-item">
          <h3>What is NOT Covered?</h3>
          <p>However, the directive also formulates exceptions:</p>
          <ul class="text-list">
            <li>Websites and apps of public broadcasters or "other bodies or their subsidiaries fulfilling a public
              service broadcasting remit" (Article 1, 3 lit. a)
            </li>
            <li>"Websites and mobile applications of NGOs that do not provide services that are essential to the public,
              or services that specifically address the needs of, or are meant for, persons with disabilities." (Article
              1, 3 lit. b)
            </li>
            <li>Live streaming</li>
            <li>Office file formats published before 23 September 2018</li>
            <li>Online maps</li>
            <li>Third party content that is not under control of the public body</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .applicability {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

  @media screen and (max-width: 700px) {

    .applicability {
      grid-template-columns: 1fr;
    }

  }
</style>
