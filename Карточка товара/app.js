
function countFunc(count) { 
    let btnPlus = count.querySelector('.stepperBtnPlus');
    let btnMinus = count.querySelector('.stepperBtnMinus');
    let field = count.querySelector('.stepperInput');
    let fieldValue = parseFloat(field.value, 10);
  
    btnMinus.addEventListener('click', function() { //обработка клика минус
      if (fieldValue > 1) {
        fieldValue--;
        field.value = fieldValue;
      } else {
        return 1;
      }
    });
    
    btnPlus.addEventListener('click', function() { //обработка клика плюс
      fieldValue++;
      field.value = fieldValue;
    });
  
  }
  var counts = document.querySelectorAll('.stepperControls');
  counts.forEach(countFunc);

  $('.b1').on('click', function() {
    toastr.success("В корзинку добавлено товаров: " + $('.stepperInput').val());
  });

  //$(document).on('click', '.b1', function () { // обработка клика кнопки "КУПИТЬ" с помощью jquery
    //toastr.success("В корзинку добавлено товаров: " + field.value);
  //})

 $(".img2").hover(
   function() {
      $('.imgCenter').attr('src', 'ME024EWGHL35_6_v1.webp');
   },
);

$(".img1").hover(
  function() {
     $('.imgCenter').attr('src', 'ME024EWGHL35_1_v2.webp');
  },
);

$(".img3").hover(
  function() {
     $('.imgCenter').attr('src', 'ME024EWGHL35_7_v1.webp');
  },
);