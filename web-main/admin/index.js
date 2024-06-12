
const eId = document.getElementById("eId");
const eTitle = document.getElementById("eTitle");
const eClass = document.getElementById("eClass");
const ePrice = document.getElementById("ePrice");
const eOldPrice = document.getElementById("eOldPrice");
const eImg1 = document.getElementById("eImg1");
const eImg2 = document.getElementById("eImg2");
const eDate = document.getElementById("eDate");

const edit = document.getElementById("edit");

const eLinks = document.querySelectorAll(".eLink");


let openedId = -1;

const tds = document.querySelectorAll("#myTable td");
for(let i = 0; i < eLinks.length; i++){
	eLinks[i].addEventListener('click', ()=>{
		if(openedId == -1){
			eId.value = tds[i*10].innerHTML;
			eTitle.value = tds[i*10+1].innerHTML;
			eClass.value = tds[i*10+2].innerHTML;
			ePrice.value = tds[i*10+3].innerHTML;
			eOldPrice.value = tds[i*10+4].innerHTML;
			eImg1.value = tds[i*10+5].innerHTML;
			eImg2.value = tds[i*10+6].innerHTML;
			eDate.value = tds[i*10+7].innerHTML;
			openedId = i;
			edit.style.display = 'flex';
		}
		else if(i == openedId ){
			openedId = -1;
			edit.style.display = 'none';
		}else{
			eId.value = tds[i*10].innerHTML;
			eTitle.value = tds[i*10+1].innerHTML;
			eClass.value = tds[i*10+2].innerHTML;
			ePrice.value = tds[i*10+3].innerHTML;
			eOldPrice.value = tds[i*10+4].innerHTML;
			eImg1.value = tds[i*10+5].innerHTML;
			eImg2.value = tds[i*10+6].innerHTML;
			eDate.value = tds[i*10+7].innerHTML;
			openedId = i;
			edit.style.display = 'flex';
		}
	});
}