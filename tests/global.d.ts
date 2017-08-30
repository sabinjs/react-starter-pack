declare module NodeJS  {
  interface Global {
    window: any,
    document: any,
    navigator: any,
    [key:string]: any;
  }
}