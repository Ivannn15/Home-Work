var field // переменная для хранения количества товара

function countFunc(count) { 
    var btnPlus = count.querySelector('.stepperBtnPlus');
    var btnMinus = count.querySelector('.stepperBtnMinus');
    field = count.querySelector('.stepperInput');
    var fieldValue = parseFloat(field.value, 10);
  
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

  $(document).on('click', '.b1', function () { // обработка клика кнопки "КУПИТЬ" с помощью jquery
    toastr.success("В корзинку добавлено товаров: " + field.value);
  })