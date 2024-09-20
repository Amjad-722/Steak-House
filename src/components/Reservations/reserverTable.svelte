<script>
    import Button from "../Button/button.svelte";
  
    let headingLine = "Our Delicious Story ";
    let headingLine1 = "Welcome ";
    let headingLine2 = "to Steak by ";
    let headingLine3 = " the Bay";
    let para = "Our journey started in 1985 when James, a steak lover, explored various recipes from across the world and brought them together in our menu. Ever since we are now a team of 10 expert chefs from 3 top cities in India serving you the best steaks, desserts and mocktails in town.";
  </script>
  
  <main class="bg-bgColor">
    <div class="container flex flex-row gap-48 mx-auto px-10 justify-center items-center pt-20">
      <div class="flex flex-col justify-end items-end">
        <h1 class="text-5xl font-extrabold leading-snug sm:leading-snug md:leading-medium lg:leading-medium text-fontColor">
          {headingLine1}
          <span><br>{headingLine2}</span>
          <span><br>{headingLine3}</span>
        </h1>
        <img class="mt-16 w-96 border-4 border-fontColor" src="https://websitedemos.net/steak-house-02/wp-content/uploads/sites/841/2021/05/about.jpg" alt="Steak by the Bay">
      </div>
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-6xl font-bold leading-snug sm:leading-snug md:leading-medium lg:leading-medium text-fontColor">
          {headingLine}
        </h1>
        <!-- Adding max-width to the paragraph to control its horizontal expansion -->
        <p class="text-md flex justify-start text-start items-start font-normal leading-snug sm:leading-snug md:leading-medium lg:leading-medium text-white max-w-md ">
          {para}
        </p>
        <Button size="lg" className="mt-52">Book A Table</Button>
      </div>
    </div>
  </main>
  
  <style>
    .max-w-md {
      max-width: 28rem; /* Sets a max width of 28rem (~448px) for the paragraph */
    }
  </style>
  