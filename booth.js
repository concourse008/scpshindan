var point = 0;
var first = 0;

function OnLinkClick1(){
  if (first == 0){
    oc1.innerHTML = array[point][0];
    oc2.innerHTML = array[point][1];
    console.log(point);
    first = 1;
  }
  else{
  point = array[point][2];
  end();
  oc1.innerHTML = array[point][0];
  oc2.innerHTML = array[point][1];
  console.log(point);
  }
}

function OnLinkClick2(){
  if (first == 0){
    oc1.innerHTML = array[point][0];
    oc2.innerHTML = array[point][1];
    console.log(point);
    first =1;
  }
  else{
  point = array[point][3];
  end();
  oc1.innerHTML = array[point][0];
  oc2.innerHTML = array[point][1];
  console.log(point);
  }
}

function end(){
  if (point > 100) {
    btnarea.innerHTML = '<h4>あなたにオススメのシナリオは……</h4><h2>『'+endarray[point-101][0]+'』です！</h2><a href="'+endarray[point-101][3]+'" target="_blank"><img src='+endarray[point-101][2]+' width="500" height="500" class="gazou"></a><p>--- あらすじ ---</p><p>'+endarray[point-101][1]+'</p>';
  }
}

//リセットボタン
function reset(){
  point = 0;
  first = 0;
  btnarea.innerHTML = '<p>二択の質問に答えていくとおすすめのシナリオがわかります。</p><a href="javascript:OnLinkClick1();" id="oc1" class="btn-square">診断スタート！</a> &nbsp; <a href="javascript:OnLinkClick2();" id="oc2" class="btn-square2">診断スタート！</a>';
  OnLinkClick1();
}

//開始ボタン
function start(){
  point = 0;
  btnarea.innerHTML = '<p>二択の質問に答えていくとおすすめのシナリオがわかります。</p><a href="javascript:OnLinkClick1();" id="oc1" class="btn-square">診断スタート！</a> &nbsp; <a href="javascript:OnLinkClick2();" id="oc2" class="btn-square2">診断スタート！</a>';
  OnLinkClick1();
}

//選択肢
ary0 = ['謎に立ち向かってほしい','謎から逃げ延びてほしい',1,2];
ary1 = ['ひどい目にあってほしい','かっこよく戦ってほしい',3,105];
ary2 = ['逃げきってほしい','一生苦しんでほしい',102,103];
ary3 = ['激痛で叫ばせたい','苦痛で黙らせたい',101,104];
array = [ary0,ary1,ary2,ary3];

//結果
eary0 = ['ゆりかごの村','里帰りから戻らない友人を追って「揺陽村」を訪れる探索者たち。<br>友人の手掛かりを調べるうち、村固有の宗教「白羽教」の秘密に近づいていく。<br>全てを明らかにし、友人を連れて日常に戻る事はできるのか…<br>探索重視、『気味が悪い』を目指したシナリオです。','vil.jpg','https://amata8.booth.pm/items/156061'];
eary1 = ['砂漠は生きている','とある砂漠の町「アッテラ」に観光に来た探索者たち。<br>しかし観光中の事故により、砂漠の廃村に孤立してしまう。<br>タイムリミットが迫る中、探索者たちは『砂の王国』から脱出できるのか……<br>謎解きほぼナシ、『派手で映画っぽい』を目指したシナリオです。','sahara.jpg','https://amata8.booth.pm/items/275654'];
eary2 = ['不可視の幸福','偶然が重なり、「三重内精神病院」に閉じ込められてしまった探索者たち。<br>そこには人智を越えた「何か」が潜んでいた。<br>「それ」が見えるという患者と共に、探索者たちは病院から脱出を目指す！<br>短めの一本、『正体不明の恐怖』を目指したシナリオです。','happy.jpg','https://amata8.booth.pm/items/387020'];
eary3 = ['スピュー・メール','探索者たちの友人はダイエットの為に嘔吐を繰り返していた。<br>家族から、友人に痩せる決心をさせた女性を探すよう頼まれる。<br>死の恐怖すら恐れず痩せようとする友人に一体何が起きているのか……<br>『間抜けな死闘』を目指したシナリオです。','spew.png','https://amata8.booth.pm/items/750085'];
eary4 = ['苺鬼','とある県警の組織犯罪対策課に所属する刑事である探索者たち。<br>被害者の頭蓋を砕き潰して殺す連続殺人、通称『苺鬼事件』<br>探索者たちは殺人鬼から街を守る事はできるのか……<br>『刑事ドラマ』を目指したシナリオです。','oga.jpg','https://amata8.booth.pm/items/1241411'];
endarray = [eary0,eary1,eary2,eary3,eary4];