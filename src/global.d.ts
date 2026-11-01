declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "@theme/Redoc" {
  export { default } from "docusaurus-theme-redoc/dist/theme/Redoc";
}
