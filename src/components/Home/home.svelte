<script>
  import Button from "../Button/button.svelte";

let heading="A Premium and Authentic Steak House" 
</script>

<div class="flex flex-col container justify-start  mx-auto pl-40 items-center h-screen text-center pt-60"
>
<h1 class="text-8xl font-extrabold text-fontColor"> {heading}</h1>  

  <Button size="lg"   className="mt-6">
    Make Reservation  </Button>
</div>
