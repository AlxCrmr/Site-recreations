/* ===== CASES ==== */
var case_index = 1;

showCases(case_index);

function plusDivs(add) {
  showCases(case_index += add);
}

function minusDivs(subtract) {
  showCases(case_index -= subtract);
}

function showCases(n) {
  var posts = document.getElementsByClassName("cases-container");
  if (n > posts.length) {
      case_index = 1
  }
  if (n < 1) {
      case_index = posts.length
  }

  for (var i = 0; i < posts.length; i++) {
     posts[i].style.display = "none";
     posts[i].classList.remove("fade");
      }
      posts[case_index-1].style.display = "block";
      posts[case_index-1].classList.add("fade");
    }

document.getElementById("case-next").addEventListener("click", function () {
    plusDivs(1)
});

document.getElementById("case-prev").addEventListener("click", function () {
    minusDivs(1)
});



/* ===== TESTIMONIALS ==== */

var testimonialIndex = 1;

showTestimonials(testimonialIndex);

function plusTestimonials(add) {
  showTestimonials(testimonialIndex += add);
}

function minusTestimonials(subtract) {
  showTestimonials(testimonialIndex -= subtract);
}

function showTestimonials(n) {
  var posts = document.getElementsByClassName("testimonial-container");
  var imgs = document.getElementsByClassName("img-container");
  if (n > posts.length) {
      testimonialIndex = 1
  }
  if (n < 1) {
      testimonialIndex = posts.length
  }

  for (var i = 0; i < posts.length; i++) {
     posts[i].style.display = "none";
     imgs[i].style.display = "none";
  }
  posts[testimonialIndex-1].style.display = "block";
  imgs[testimonialIndex-1].style.display = "block";
}

document.getElementById("next-testimonials").addEventListener("click", function () {
    plusTestimonials(1)
});

document.getElementById("prev-testimonials").addEventListener("click", function () {
    minusTestimonials(1)
});
