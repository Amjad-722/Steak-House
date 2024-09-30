<script>
  let para = "Testimonial";
  let heading = "What Our Clients Say";
  let lorem =
    "Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.";

  let testimonials = [
    {
      name: "Abhishek",
      image: "https://images.unsplash.com/photo-1464863979621-258859e62245?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmwlMjBiZWF1dGlmdWx8ZW58MHx8MHx8fDA%3D",
      text: lorem,
    },
    {
      name: "John Doe",
      image: "https://img.freepik.com/premium-photo/girl-with-long-brown-hair-blue-eyes_854727-137935.jpg",
      text: lorem,
    },
    {
      name: "Jane Smith",
      image: "https://img.freepik.com/premium-photo/girl-with-long-brown-hair-blue-eyes_854727-137935.jpg",
      text: lorem,
    },
    {
      name: "Chris Evans",
      image: "https://img.freepik.com/premium-photo/girl-with-long-brown-hair-blue-eyes_854727-137935.jpg",
      text: lorem,
    },
  ];
</script>


<main class="h-dvh pt-20 relative">
  
  <div class="absolute inset-0 bg-cover bg-fixed bg-center opacity-90" style="background-image: url('https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-some-green-plants-and-leaves-against-a-dark-background-image_2899643.jpg');"></div>

  <div class="absolute inset-0 bg-bgColor bg-opacity-70"></div>

  
  <div class="relative flex flex-col justify-center items-center mb-12 z-10">
    <p class="font-medium  text-fontColor text-3xl">{para}</p>
    <h1 class="font-extrabold text-6xl text-fontColor text-center">{heading}</h1>
  </div>

 
  <div class="relative grid grid-cols-1 md:grid-cols-2 gap-8 px-12 z-10 max-w-7xl mx-auto">
    {#each testimonials as testimonial}
      <div
        class="border-2 border-gray-300 hover:border-blue-500 transition hover:translate-x-3 duration-300 p-6 rounded-md shadow-md bg-bgColor bg-opacity-80  w-full"
      >
        <p>{testimonial.text}</p>
        <div class="flex flex-row items-center mt-4">
          <img
            class="w-12 h-12 rounded-full"
            src={testimonial.image}
            alt="Client Image"
          />
          <p class="font-medium py-6 text-3xl ml-4">{testimonial.name}</p>
        </div>
      </div>
    {/each}
  </div>
</main>
