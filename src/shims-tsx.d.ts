import Vue, { VNode, ComponentOptions } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
// import Vue, { PluginObject, PluginFunction, VueConstructor } from 'vue';

// declare interface IVueProgressbar {
//     start(): void;
//     finish(): void;
//     parseMeta(meta: any): void;
//     fail(): void;
// }
// ComponentOptions is declared in types/options.d.ts
declare module 'vue/types/options' {
  // interface ComponentOptions<V extends Vue> {
  //   myOption?: string
  // }
}
declare module 'vue/types/vue' {
  interface Vue {
    // $q: any;
  }
  // interface VueConstructor<V extends Vue = Vue> {
  //     swal: any;
  // }
}
