/// <reference types='codeceptjs' />
type steps_file = typeof import("./steps_file");

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    current: any;
    utils: typeof import("./utils/index.ts");
  }
  interface Methods extends Playwright {}
  interface I extends WithTranslation<Methods>, ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}

