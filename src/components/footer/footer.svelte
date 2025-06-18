<script>
  import Button from "../Button/button.svelte";
  
  export let buttonText = "Book A Table";
  export let phoneNumber = "+1 234 56 7890";
  export let location = "1234 N Spring St, Los Angeles, CA 90012";
  export let hours = [
    { day: "Monday", time: "11AM – 11PM" },
    { day: "Tuesday", time: "11AM – 11PM" },
    { day: "Wednesday", time: "11AM – 11PM" },
    { day: "Thursday", time: "11AM – 11PM" },
    { day: "Friday", time: "11AM – 11PM" },
    { day: "Saturday", time: "11AM – 01AM" },
    { day: "Sunday", time: "11AM – 01AM" },
  ];
</script>

<footer id="footer" class="bg-bgColor text-white pt-12 md:pt-24 px-4 md:px-8">
  <div class="max-w-6xl mx-auto">
    <!-- Title -->
    <h2 class="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-10">We Are Waiting to Serve You!</h2>
    
    <!-- Button -->
    <div class="flex justify-center mb-8">
      <Button size="md">{buttonText}</Button>
    </div>

    <!-- Phone Number -->
    <p class="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-8">
      Or Call {phoneNumber}
    </p>
    
    <!-- Navigation Links -->
    <nav class="flex justify-center space-x-4 md:space-x-8 mb-12 md:mb-16">
      <a href="#" class="hover:text-fontColor">Home</a>
      <a href="#" class="hover:text-fontColor">About</a>
      <a href="#services" class="hover:text-fontColor">Menu</a>
      <a href="#footer" class="hover:text-fontColor">Contact</a>
    </nav>
    
    <!-- Footer Content -->
    <div class="flex flex-col md:flex-row gap-10 md:gap-16 justify-between items-center md:items-start">
      <!-- Location Section -->
      <div class="text-center md:text-left w-full md:w-1/3">
        <h3 class="text-xl md:text-2xl font-bold mb-4">Location</h3>
        <p>{location.split(",")[0]}</p>
        <p>{location.split(",")[1]}</p>
      </div>
      
      <!-- Image Section (Responsive Scaling) -->
      <div class="order-last md:order-none w-full md:w-[450px] lg:w-[600px] h-[200px] md:h-[450px] lg:h-[600px]">
        <img
          src="https://websitedemos.net/steak-house-02/wp-content/uploads/sites/841/2021/05/footer-img.jpg"
          alt="Restaurant Interior"
          class="w-full h-full object-cover rounded-md"
        />
      </div>
      
  
      <div class="text-center md:text-left w-full md:w-1/3">
        <h3 class="text-xl md:text-2xl font-bold mb-4">Hours</h3>
        {#each hours as { day, time }}
          <p class="mt-2">{day} : <span class="pl-4">{time}  </span> </p>
        {/each}
      </div>
    </div>
  
    <div class="mt-12 text-center">
      <div class="flex justify-center space-x-4">
       
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    transition: all 0.3s ease-in-out;
  }

  img {
    border-radius: 0.75rem; 
  }
</style>
