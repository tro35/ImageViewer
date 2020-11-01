let data = {
    photo: 'images/100_0448.jpg',
    title: 'Sea view',
    description: 'Crete south coast'
  };
let data1 = {
    photo: 'images/100_0474.jpg',
    title: 'Infinity pool',
    description: 'View from pool at Kakkos Bay'
  };  

let data2 = {
    photo: 'images/100_0541.jpg',
    title: 'Minoan palace',
    description: 'Trip to Minoan palace 1500 B.C., Crete'
  };  

  
let currentPhoto = 0;
let imagesData = [data, data1, data2];
/*$('#picture').attr('src', imagesData[currentPhoto].photo);*/

let loadPhoto = (photoNumber) => {
    $('#picture').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
  }


loadPhoto(currentPhoto);

$('#buttonr').click(() => {
  if(currentPhoto < imagesData.length-1){
    currentPhoto++;}
  loadPhoto(currentPhoto);
})

$('#buttonl').click(() => {
    if(currentPhoto >= 1){
    currentPhoto--;}
    loadPhoto(currentPhoto);
  })