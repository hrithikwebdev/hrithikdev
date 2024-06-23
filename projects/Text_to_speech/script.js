const speech = new SpeechSynthesisUtterance();
const speechText = document.getElementById("speech-text");
const listenBtn = document.getElementById("listen-btn");
const selectVoice = document.querySelector("select");

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (selectVoice.options[i] = new Option(voice.name, i))
  );
};

selectVoice.addEventListener("change", () => {
  speech.voice = voices[selectVoice.value];
});

const listenSpeech = () => {
  if (speechText.value.length > 0) {
    speech.text = speechText.value;
    window.speechSynthesis.speak(speech);
  } else {
    speechText.classList.add("error");
    speechText.style.border = "1px solid red";
    setTimeout(() => {
      speechText.classList.remove('error');
    },1000);
  }
}