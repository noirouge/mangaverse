<template >
    <div class="navbar">
        <div class="brand-logo">MANGAVERSE</div>
        <div class="nav">
            <div class="nav-search">
                <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                <input class="search-input"  placeholder="Search Manga..."/>
            </div>
            <div class="nav-items">
                <div class="nav-item selected">HOME</div>
                <div class="nav-item">LIBRARY</div>
                <div class="nav-item">READING</div>
                <div class="nav-item">MY LIST</div>
            </div>
            <div class="nav-profile-section">
                <div class="nav-notification">

                </div>
                <div class="nav-profile">
                    <img src="../../assets/imgs/profile-photo.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import {onMounted} from "vue";

onMounted(() => {
console.log("HELLO NAVBAR");
})

</script>

<style scoped>
.brand-logo{
    font-family: 'Jolly Lodger';
    background: -webkit-linear-gradient(#ffffff, #dddddd, #0D0D0D);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 28px;
}

.navbar{
    display: flex;
    align-items: center;
}

.nav-items{
    display: flex;
    width: 100%;
}

.nav{
    width: 100%;
    display: flex;
    margin-left: 25px;
    align-items: center;
    justify-content: space-between;
}

.nav-search{
    fill: #8B8B8B;
    color: #8B8B8B;
}

.search-icon{
    color: #8B8B8B;
    margin-left: 1px;
    margin-top: 5px;
    position: absolute;
    height: 20px;
    width: 32px;
}

.search-input{
    padding-left: 31px;
    font-size: 20px;
    height: 28px;
    border-radius: 12px;
    width: 400px;
    border: 0;
    background: #1C1C1C;
    color: #8B8B8B;
    font-family: 'Times New Roman', Times, serif;
}

.nav-item{
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    font-weight: bold;
    margin-left: 40px;
}

.nav-item.selected{
    color: yellow;
}

.nav-profile{
    display: flex;
    width: 60px;
    height: 60px;
}

.nav-profile img{
    border-radius: 30px;
    border: solid 1px gray;
}

</style>