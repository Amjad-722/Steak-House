<!-- Testimonial.svelte -->
<script>
  export let para = "Testimonial";
  export let heading = "What Our Clients Say";
  export let testimonials = [
    {
      name: "Abhishek",
      image: "https://images.unsplash.com/photo-1464863979621-258859e62245?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmwlMjBiZWF1dGlmdWx8ZW58MHx8MHx8fDA%3D",
      text: "Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "John Doe",
      image: "https://img.freepik.com/premium-photo/girl-with-long-brown-hair-blue-eyes_854727-137935.jpg",
      text: "Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Smith",
      image: "https://img.freepik.com/premium-photo/girl-with-long-brown-hair-blue-eyes_854727-137935.jpg",
      text: "Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Chris Evans",
      image: "https://img.freepik.com/premium-photo/girl-with-long-brown-hair-blue-eyes_854727-137935.jpg",
      text: "Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
</script>

<section id="testimonial" class="bg-cover bg-center bg-no-repeat relative bg-opacity-70" style="background-image: url('https://img.freepik.com/premium-photo/exquisite-gourmet-beef-steak-dark-plate-fine-dining-classy-restaurant-elegant-food-presentation-plating-perfect-culinary-enthusiasts-ai_372197-30733.jpg');">
  <div class="bg-bgColor bg-opacity-70 p-12">
    <div class="text-center py-12">
      <p class="font-medium text-fontColor text-3xl">{para}</p>
      <h1 class="font-extrabold text-4xl md:text-6xl text-fontColor">{heading}</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-12 z-10 max-w-7xl mx-auto">
      {#each testimonials as testimonial}
        <div class="border-2 border-gray-300 hover:border-fontColor text-white transition-transform hover:scale-105 duration-300 p-6 rounded-md shadow-md bg-bgColor bg-opacity-80">
          <p>{testimonial.text}</p>
          <div class="flex flex-row items-center mt-4">
            <img class="w-12 h-12 rounded-full" src={testimonial.image} alt="Client Image" />
            <p class="font-medium text-xl md:text-2xl ml-4">{testimonial.name}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    transition: all 0.3s ease-in-out;
  }

  img {
    border-radius: 0.75rem;
  }
</style>
