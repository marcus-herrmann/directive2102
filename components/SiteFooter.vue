<template>
  <footer>
    <div class="footer__inner">
      <ul class="nav-footer">
        <li><a href="https://github.com/marcus-herrmann/directive2102">directive2102.eu on GitHub</a></li>
        <li><a href="https://marcus.io/privacy-policy#english">Privacy Policy</a></li>
        <li>A project by <a href="https://marcus.io/">marcus</a></li>
        <li><a href="https://twitter.com/_marcusherrmann">Follow me on twitter</a></li>
      </ul>
      <p>Legal stuff: Inhaltlich Verantwortlicher gemäß § 10 Absatz 3 MDStV: Marcus Herrmann, c/o Office D118, Danziger Str. 118, 10405 Berlin, blog [at] marcus [dot] io.</p>
    </div>
  </footer>
</template>

<style>
  footer {
    position: relative;
    background: #fff;
    margin-top: -4rem;
    min-height: 5rem;
  }

  footer:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: -2rem;
    bottom: 2rem;
    background: #fff;
    z-index: -1;
    transform: skewY(-2deg);
  }

  footer a,
  footer a:hover,
  footer a:focus {
    color: #0f0d34;
  }

  footer a:focus {
    text-decoration: none;
  }

  footer .nav-footer {
    display: flex;
    margin: 0 0 3rem;
    justify-content: space-between;
  }

  footer p {
    margin-bottom: 0;
    padding-bottom: 1rem;
  }

  .footer__inner {
    max-width: 64rem;
    padding: 2rem;
    margin: 4rem auto 0;
  }

  @media screen and (max-width: 700px) {

    .footer__inner {
      padding-top: 0;
      padding-bottom: 0;
    }

    footer .nav-footer {
      flex-direction: column;
      margin-bottom: 2rem;
      text-align: center;
    }

    footer .nav-footer li {
      padding-bottom: 1rem;
    }

    footer:after {
      top: -4rem;
    }

  }

</style>
