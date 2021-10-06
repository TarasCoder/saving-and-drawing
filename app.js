
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
  var saveToCompFromLS = document.getElementById('saveToCompFromLS');
  var saveToLocalStorage = document.getElementById('saveToLocalStorage');
  
  var showLS = document.getElementById('showLS');
  var showLS_div = document.querySelector('.showLS_div');
  
  saveToCompCurrent.addEventListener('click', function () {
    var data = signaturePad.toDataURL('image/png');
    var download = document.createElement('a');
    download.href = data;
    download.download = 'signature-Test-current.png';
    download.click();
    console.log("save current pic");
  });

  saveToCompFromLS.addEventListener('click', function () {
    let lsItem = localStorage.getItem("imageBase64code");
    if(lsItem){
        var download = document.createElement('a');
        download.href = lsItem;
        download.download = 'signature-Test-CF.png';
        download.click();  
        console.log("save pic from CF");
    } else {
        alert("Local storage is empty. Please create first of all record there!");
    }
  });
  
  showLS.addEventListener('click', function () {
    let lsItem = localStorage.getItem("imageBase64code");
    if(lsItem){
    let img = document.createElement("img");
    img.classList.add("imgCF");
    img.setAttribute("src", lsItem);
    document.querySelector(".showLS_div").append(img);
    showLS_div.style.backgroundColor = 'white';
    } else {
        alert("Local storage is empty. Please create first of all record there!");
    }
  });

  showInConsole.addEventListener('click', function () {
    var data = signaturePad.toDataURL('image/png');
    console.log(data);
  });

  saveToLocalStorage.addEventListener('click', function () {
    var data = signaturePad.toDataURL('image/png');
    localStorage.setItem("imageBase64code", data);
    alert("Data succesfully saved to Local Storage. You can retrieve it by pressing on specific button.")
    location.reload();
  });
  
  cancelButton.addEventListener('click', function () {
    signaturePad.clear();
  });