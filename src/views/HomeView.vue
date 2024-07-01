<script setup lang="ts">

</script>

<template>
  <main>
    <div class="container">
      <div class="main-section">
        <div class="main-title">
          TRENDING
        </div>
        <div class="main-content">
          <div class="trending">
            <div class="trending-carrousel">
              <img src="../assets/imgs/trending-carrousel-photo.jpg" />
              <div class="carrousel-content">
                <div class="carrousel-content-tags">
                  <div class="tag" style="background: #005d90;">Manga</div>
                  <div class="tag" style="background: red;">Seinen</div>
                  <div class="tag" style="background: #00da26;">On Going</div>
                </div>
                <div class="carrousel-content-title">
                  VINLAND SAGA
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
                <div class="carrousel-content-points">
                  <div class="carrousel-content-point selected"></div>
                  <div class="carrousel-content-point"></div>
                  <div class="carrousel-content-point"></div>
                  <div class="carrousel-content-point"></div>
                  <div class="carrousel-content-point"></div>

                </div>
              </div>
            </div>
            <div class="trending-list">
              LISTA
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.trending {
  display: flex;
}

.trending-carrousel {
  display: flex;
  width: 800px;
  height: 450px;
}

.carrousel-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 0 0 25px 25px;
  padding-left: 10px;
  padding-bottom: 15px;
  top: 377px;
  height: 200px;
  width: 791.05px;
  position: absolute;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.662), rgba(0, 0, 0, 0.849), black);
}

.carrousel-content-title{
  font-size: 32px;
  font-weight: bold;
}

.carrousel-content-chapters{
  width: fit-content;
  padding: 1px 5px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.452);
}

.carrousel-content-info{
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
    height: 15px;
    width: 15px;
    border-radius: 50px;
}
.carrousel-content-point.selected{
  background: rgba(255, 255, 0, 0.516);
}
.carrousel-content-tags {
  display: flex;
}

.trending-carrousel img {
  width: 100%;
  border-radius: 25px;
  border-left: solid 3px rgba(0, 0, 0, 0.495);
  border-bottom: solid 5px rgba(0, 0, 0, 0.705);
}

.trending-list {
  display: flex;
  width: 25%;
}</style>
