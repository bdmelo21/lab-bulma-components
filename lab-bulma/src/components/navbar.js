import React from 'react'
import 'bulma/css/bulma.css';
import CoolButton from './coolbutton';

function Navbar () {
return (
<nav class="navbar is-transparent">
<div class="navbar-brand">
  <a class="navbar-item" href="https://bulma.io">
    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
  </a>
  <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

<div id="navbarExampleTransparentExample" class="navbar-menu">
  <div class="navbar-start">
    <a class="navbar-item" href="https://bulma.io/">
      Home
    </a>
    <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
        Docs
      </a>
      <div class="navbar-dropdown is-boxed">
        <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
          Overview
        </a>
        <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
          Modifiers
        </a>
        <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
          Columns
        </a>
        <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
          Layout
        </a>
        <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
          Form
        </a>
        <hr class="navbar-divider"></hr>
        <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
          Elements
        </a>
        <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
          Components
        </a>
        </div>
    </div>
  </div>

  <div class="navbar-end">
    <div class="navbar-item">
      <div class="field is-grouped">
        <p class="control">
        <CoolButton isSmall isDanger className="button is-rounded my-class" name="Button 1"></CoolButton>
        </p>
        <p class="control">
        <CoolButton isSmall isSuccess className="button" name="Button 2"></CoolButton>
        </p>
      </div>
    </div>
  </div>
</div>
</nav>)
}

export default Navbar;