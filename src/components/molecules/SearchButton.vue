<template>
 <div  class="search  mt-3">
    <div class="form-group has-search">
        <input type="text" class="form-control mt-2" placeholder="Search">
    </div>
    <div  class="i-plus">
        <b-icon icon="plus" scale="3" variant="primary"></b-icon>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.search {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.has-search .form-control {
    padding-left: 2rem;
    height: 2.37rem;
    border-radius: 100px;
}
.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    top: 88px;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}

</style>
