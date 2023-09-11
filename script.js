const inputFile = document.querySelector('#picture__input')
const pictureImage = document.querySelector('.picture__image')
const pictureImageTxt = 'Chosse an image ...';

pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener('change',(e)=>{
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if(file){
      const reader = new FileReader();

      reader.addEventListener('load',(e)=>{
        const readerTarget = e.target;

        const img = document.createElement('img');
        img.src =readerTarget.result;
        img.classList.add('picture__image');
        pictureImage.innerHTML='';
        pictureImage.appendChild(img)
      });
      reader.readAsDataURL(file)
  }else{

  }
})