$(document).ready(function () {
  var $form = $('form')


  $form.on('submit', function(e) {
    e.preventDefault()
    console.log($(this).serializeArray())

    var data = $(this).serializeArray()

    var inputArr = data.map(function(input){
      return input.value
    }
  )
 $('h1').text(inputArr.join(', '))
    alert('form is submitted')
  })

})
