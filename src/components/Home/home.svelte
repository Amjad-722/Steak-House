<script>
  import Button from "../Button/button.svelte";
  let headingLine1 = "A Premium";
  let headingLine2 = "and Authentic";
  let headingLine3 = "Steak House";
</script>

<div class="flex flex-col container mx-auto pl-5 sm:pl-10 md:pl-20 lg:pl-40 items-start h-screen text-left pt-16 sm:pt-40 md:pt-60 justify-center">
  <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-snug sm:leading-snug md:leading-medium lg:leading-medium text-fontColor">
    <span>{headingLine1}</span><br>
    <span>{headingLine2}</span><br>
    <span>{headingLine3}</span>
  </h1>

  <Button size="lg" class="mt-8 sm:mt-8 md:mt-10">
    Make Reservation
  </Button>
</div>
