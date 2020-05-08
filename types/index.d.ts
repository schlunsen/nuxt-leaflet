import * as L from "leaflet";

declare module "vue/types/vue" {
  interface Vue {
    $L: typeof L;
  }
}
