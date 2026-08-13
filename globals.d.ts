// Next ships declarations for '*.module.css' but not for plain '*.css'.
// TypeScript 6 reports TS2882 on side-effect imports without one, which is what
// VS Code uses even while the project is on 5.9.
declare module "*.css";
