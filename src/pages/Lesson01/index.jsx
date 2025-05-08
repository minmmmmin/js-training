import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart01";
import instruction from "./instruction.md?raw";

const convertData = (input) => {
  return input.map(f); //式は関数に渡すことができる。
};
//こいつは変数の宣言
//代入の右辺にかけるもの（代入できるもの）が大体式。

function f(element,index,array){//キャメルケース覚えておくといい。
  console.log("element",element);//式と文の見分けられるようにしよう。;がつくと文になっちゃけどね。
  console.log("index",index);
  console.log("array",array);
  const[name,count] = element;//代入文
  return{
    name:name,
    count:count,
  }
}
//プロパティの値には式が書ける。他のは書けないからconstとか書くと事故る。
//関数宣言は式になる。きっとなる。


//深く文法の理解をしろよってこと。

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer01"
      convertData={convertData}
      dataUrl="data/chs-capacity.json"
      instruction={instruction}
      title="Lesson 01"
      Chart={Chart}
    />
  );
};

export default Lesson;
