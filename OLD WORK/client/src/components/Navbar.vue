<template>
<b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>


  <b-navbar-brand href="#/">
  <h1>#KnowIt</h1>
        <!-- <img src="https://github.com/EvolutionaryCode/-KnowIt/blob/master/client/src/assets/KIlogo.png?raw=true" alt="BV"> -->
</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
    <b-navbar-brand href="#/about">
      <div class="back">
      <div class="button_base b07_3d_double_roll">
        <div>About</div>
        <div>About</div>
        <div>About</div>
        <div>About</div>
      </div>
      </div>
    </b-navbar-brand>
    <b-navbar-brand href="#/account">
      <div class="back">
      <div class="button_base b07_3d_double_roll">
        <div>Login</div>
        <div>Login</div>
        <div>Login</div>
        <div>Login</div>
      </div>
      </div>
    </b-navbar-brand>
    <b-navbar-brand href="#/register">
      <div class="back">
      <div class="button_base b07_3d_double_roll">
        <div>Register</div>
        <div>Register</div>
        <div>Register</div>
        <div>Register</div>
      </div>
      </div>
    </b-navbar-brand>
    
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
  }
}
</script>

<style scoped>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css');
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

.preserve-3d {
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
}

#header h1{
    margin:0px;
}
body {
    top: 0;
    padding-top: 50px;
    padding-bottom: 20px;
    padding: 0;
    border: 0;
    margin-top: 0px;
    overflow-x: none;
    background-color: none;
    font-family: Roboto Condensed, sans-serif;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
}

.back:before {
    content: counter(bc) "_";
    position: absolute;
    padding: 10px;
}

@media screen and (max-width: 1260px) {
    .back {
        width: 50%;
    }
}

@media screen and (max-width: 840px) {
    .back {
        width: 100%;
    }
}

.button_base {
    margin: 0;
    border: 0;
    font-size: 18px;
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: 0px;
    margin-left: 0px;
    width: 200px;
    height: 50px;
    text-align: center;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-user-select: none;
    cursor: default;
}

.button_base:hover {
    cursor: pointer;
}
.b07_3d_double_roll {
    perspective: 500px;
    -webkit-perspective: 500px;
    -moz-perspective: 500px;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
}

.b07_3d_double_roll div {
    position: absolute;
    text-align: center;
    padding: 10px;
    border: #000000 solid 1px;
    pointer-events: none;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}

.b07_3d_double_roll div:nth-child(1) {
    color: #000000;
    background-color: #ffffff;
    z-index: 0;
    width: 100%;
    height: 50px;
    clip: rect(0px, 100px, 50px, 0px);
    position: absolute;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform-origin: 50% 50% -25px;
    -webkit-transform-origin: 50% 50% -25px;
    -moz-transform-origin: 50% 50% -25px;
}

.b07_3d_double_roll div:nth-child(2) {
    color: #000000;
    background-color: #000000;
    z-index: -1;
    width: 100%;
    height: 50px;
    clip: rect(0px, 100px, 50px, 0px);
    position: absolute;
    transform: rotateX(90deg);
    -webkit-transform: rotateX(90deg);
    -moz-transform: rotateX(90deg);
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transform-origin: 50% 50% -25px;
    -webkit-transform-origin: 50% 50% -25px;
    -moz-transform-origin: 50% 50% -25px;
}

.b07_3d_double_roll div:nth-child(3) {
    color: #000000;
    background-color: #ffffff;
    z-index: 0;
    width: 100%;
    height: 50px;
    clip: rect(0px, 200px, 50px, 100px);
    position: absolute;
    transition: all 0.2s ease 0.1s;
    -webkit-transition: all 0.2s ease 0.1s;
    -moz-transition: all 0.2s ease 0.1s;
    transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform-origin: 50% 50% -25px;
    -webkit-transform-origin: 50% 50% -25px;
    -moz-transform-origin: 50% 50% -25px;
}

.b07_3d_double_roll div:nth-child(4) {
    color: #000000;
    background-color: #000000;
    z-index: -1;
    width: 100%;
    height: 50px;
    clip: rect(0px, 200px, 50px, 100px);
    position: absolute;
    transform: rotateX(-90deg);
    -webkit-transform: rotateX(-90deg);
    -moz-transform: rotateX(-90deg);
    transition: all 0.2s ease 0.1s;
    -webkit-transition: all 0.2s ease 0.1s;
    -moz-transition: all 0.2s ease 0.1s;
    transform-origin: 50% 50% -25px;
    -webkit-transform-origin: 50% 50% -25px;
    -moz-transform-origin: 50% 50% -25px;
}

.b07_3d_double_roll:hover div:nth-child(1) {
    background-color: #000000;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transform: rotateX(-90deg);
    -webkit-transform: rotateX(-90deg);
    -moz-transform: rotateX(-90deg);
}

.b07_3d_double_roll:hover div:nth-child(2) {
    color: #ffffff;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
}

.b07_3d_double_roll:hover div:nth-child(3) {
    background-color: #000000;
    transition: all 0.2s ease 0.1s;
    -webkit-transition: all 0.2s ease 0.1s;
    -moz-transition: all 0.2s ease 0.1s;
    transform: rotateX(90deg);
    -webkit-transform: rotateX(90deg);
    -moz-transform: rotateX(90deg);
}

.b07_3d_double_roll:hover div:nth-child(4) {
    color: #ffffff;
    transition: all 0.2s ease 0.1s;
    -webkit-transition: all 0.2s ease 0.1s;
    -moz-transition: all 0.2s ease 0.1s;
    transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
}
</style>