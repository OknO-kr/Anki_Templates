"use strict";function appendixesHideAll(){for(var e=0;e<appendixes.length;e++)appendixes[e].classList.remove("active")}function buttonsColorDefault(){for(var e=0;e<overlay.length;e++)overlay[e].classList.remove("active");for(var t=0;t<mainCircle.length;t++)mainCircle[t].classList.remove("active");for(var o=0;o<p_AppButton.length;o++)p_AppButton[o].classList.remove("active")}function hideHeader(){header.classList.remove("active_1"),header.classList.remove("active_2"),unitTableDiv.classList.remove("active"),mainTable.classList.remove("active"),overlayTitleM.classList.remove("active"),overlayTitleL.classList.remove("active"),arrowLine.style.opacity="1",textP_Title.classList.remove("active")}function MenuElements(e,t,o,i,n,l){this.appendix=e,this.circle=t,this.beforeEl=o,this.targetM=i,this.targetL=n,this.targetP=l}function appendixesChangeName(e){if(e.matches){p_AppButton[0].textContent="1. List of irregular verbs",p_AppButton[1].textContent="2. Present and Past tenses",p_AppButton[2].textContent="3. The Future",p_AppButton[3].textContent="4. Modal verbs (can/could/will/would etc.)",p_AppButton[4].textContent="5. Short forms (I'm/you've/didn't etc.)",p_AppButton[5].textContent="6. Spelling",p_AppButton[6].textContent="7. American English";for(var t=0;t<headingTable.length;t++)headingTable[t].style.display="none"}else p_AppButton[0].textContent="1",p_AppButton[1].textContent="2",p_AppButton[2].textContent="3",p_AppButton[3].textContent="4",p_AppButton[4].textContent="5",p_AppButton[5].textContent="6",p_AppButton[6].textContent="7"}var question=document.querySelector(".question"),exampleAnswerHide=document.querySelector(".img_example"),el=question,questionAudio=document.getElementById("question-audio"),body=document.getElementById(body),buttons=document.getElementsByClassName("circle"),buttonsFirst=document.getElementsByClassName("circle"),mainCircle=document.getElementsByClassName("mainCircle"),overlay=document.getElementsByClassName("overlay"),p_AppButton=document.getElementsByClassName("p_app_button"),gridPad=document.getElementsByClassName("grid-pad"),appendixes=document.getElementsByClassName("appendixes"),headingTable=document.getElementsByClassName("heading"),buttonsClass=document.querySelector(".buttons"),buttonAllClose=document.querySelector(".header-close"),bodyCard=document.querySelector(".card"),overlayTitleM=document.querySelector("#overlay_title"),overlayTitleL=document.querySelector(".mainCircle_title"),header=document.querySelector(".header"),textP_Title=document.getElementById("p_button"),arrowLine=document.querySelector(".arrow_06B13_line"),circlePositionerTitle=document.querySelector(".circlePositioner_title"),hamburgerMain=document.querySelector(".hamburger--arrowalt-r");document.querySelector(".arrow_06B13_line_back")&&(arrowLine=document.querySelector(".arrow_06B13_line_back"),window.scrollTo(0,0)),document.querySelector(".circlePositioner_title_back")&&(circlePositionerTitle=document.querySelector(".circlePositioner_title_back")),document.querySelector(".hamburger--arrowalt")&&(hamburgerMain=document.querySelector(".hamburger--arrowalt"));var unitTableDiv=document.querySelector(".unit_table"),mainTable=document.querySelector(".main_table"),modalButton=document.querySelector(".myButt"),modalWrap=document.querySelector(".modal__wrap"),materialIcons=document.querySelector(".material-icons"),modalOverlay=document.querySelector(".modal__overlay"),buttonGambur=document.querySelector(".gamb-wrap");document.querySelector(".gamb-wrap-back")&&(buttonGambur=document.querySelector(".gamb-wrap-back"));var addWordsBox2=document.querySelector("div.add_words2"),unitNumber=document.querySelector(".th_1"),layerButton=document.querySelector(".layer"),highlight=document.querySelector("div.highlight"),hr=document.getElementsByTagName("hr"),hint=document.querySelectorAll(".hint");MenuElements.prototype.app=function(){function e(e){window.innerWidth<769&&buttonsClass.insertBefore(e,buttonsClass.firstChild)}function t(e,t){window.innerWidth<769&&buttonsClass.insertBefore(e,t)}function o(e){window.innerWidth<769&&buttonsClass.appendChild(e)}function i(){window.innerWidth<769&&(buttonsFirst[0].style.paddingBottom="0")}function n(){window.innerWidth<769&&(buttonsFirst[0].style.paddingBottom="2em")}function l(e){for(var t=0;t<appendixes.length;t++)appendixes[t].classList.remove("active"),e.classList.add("active")}function a(e,t,o){for(var i=0;i<overlay.length;i++)overlay[i].classList.remove("active"),e.classList.add("active");for(var n=0;n<mainCircle.length;n++)mainCircle[n].classList.remove("active"),t.classList.add("active");for(var l=0;l<p_AppButton.length;l++)p_AppButton[l].classList.remove("active"),o.classList.add("active")}if("appendixes active"===this.appendix.className)this.appendix.classList.toggle("active"),this.targetM.classList.toggle("active"),this.targetL.classList.toggle("active"),this.targetP.classList.toggle("active"),header.classList.remove("active_2"),buttonAllClose.classList.remove("active"),bodyCard.style.position=null,bodyCard.style["overflow-y"]="auto",arrowLine.style.opacity="1",i(),circlePositionerTitle.classList.remove("active"),t(this.circle,this.beforeEl),this.circle===buttons[6]&&o(this.circle);else{for(var s=this.appendix.scrollTop=0;s<gridPad.length;s++)gridPad[s].scrollTop=0;e(this.circle,this.beforeEl),header.classList.add("active_2"),bodyCard.style.position="fixed",bodyCard.scrollTop=0,bodyCard.style["overflow-y"]="hidden",unitTableDiv.classList.remove("active"),l(this.appendix),a(this.targetM,this.targetL,this.targetP),buttonAllClose.classList.add("active"),n(),circlePositionerTitle.classList.add("active"),arrowLine.style.opacity="0"}var r=this.circle,c=this.beforeEl;buttonAllClose.onclick=function(){i(),t(r,c),this.circle===buttons[6]&&o(this.circle),appendixesHideAll(),buttonsColorDefault(),hideHeader(),circlePositionerTitle.classList.remove("active"),bodyCard.style.position=null,buttonAllClose.classList.remove("active"),bodyCard.style["overflow-y"]="auto"}};var button_1=new MenuElements(appendixes[0],buttons[0],buttons[1],overlay[0],mainCircle[0],p_AppButton[0]),button_2=new MenuElements(appendixes[1],buttons[1],buttons[2],overlay[1],mainCircle[1],p_AppButton[1]),button_3=new MenuElements(appendixes[2],buttons[2],buttons[3],overlay[2],mainCircle[2],p_AppButton[2]),button_4=new MenuElements(appendixes[3],buttons[3],buttons[4],overlay[3],mainCircle[3],p_AppButton[3]),button_5=new MenuElements(appendixes[4],buttons[4],buttons[5],overlay[4],mainCircle[4],p_AppButton[4]),button_6=new MenuElements(appendixes[5],buttons[5],buttons[6],overlay[5],mainCircle[5],p_AppButton[5]),button_7=new MenuElements(appendixes[6],buttons[6],buttons[7],overlay[6],mainCircle[6],p_AppButton[6]),menuElements=[button_1,button_2,button_3,button_4,button_5,button_6,button_7];button_1.circle.onclick=function(){menuElements[0].app()},button_2.circle.onclick=function(){menuElements[1].app()},button_3.circle.onclick=function(){menuElements[2].app()},button_4.circle.onclick=function(){menuElements[3].app()},button_5.circle.onclick=function(){menuElements[4].app()},button_6.circle.onclick=function(){menuElements[5].app()},button_7.circle.onclick=function(){menuElements[6].app()},modalButton.onclick=function(){"header base active_1"===header.className&&hamburgerMain&&hamburgerMain.classList.toggle("is-active"),modalOverlay.style.display="block",modalOverlay.style.zIndex="800",setTimeout(function(){modalOverlay.classList.toggle("active"),hideHeader(),bodyCard.style.position="fixed",modalOverlay.scrollTop=0,modalWrap.scrollTop=0,modalWrap.scrollLeft=0},300),setTimeout(function(){materialIcons.classList.toggle("active")},550)},materialIcons.onclick=function(){modalOverlay.classList.toggle("active"),bodyCard.style.position=null,setTimeout(function(){modalOverlay.style.display=null,modalOverlay.style.zIndex=null},1e3),setTimeout(function(){materialIcons.classList.toggle("active")},100)};var hamburgers=document.querySelectorAll(".hamburger");0<hamburgers.length&&hamburgers.forEach(function(e){e.addEventListener("click",function(){this.classList.toggle("is-active")},!1),buttonAllClose.addEventListener("click",function(){e.classList.toggle("is-active")},!1),circlePositionerTitle.addEventListener("click",function(){e.classList.toggle("is-active")},!1)}),buttonGambur.onclick=function(){"500px"===header.style.maxHeight?(hideHeader(),bodyCard.style.position=null):(header.classList.toggle("active_1"),"header base active_1"===header.className?unitTableDiv.classList.toggle("active"):unitTableDiv.classList.remove("active"),mainTable.classList.toggle("active"),overlayTitleM.classList.toggle("active"),overlayTitleL.classList.toggle("active"),textP_Title.classList.toggle("active"),circlePositionerTitle.classList.remove("active"))};var box1None,box2None=!0;if(document.querySelector("div.add_words1")){var addWordsBox1=document.querySelector("div.add_words1");""===addWordsBox1.textContent&&(box1None=!1,addWordsBox1.style.display="none"),""===addWordsBox2.textContent&&(box2None=!1,addWordsBox2.style.display="none"),!0===box1None&&!0===box2None&&(addWordsBox1.style.width="47%",addWordsBox2.style.width="47%")}if(document.getElementById("question-audio")&&""===questionAudio.innerHTML&&(questionAudio.style.display="none"),""===modalWrap.innerHTML&&(modalButton.style.display="none",hr[0].style.marginTop="50px"),""===exampleAnswerHide.innerHTML&&(exampleAnswerHide.style.display="none"),""===highlight.innerHTML?highlight.style.display="none":modalButton.style.display="block",""===unitNumber.innerHTML&&(unitNumber.innerHTML="»»»» ♨"),""===layerButton.innerHTML&&(layerButton.innerHTML="YEAH"),0<hint.length){hint[0].innerHTML="Hint";for(var id=hint[1].getAttribute("id"),choices=hint[1].innerHTML,boxes=choices.split(" | "),list="",j=0;j<boxes.length;j++){var arr=boxes[j].split(";");0!==j&&(list+='<p class="choices-box-delimiter"></p>'),list+="<ul>";for(var i=0;i<arr.length;i++)list=list+"<li>"+arr[i]+"</li>";list+="</ul>"}document.getElementById(id).innerHTML=list,document.getElementById("choices").className="choices_words",document.querySelector("a.hint").style.display="none",document.querySelector("div.hint").style.display="block"}el&&(el.onclick=function(e){""!==e.target.textContent&&"Replay"!==e.target.textContent&&exampleAnswerHide.classList.toggle("active")});var audioInModalW=document.querySelector(".sound_front");if(audioInModalW.innerHTML=audioInModalW.innerHTML.replace(/\<\/div([^<]*)\>/gm,""),audioInModalW.innerHTML=audioInModalW.innerHTML.replace(/\<div([^<]*)\>/gm,"<br /><br />"),bodyCard.style.position=null,circlePositionerTitle.onclick=function(){"500px"===header.style.maxHeight?(buttonsColorDefault(),hideHeader(),textP_Title.textContent="A",bodyCard.style.position=null):(header.classList.toggle("active_1"),"header base active_1"===header.className?unitTableDiv.classList.toggle("active"):unitTableDiv.classList.remove("active"),mainTable.classList.toggle("active"),overlayTitleM.classList.toggle("active"),overlayTitleL.classList.toggle("active"),textP_Title.classList.toggle("active"),buttonAllClose.classList.remove("active"))},matchMedia){var mqiPad=window.matchMedia("(max-width: 768px)");mqiPad.addListener(appendixesChangeName),appendixesChangeName(mqiPad)}$(window).bind("keydown",function(e){var t;switch(e.keyCode?e.keyCode:e.which){case 38:"block"===modalOverlay.style.display?(modalOverlay.classList.toggle("active"),bodyCard.style.position=null,setTimeout(function(){modalOverlay.style.display=null,modalOverlay.style.zIndex=null},1e3),setTimeout(function(){materialIcons.classList.toggle("active")},100)):modalButton.onclick();break;case 39:exampleAnswerHide.classList.toggle("active");break;case 40:e.preventDefault(),circlePositionerTitle.onclick();break}if(e.ctrlKey||e.metaKey)switch(String.fromCharCode(e.which).toLowerCase()){case"1":e.preventDefault(),button_1.circle.onclick();break;case"2":e.preventDefault(),button_2.circle.onclick();break;case"3":e.preventDefault(),button_3.circle.onclick();break;case"4":e.preventDefault(),button_4.circle.onclick();break;case"5":e.preventDefault(),button_5.circle.onclick();break;case"6":e.preventDefault(),button_6.circle.onclick();break;case"7":e.preventDefault(),button_7.circle.onclick();break}});