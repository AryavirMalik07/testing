$(document).ready(function (direction) {
  $(".img-2").waypoint(
    function (direction) {
      $(".img-2").addClass("animated zoomIn");
    },
    {
      offset: "640px",
    }
  );
  $(".experience-content").waypoint(
    function (direction) {
      $(".experience-content").addClass("animated zoomIn");
    },
    {
      offset: "640px",
    }
  );
  $(".section-experience").waypoint(
    function (direction) {
      $(".section-experience").addClass("animated fadeIn");
    },
    {
      offset: "600px",
    }
  );
  $(".box-one").waypoint(
    function (direction) {
      $(".box-one").addClass("animated fadeInLeft");
    },
    {
      offset: "720px",
    }
  );
  $(".box-two").waypoint(
    function (direction) {
      $(".box-two").addClass("animated fadeInUp");
    },
    {
      offset: "720px",
    }
  );
  $(".box-three").waypoint(
    function (direction) {
      $(".box-three").addClass("animated fadeInRight");
    },
    {
      offset: "720px",
    }
  );
});
