/*import { FaHtml5, FaCss3, FaSass, FaBootstrap } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";

import BootstrapIcon from "../../assets/images/";
import CSSIcon from "../../assets/images/css3-48.png";
import GitIcon from "../../assets/images/git-96.png";
import HTMLIcon from "../../assets/images/html5-48.png";

const images: { [key: string]: string } = {
  BootstrapIcon,
  CSSIcon,
  GitIcon,
  HTMLIcon,
}
export default images;

ES6 Module syntax doesn't support dynamic imports for image files by default. 
Imports are resolved statically at compile time,so can't use variables or dynamic strings as import paths.
Bundles like 'webpack' uses "require" in the context to handle the dynamic import resolution during bundling.
*/

const skillsIcons: { [key: string]: string } = {
  BootstrapIcon: require("../../assets/images/bootstrap-96.png"),
  CSSIcon: require("../../assets/images/css3-48.png"),
  GitIcon: require("../../assets/images/git-96.png"),
  HTMLIcon: require("../../assets/images/html5-48.png"),
  JavaScriptIcon: require("../../assets/images/javascript-48.png"),
  JestIcon: require("../../assets/images/jest-48.png"),
  jQueryIcon: require("../../assets/images/jquery-icon.png"),
  LessIcon: require("../../assets/images/less_logo_126.png"),
  OptimizelyIcon: require("../../assets/images/Optimizely_Logo.png"),
  ReactIcon: require("../../assets/images/react.png"),
  ReactTestingIcon: require("../../assets/images/react.png"),
  SassIcon: require("../../assets/images/sass-96.png"),
  SVNIcon: require("../../assets/images/svn_icon.png"),
  TailwindIcon: require("../../assets/images/tailwind-css-48.png"),
  TypeScriptIcon: require("../../assets/images/typescript-48.png"),
  VitestIcon: require("../../assets/images/vite-48.png"),
};

export default skillsIcons;
