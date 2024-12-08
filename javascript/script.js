// const slider = document.querySelector('.slider');
// const images = document.querySelectorAll('.slider img');
// const imageWidth = images[0].offsetWidth + 28; 
// let currentIndex = 0;

// function slideImages() {
//   const offset = -(currentIndex * imageWidth);
//   slider.style.transform = `translateX(${offset}px)`;

//   currentIndex = (currentIndex + 1) % images.length;
// }

// setInterval(slideImages, 3000);

// console.log('File JavaScript berhasil terhubung');
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.in');
    const imageWidth = images[0].offsetWidth + 28; // Lebar gambar + gap
    let currentIndex = 0; // Mulai dari gambar pertama
    let direction = 1; // 1 untuk ke kanan, -1 untuk ke kiri
  
    // Geser gambar
    function slideImages() {
      // Update indeks berdasarkan arah
      currentIndex += direction;
  
      // Pindahkan slider
      slider.style.transition = 'transform 0.5s ease-in-out';
      slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  
      // Ubah arah jika mencapai akhir atau awal
      if (currentIndex === images.length - 1) {
        direction = -1; // Berbalik ke kiri
      } else if (currentIndex === 0) {
        direction = 1; // Berbalik ke kanan
      }
    }
  
    // Jalankan slider setiap 3 detik
    setInterval(slideImages, 3000);
  });

  document.getElementById("menu").addEventListener("click", function(){
    document.getElementById("responsive-menu").classList.remove("-left-full");
    document.getElementById("responsive-menu").classList.add("left-0");
  });

  document.getElementById("close-navbar").addEventListener("click", function(){
    document.getElementById("responsive-menu").classList.remove("left-0");
    document.getElementById("responsive-menu").classList.add("-left-full");
  });

  
  
