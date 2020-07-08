<template>
  <div> 
    <NavBar></NavBar>
    <div class="container-fluid">
      <div class="row">
          <SideBar></SideBar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar';
import NavBar from './NavBar';

export default {
  components:{
    SideBar,
    NavBar,
  },
};
</script>