const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

let chaptersArray = getChapterList() || [];
chaptersArray.array.forEach(chapter => {
    displayList (chapter);
});

button.addEventListener('click', () => {
	if (input.value !=''){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
		
	});
    function displayList(item) {
        let li = document.createElementNS('li');
        let deleteButton = document.createElement('button');
		li.textContent = item;
		deleteButton.textContent = 'X';
        deleteButton.classList.add('delete');
		li.append(deleteButton);
		list.append(li);
        
		deleteButton.addEventListener('click', function (){
			list.removeChild(li);
            deleteChapter(li.textContent);
			input.focus();
		});
		
        
    }
    function setChapterList(){
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    }
    function getChapterList(){
        return JSON.parse(localStorage.getItem('myFavBOMList'));
    }
	
    function deleteChapter(chapter) {
        chapter = chapte.slice(0, chapter.length -1);
        chaptersArray = chaptersArray.filter((item) => item !== chapter);
        setChapterList();
    }
    


   /*const li = document.createElement('li');
		const deleteButton = document.createElement('button');
		li.textContent = input.value;
		deleteButton.textContent = 'X';
		li.append(deleteButton);
		list.append(li);
		deleteButton.addEventListener('click', function (){
			list.removeChild(li);
			input.focus();
		});
		input.focus();
		input.value = '';
		}*/