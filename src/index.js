import * as $ from "jquery";
import { Post } from "./post";
import jsonFile from "@assets/file";
import csvFile from "@assets/addresses";
import xmlFile from "@assets/data";
import webpackLogo from "@assets/icon-square-big";
import "./babel";
import "./styles/box-styles";
import "./styles/style";

const post = new Post("Webpack", webpackLogo);

console.log("Post: ", post.toString());
console.log("Parced json - file: ", jsonFile);
console.log("Parced csv file: ", csvFile);
console.log("Parced xml file: ", xmlFile);

$("pre").addClass("code").html(post.toString());
