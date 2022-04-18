(function () {
  [...document.querySelectorAll(".control")].forEach(button => {
      button.addEventListener("click", function() {
          document.querySelector(".active-btn").classList.remove("active-btn");
          this.classList.add("active-btn");
          document.querySelector(".active").classList.remove("active");
          document.getElementById(button.dataset.id).classList.add("active");
      })
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
  });
  document.querySelector('.control-5').addEventListener("click", () => setTimeout(liame, 2000))
  document.querySelector('.control-5').addEventListener("click", () => setTimeout(tcatnoc, 2000))
})();

function liame() {
  if (document.getElementById("liame").textContent == 'Wczytuję...') {
    let part1 = 'kamil.szydlowski.kr';
    let part2 = Math.pow(2, 6);
    let part3 = String.fromCharCode(part2);
    let part4 = "gmail.com"
    //let part5 = part1 + String.fromCharCode(part2) + part4;
    document.getElementById("liame").textContent = `${part1}${part3}${part4}`
  }
}

function tcatnoc() {
  if (document.getElementById("tcatnoc").textContent == 'Wczytuję...') {
    let part1 = Math.pow(27, 2);
    let part2 = Math.pow(22, 2) + 23;
    let part3 = Math.pow(12, 2) + 18;
    let part4 = Math.log2(4294967296);
    let part5 = 3*Math.pow(2,4);
    let part6 = String.fromCharCode(part5 - 5)
    let part7 = String.fromCharCode(part4);
    document.getElementById("tcatnoc").textContent = `${part6}${part5}${part7}${part2}${part7}${part1}${part7}${part3}`
  }
}





