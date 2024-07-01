<template>
<div class="trending">
            <div class="trending-carrousel">
              <img src="../assets/imgs/trending-carrousel-photo.jpg" />
              <div class="carrousel-overlay">
                <div class="carrousel-content">
                  <div class="carrousel-content-tags">
                    <div class="tag" style="background: #1464FF; margin-left: 0;">Manga</div>
                    <div class="tag" style="background: red;">Seinen</div>
                    <div class="tag" style="background: #00A707;">On Going</div>
                  </div>
                  <div class="carrousel-content-title">
                    Kimetsu No Yaiba
                  </div>
                  <div class="carrousel-content-chapters">
                    Chapters: 130
                  </div>
                  <div class="carrousel-content-info">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia beatae molestiae eius ea dolore ducimus,
                    nisi ipsa, dignissimos itaque fugit debitis, voluptatum ipsum repudiandae voluptatem culpa distinctio
                    quas nobis a explicabo nam! Officia quisquam fugit deleniti? Voluptatibus quisquam quod natus illum
                    corporis consequuntur reiciendis, quae saepe labore. Molestias, explicabo ab!
                  </div>
                  <div class="carrousel-content-points" style="padding-left: 0">
                    <div class="carrousel-content-point selected"></div>
                    <div class="carrousel-content-point"></div>
                    <div class="carrousel-content-point"></div>
                    <div class="carrousel-content-point"></div>
                    <div class="carrousel-content-point"></div>
  
                  </div>
                </div>
              </div>
            </div>
            <div class="trending-list">
              <div class="trending-list-item selected">
                <div class="list-item-number">
                    1
                </div>
                <div class="list-item-photo">
                    <img src="../assets/imgs/portadas/demon-slayer.jpg" />
                </div>
                <div class="list-item-content">
                    <div class="list-item-content-title">
                        Kimetsu No Yaiba
                    </div>
                    <div class="list-item-content-rate">
                        <div class="list-item-content-rate-views">
                            100,000
                        </div>
                        <div class="list-item-content-rate-stars">
                            XXXXX
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
</template>

<script setup lang="ts">


</script>

<style scoped>
/* CARROUSEL:BEGIN */
.trending {
  display: flex;
}

.trending-carrousel {
  display: flex;
  width: 800px;
  height: 450px;
}

.carrousel-overlay{
  position: absolute;
    height: 450px;
    align-content: flex-end;
}

.carrousel-content {
  padding-bottom: 10px;
    border-radius: 0 0 25px 25px;
    height: 235px;
    width: 795px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.662), rgba(0, 0, 0, 0.849), black);
    align-content: flex-end;
  }

/* .carrousel-content *{
  margin-left: 10px;
} */

.carrousel-content-title{
  margin-left: 10px;
  font-size: 28px;
  /* font-weight: bold; */
  font-family: 'Trade Winds';
}

.carrousel-content-chapters{
  margin-left: 10px;
  font-size: 15px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
    color: #ffffffc7;
    width: fit-content;
    padding: 1px 5px;
    border-radius: 25px;
    background: rgb(255 255 255 / 14%);
}

.carrousel-content-info{
  margin-left: 10px;
  color: rgb(211, 211, 211);
}

.carrousel-content-points{
  display: flex;
  justify-content: center;
  align-items: center;
}

.carrousel-content-point{
  background: #6d6d6d80;
    margin-left: 5px;
    height: 10px;
    width: 10px;
    border-radius: 50px;
}
.carrousel-content-point.selected{
  background: rgba(255, 255, 0, 0.516);
}
.carrousel-content-tags {
  margin-left: 10px;
  display: flex;
}

.trending-carrousel img {
  width: max-content;
    border-radius: 25px;
    border-left: solid 3px rgba(0, 0, 0, 0.495);
    border-bottom: solid 5px rgba(0, 0, 0, 0.705);
}

/* CARROUSEL:END */
/* LIST:BEGIN */
.trending-list {
  border-left: solid 1px #00000063;
    border-bottom: solid 2px #00000047;
  border-radius: 25px;
    background: #00000070;
    display: flex;
    width: 25%;
    justify-content: center;
}
.trending-list-item{
    padding: 3px;
    margin-top: 11px;
    border-radius: 15px;
    width: 95%;
    height: 80px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.trending-list-item.selected{
    background: #ffffff0d;
}

.list-item-number{
    display: flex;
    width: 50px;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 80px;
}

.list-item-photo{
    height: 75px;
    width: 50px;
}

.list-item-photo img{
    border-radius: 5px;
    width: 100%;
    height: 100%;
    display: flex;
}

.list-item-content{
    display: flex;
    flex-direction: column;
}

.list-item-content-title{
    display: flex;
}

.list-item-content-rate{
    display: flex;
}

.list-item-content-rate-views{
    display: flex;
}

.list-item-content-rate-stars{
    display: flex;
}

/* LIST:BEGIN */
</style>