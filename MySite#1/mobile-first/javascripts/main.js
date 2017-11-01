document.addEventListener("DOMContentLoaded", function(event) {

  var common_case_text = document.querySelectorAll(".common-case-text");

  var caseIndex = 1;
  showDivs(caseIndex);

  function plusDivs(add) {
    showDivs(caseIndex += add);
  }

  function showDivs(n) {
    var casePosts = document.getElementsByClassName("common_case_text");
    if (n > casePosts.length) {
        caseIndex = 1
    }
    if (n < 1) {
        caseIndex = casePosts.length
    }
    for (var i = 0; i < casePosts.length; i++) {
       casePosts[i].style.display = "none";
       casePosts[i].classList.remove("casePostsFade");
    }
      casePosts[caseIndex-1].style.display = "block";
      casePosts[caseIndex-1].classList.add("casePostsFade");
  }

  document.getElementById("case-left").addEventListener("click", function () {
      plusDivs(1)

  });

});
