
<script>
  import Button from "../Button/button.svelte";


  let headingLine1 = "A Premium";
  let headingLine2 = "and Authentic";
  let headingLine3 = "Steak House";
</script>

<div class="flex flex-col container justify-start mx-auto pl-40 items-start h-screen text-left pt-60">
  <h1 class="text-8xl font-extrabold leading-medium text-fontColor">
    <span>{headingLine1}</span><br>
    <span>{headingLine2}</span><br>
    <span>{headingLine3}</span>
  </h1>

  <Button size="lg" className="mt-10">
    Make Reservation
  </Button>


</div>
