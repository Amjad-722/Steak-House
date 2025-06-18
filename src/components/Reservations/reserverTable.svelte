<script>
  import Button from "../Button/button.svelte";

  let sections = [
    {
      headingLine: "Our Delicious Story ",
      headingLine1: "Welcome ",
      headingLine2: "to Steak by ",
      headingLine3: " the Bay",
      para: "Our journey started in 1985 when James, a steak lover, explored various recipes from across the world and brought them together in our menu. Ever since we are now a team of 10 expert chefs from 3 top cities in India serving you the best steaks, desserts and mocktails in town.",
      image:
        "https://websitedemos.net/steak-house-02/wp-content/uploads/sites/841/2021/05/about.jpg",
      buttonText: "Book A Table",
      imageDesc: "Beef Steak with Grilled Veggies",
    },
    {
      headingLine: "Our New Offerings ",
      headingLine1: "Special ",
      headingLine2: "Menu by ",
      headingLine3: " the Bay",
      para: "Try our new collection of dishes inspired by seasonal ingredients. Fresh and flavorful, perfect for those looking for a culinary adventure.",
      image:
        "https://websitedemos.net/steak-house-02/wp-content/uploads/sites/841/2021/05/food-1.jpg",
      buttonText: "See Our Menu",
      imageDesc: "Succulent Lamb Chops with Signature Sauce",
    },
    {
      headingLine: "Our Expert Team ",
      headingLine1: "Meet the ",
      headingLine2: "Chefs of ",
      headingLine3: " the Bay",
      para: "Our team of culinary experts comes from various regions, bringing unique flavors and techniques. Get to know the people behind the delicious meals.",
      image:
      "https://websitedemos.net/steak-house-02/wp-content/uploads/sites/841/2021/05/food-1.jpg",
      buttonText: "Meet the Team",
      imageDesc: "Chef's Special Grilled Chicken",
    },
  ];
</script>

<section id="services" class="bg-bgColor px-4 sm:px-6 lg:px-8">
  {#each sections as section, index}
    <div
      class="container flex flex-col lg:flex-row lg:gap-24 mx-auto justify-center items-center pt-20"
    >
      <div class="flex flex-col justify-center items-center lg:items-end lg:w-1/2 px-4 lg:px-0">
        <h1 class="text-3xl md:text-5xl font-extrabold leading-snug text-center lg:text-right text-fontColor">
          {section.headingLine1}
          <span><br />{section.headingLine2}</span>
          <span><br />{section.headingLine3}</span>
        </h1>
        <img
          class="mt-8 lg:mt-16 w-full max-w-md lg:max-w-lg h-auto border-4 border-fontColor"
          src={section.image}
          alt={section.headingLine3}
        />
        <p class="mt-4 text-center text-fontColor text-base lg:text-2xl font-medium italic">
          {section.imageDesc}
        </p>
      </div>
      <div class="flex flex-col justify-start items-center lg:items-start lg:w-1/2 px-4 lg:px-0 mt-12 lg:mt-0">
        <h1 class="text-3xl md:text-5xl font-extrabold leading-snug text-center lg:text-left text-fontColor">
          {section.headingLine1}
          <span><br />{section.headingLine2}</span>
          <span><br />{section.headingLine3}</span>
        </h1>
        <p class="mt-4 text-base lg:text-lg text-center lg:text-left text-fontColor">
          {section.para}
        </p>
        <Button size="md" className="mt-10">
          {section.buttonText}
        </Button>
      </div>
    </div>

    {#if index === 0}
      <h2 class="text-3xl md:text-5xl font-extrabold text-fontColor text-center mt-16 lg:mt-24">
        Our Featured Delicacies
      </h2>
    {/if}
  {/each}
    </section>

<style>
  main {
    transition: all 0.3s ease-in-out;
  }

  .max-w-md {
    max-width: 28rem;
  }

  .lg\:gap-24 {
    gap: 6rem;
  }
</style>
