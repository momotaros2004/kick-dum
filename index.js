// เพิ่ม Event Listener ให้กับปุ่มบนหน้าเว็บ
document.querySelectorAll(".drum").forEach((button) => {
    button.addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      playSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });
  });
  
  // เพิ่ม Event Listener สำหรับการกดคีย์บอร์ด
  document.addEventListener("keydown", function (event) {
    var keyPressed = event.key.toLowerCase(); // ทำให้ key เป็นตัวพิมพ์เล็กเสมอ
    playSound(keyPressed);
    buttonAnimation(keyPressed);
  });
  
  // ฟังก์ชันสำหรับเล่นเสียง
  function playSound(key) {
    var audio;
  
    switch (key) {
      case "w":
        audio = new Audio('sounds/tom-1.mp3');
        break;
      case "a":
        audio = new Audio('sounds/tom-2.mp3');
        break;
      case "s":
        audio = new Audio('sounds/tom-3.mp3');
        break;
      case "d":
        audio = new Audio('sounds/tom-4.mp3');
        break;
      case "j":
        audio = new Audio('sounds/crash.mp3');
        break;
      case "k":
        audio = new Audio('sounds/kick-bass.mp3');
        break;
      case "l":
        audio = new Audio('sounds/snare.mp3');
        break;
      default:
        return; // ไม่ทำอะไรถ้าปุ่มไม่ตรง
    }
  
    audio.play(); // เล่นเสียง
  }
  
  // ฟังก์ชันสำหรับเพิ่มเอฟเฟกต์เมื่อกดปุ่ม
  function buttonAnimation(key) {
    var activeButton = document.querySelector(`.${key}`);
    if (activeButton) {
      activeButton.classList.add("pressed"); // เพิ่มคลาส "pressed"
      setTimeout(() => {
        activeButton.classList.remove("pressed"); // ลบคลาส "pressed" หลังจาก 100ms
      }, 100);
    }
  }
  