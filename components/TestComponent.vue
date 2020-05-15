<template>
  <div>
    Hello world
    {{ this.test }}
    <div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      counter {{ getDataStore }}
    </div>

    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>

    <div class="container mt-1">
      <!-- Content here -->
      <table class="table  table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>

      <div class="TilesPanelComponent__content">
        <!---->
        <div
          data-v-4f6b0a85=""
          data-v-52baeda3=""
          class="StatusTileComponent noselect"
        >
          <div data-v-4f6b0a85="" class="StatusTileComponent__ContentBlock">
            <div
              data-v-4f6b0a85=""
              class="StatusTileComponent__ContentBlock__Content"
            >
              <div
                data-v-4f6b0a85=""
                class="StatusTileComponent__ContentBlock__Content--content"
              >
                <!---->
                <div
                  data-v-4f6b0a85=""
                  name="content"
                  class="StatusTileComponent__ContentBlock__Content--simple-content"
                >
                  30
                </div>
                <!---->
              </div>
              <!---->
              <!---->
            </div>
            <div
              data-v-4f6b0a85=""
              class="StatusTileComponent__ContentBlock__Footer"
            >
              <div
                data-v-4f6b0a85=""
                class="StatusTileComponent__ContentBlock__Footer--footer"
              >
                <div
                  data-v-52baeda3=""
                  data-v-4f6b0a85=""
                  class="font-weight-bold"
                >
                  Portfolios
                </div>
                <!---->
              </div>
              <div
                data-v-4f6b0a85=""
                class="StatusTileComponent__ContentBlock__Footer--footer-right"
              >
                <!---->
                <!---->
              </div>
            </div>
          </div>
          <div
            data-v-4f6b0a85=""
            class="StatusTileComponent__IconBlock"
            style="background-color: rgb(245, 158, 25); box-shadow: rgba(245, 158, 25, 0.3) 0px 3px 6px;"
          >
            <span
              data-v-52baeda3=""
              data-v-4f6b0a85=""
              class="icon icon-port admin-top-tiles-bar__icon"
            ></span>
            <!---->
          </div>
        </div>
        <div
          data-v-4f6b0a85=""
          data-v-52baeda3=""
          class="StatusTileComponent noselect"
        >
          <div data-v-4f6b0a85="" class="StatusTileComponent__ContentBlock">
            <div
              data-v-4f6b0a85=""
              class="StatusTileComponent__ContentBlock__Content"
            >
              <div
                data-v-4f6b0a85=""
                class="StatusTileComponent__ContentBlock__Content--content"
              >
                <!---->
                <div
                  data-v-4f6b0a85=""
                  name="content"
                  class="StatusTileComponent__ContentBlock__Content--simple-content"
                >
                  7126
                </div>
                <!---->
              </div>
              <!---->
              <!---->
            </div>
            <div
              data-v-4f6b0a85=""
              class="StatusTileComponent__ContentBlock__Footer"
            >
              <div
                data-v-4f6b0a85=""
                class="StatusTileComponent__ContentBlock__Footer--footer"
              >
                <div
                  data-v-52baeda3=""
                  data-v-4f6b0a85=""
                  class="font-weight-bold"
                >
                  Sites
                </div>
                <!---->
              </div>
              <div
                data-v-4f6b0a85=""
                class="StatusTileComponent__ContentBlock__Footer--footer-right"
              >
                <!---->
                <!---->
              </div>
            </div>
          </div>
          <div
            data-v-4f6b0a85=""
            class="StatusTileComponent__IconBlock"
            style="background-color: rgb(2, 171, 146); box-shadow: rgba(2, 171, 146, 0.3) 0px 3px 6px;"
          >
            <span
              data-v-52baeda3=""
              data-v-4f6b0a85=""
              class="icon icon-pin-marker admin-top-tiles-bar__icon"
            ></span>
            <!---->
          </div>
        </div>
        <div
          data-v-4f6b0a85=""
          data-v-52baeda3=""
          class="StatusTileComponent noselect"
        >
          <div data-v-4f6b0a85="" class="StatusTileComponent__ContentBlock">
            <div
              data-v-4f6b0a85=""
              class="StatusTileComponent__ContentBlock__Content"
            >
              <div
                data-v-4f6b0a85=""
                class="StatusTileComponent__ContentBlock__Content--content"
              >
                <!---->
                <div
                  data-v-4f6b0a85=""
                  name="content"
                  class="StatusTileComponent__ContentBlock__Content--simple-content"
                >
                  162
                </div>
                <!---->
              </div>
              <!---->
              <!---->
            </div>
            <div
              data-v-4f6b0a85=""
              class="StatusTileComponent__ContentBlock__Footer"
            >
              <div
                data-v-4f6b0a85=""
                class="StatusTileComponent__ContentBlock__Footer--footer"
              >
                <div
                  data-v-52baeda3=""
                  data-v-4f6b0a85=""
                  class="font-weight-bold"
                >
                  Users
                </div>
                <!---->
              </div>
              <div
                data-v-4f6b0a85=""
                class="StatusTileComponent__ContentBlock__Footer--footer-right"
              >
                <!---->
                <!---->
              </div>
            </div>
          </div>
          <div
            data-v-4f6b0a85=""
            class="StatusTileComponent__IconBlock"
            style="background-color: rgb(116, 38, 179); box-shadow: rgba(116, 38, 179, 0.3) 0px 3px 6px;"
          >
            <span
              data-v-52baeda3=""
              data-v-4f6b0a85=""
              class="icon icon-person admin-top-tiles-bar__icon"
            ></span>
            <!---->
          </div>
        </div>
        <div
          data-v-4f6b0a85=""
          data-v-52baeda3=""
          class="StatusTileComponent noselect"
        >
          <div data-v-4f6b0a85="" class="StatusTileComponent__ContentBlock">
            <div
              data-v-4f6b0a85=""
              class="StatusTileComponent__ContentBlock__Content"
            >
              <div
                data-v-4f6b0a85=""
                class="StatusTileComponent__ContentBlock__Content--content"
              >
                <!---->
                <div
                  data-v-4f6b0a85=""
                  name="content"
                  class="StatusTileComponent__ContentBlock__Content--simple-content"
                >
                  25
                </div>
                <!---->
              </div>
              <!---->
              <!---->
            </div>
            <div
              data-v-4f6b0a85=""
              class="StatusTileComponent__ContentBlock__Footer"
            >
              <div
                data-v-4f6b0a85=""
                class="StatusTileComponent__ContentBlock__Footer--footer"
              >
                <div
                  data-v-52baeda3=""
                  data-v-4f6b0a85=""
                  class="font-weight-bold"
                >
                  Roles
                </div>
                <!---->
              </div>
              <div
                data-v-4f6b0a85=""
                class="StatusTileComponent__ContentBlock__Footer--footer-right"
              >
                <!---->
                <!---->
              </div>
            </div>
          </div>
          <div
            data-v-4f6b0a85=""
            class="StatusTileComponent__IconBlock"
            style="background-color: rgb(242, 88, 104); box-shadow: rgba(242, 88, 104, 0.3) 0px 3px 6px;"
          >
            <span
              data-v-52baeda3=""
              data-v-4f6b0a85=""
              class="icon icon-blocks admin-top-tiles-bar__icon"
            ></span>
            <!---->
          </div>
        </div>
        <!---->
        <!---->
        <!---->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    test: ""
  },
  computed: {
    getDataStore() {
      return this.$store.state.counter;
    }
  },
  methods: {
    increment() {
      console.log($("button"));
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  }
};
</script>
<style lang="scss" scoped>
.el-row {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  .el-button {
    &--primary {
      order: 1;
    }
  }
}
</style>
