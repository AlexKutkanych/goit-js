jQuery(document).ready(function(){

jQuery(".niceCheck").mousedown(
/* при клике на чекбоксе меняем его вид и значение */
function() {

     changeCheck(jQuery(this));

});

$(".niceCheck").each(
/* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
function() {

     changeCheckStart(jQuery(this));
   });
});

function changeCheck(el)
/*
	функция смены вида и значения чекбокса
	el - span контейнер дял обычного чекбокса
	input - чекбокс
*/
{
     input = el.find(".jquery-input").eq(0);
   	 if(!input.attr("checked")) {
		el.css("background-position","0 -17px");
		input.attr("checked", true);
	} else {
		el.css("background-position","0 0");
		input.attr("checked", false);
	}
     return true;
}

function changeCheckStart(el)
/*
	если установлен атрибут checked, меняем вид чекбокса
*/
{
		input = el.find("input").eq(0);
      if(input.attr("checked")) {
		el.css("background-position","0 -17px");
		}
     return true;
}

jQuery(document).ready(function(){
var params = {
		changedEl: ".lineForm select",
		visRows: 5,
		scrollArrows: true
	};
	cuSel(params);
});