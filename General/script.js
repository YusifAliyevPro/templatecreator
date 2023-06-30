const shareButton = document.querySelector(".shareButton");
const clearForm = document.querySelector(".clearform");

shareButton.addEventListener("click", () => {
    const fullName = document.getElementById("FullName").value;
    const birthDate = document.getElementById("birthdate").value;
    const competetions = document.getElementById("Competetions").value;
    const datecomp = document.getElementById("datecomp").value;
    const motiv = document.getElementById("motiv").value;
    shareableFullName = fullName
    shareablebirthDate = birthDate
    shareablecompetetions = competetions
    shareabledatecomp =  datecomp
    shareablemotiv = motiv

  if (fullName === "" || birthDate === "" || competetions === "" || datecomp === "" || motiv === "") {
    const sharingPanel = document.querySelector(".sharing");
    const clearForm = document.querySelector(".clearform");
    
    sharingPanel.style.display = "none";
    clearForm.style.display = "none";
    var failedMessage = document.getElementById("failed-message");
    failedMessage.style.display = "flex";
    setTimeout(function() {
        failedMessage.style.display = "none";
    }, 2000);
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(150); // 200 milisaniye boyunca titreşim yap
    }
    
  } else if (fullName !== "" || birthDate !== "" || competetions !== "" || datecomp !== "" || motiv !== "") {
    const sharingPanel = document.querySelector(".sharing");
    const clearForm = document.querySelector(".clearform");
    sharingPanel.style.display = "flex";
    clearForm.style.display = "flex";
  }

});


clearForm.addEventListener("click", () => {
    const sharingPanel = document.querySelector(".sharing");
    const Inputs = document.querySelectorAll('.inputs');
    Inputs.forEach(input => {
      input.value = '';
    });
    sharingPanel.style.display = "none";
    clearForm.style.display = "none";
})


// Whatsapp share
var whatsappSharingElement = document.getElementById("whatsapp-sharing");
whatsappSharingElement.addEventListener("click", paylas);

function paylas() {
  var maintext = "*Adı və Soyadı:* " + shareableFullName +
                     "\n\n*Təvəllüd:* " + shareablebirthDate +
                     "\n\n*İştirak etdiyiniz yarışlar və layihələr:* " + shareablecompetetions + 
                     "\n\n*Neçə ildir ki, intellektual yarışlarda iştirak edirsiz?:* " + shareabledatecomp +
                     "\n\n*Kluba qatılmaqda əsas motivasiyanız nədir?:* " + shareablemotiv;

  var paylasMetni = maintext;

  if (window.innerWidth < window.innerHeight) {
    // Mobil cihazlar için link açılacak
    var paylasURL = "whatsapp://send?text=" + encodeURIComponent(paylasMetni);
    window.location.href = paylasURL;
  } else {
    // Masaüstü için link açılacak
    var whatsappWebURL = "https://web.whatsapp.com/send?text=" + encodeURIComponent(paylasMetni);
    window.open(whatsappWebURL);
  }
}
// Whatsapp share end

//Copy-Text
var copySharingElement = document.getElementById("copy-sharing");
copySharingElement.addEventListener("click", copytext);

function copytext() {  
  var maintext = "*Adı və Soyadı:* " + shareableFullName +
                     "\n\n*Təvəllüd:* " + shareablebirthDate +
                     "\n\n*İştirak etdiyiniz yarışlar və layihələr:* " + shareablecompetetions + 
                     "\n\n*Neçə ildir ki, intellektual yarışlarda iştirak edirsiz?:* " + shareabledatecomp +
                     "\n\n*Kluba qatılmaqda əsas motivasiyanız nədir?:* " + shareablemotiv;

  var paylasMetni = maintext;

  var textarea = document.createElement("textarea");
  textarea.value = paylasMetni;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  var successMessage = document.getElementById("success-message");
  successMessage.style.display = "flex";
  setTimeout(function() {
      successMessage.style.display = "none";
  }, 2000);

  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
  if (navigator.vibrate) {
      navigator.vibrate(150); // 200 milisaniye boyunca titreşim yap
  }
}
//Copy share end
