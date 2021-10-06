
  $(".mainSubmitButton button").on("click", function(){
      var data = signaturePad.toDataURL('image/png');
      $(".mainInput input").attr("value", data);
  });

  var signaturePad = new SignaturePad(document.getElementById('signature-pad'), {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    penColor: 'rgb(0, 0, 0)'
  });
  var showInConsole = document.getElementById('showConsole');
  var cancelButton = document.getElementById('clear');
  var saveToCompCurrent = document.getElementById('saveToCompCurrent');
  var saveToCompFromCF = document.getElementById('saveToCompFromCF');
  var showCF = document.getElementById('showCF');
  var showCF_div = document.querySelector('.showCF_div');
  
  saveToCompCurrent.addEventListener('click', function () {
    var data = signaturePad.toDataURL('image/png');
    var download = document.createElement('a');
    download.href = data;
    download.download = 'signature-Test-current.png';
    download.click();
    console.log("save current pic");
  });

  saveToCompFromCF.addEventListener('click', function () {
    var download = document.createElement('a');
    download.href = "[TEST_SIGNATURE]";
    download.download = 'signature-Test-CF.png';
    download.click();  
    console.log("save pic from CF");
  });
  
  showCF.addEventListener('click', function () {
    //   Representation of signature to web page
    //   EXAMPLE: <img src="[TEST_SIGNATURE]" />
    let img = document.createElement("img");
    img.classList.add("imgCF");
    img.setAttribute("src", "[TEST_SIGNATURE]");
    document.querySelector(".showCF_div").append(img);
    showCF_div.style.backgroundColor = 'white';
  });
  

  showInConsole.addEventListener('click', function () {
    var data = signaturePad.toDataURL('image/png');
    console.log(data);
    
    // Saving actual picture of image to local mashine!!!
    // var download = document.createElement('a');
    // download.href = data;
    // download.download = 'signature-Test.png';
    // download.click();  
  
    // Saving data to CF
    $(".mainInput input").attr("value", data);
  });
  
  cancelButton.addEventListener('click', function () {
    signaturePad.clear();
  });