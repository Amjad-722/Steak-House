<script>
  import Button from "../Button/button.svelte";
  
  export let buttonText = "Book A Table"; // Make button text customizable
  export let phoneNumber = "+1 234 56 7890"; // Make phone number customizable
  export let location = "1234 N Spring St, Los Angeles, CA 90012"; // Location text as prop
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

<footer class="bg-bgColor text-white pt-48 md:px-8">
  <div class="max-w-6xl mx-auto">
    <!-- Title -->
    <h2 class="text-xl md:text-4xl font-bold text-center mb-10">We Are Waiting to Serve You!</h2>
    
    <!-- Button -->
    <div class="flex justify-center mb-8">
      <Button size="lg">
        {buttonText}
      </Button>
    </div>

    <!-- Phone Number -->
    <p class="text-2xl md:text-3xl font-semibold text-center m-10">
      Or Call {phoneNumber}
    </p>
    
    <!-- Navigation Links -->
    <nav class="flex justify-center space-x-8 mb-16">
      <a href="#" class="hover:text-fontColor">Home</a>
      <a href="#" class="hover:text-fontColor">About</a>
      <a href="#" class="hover:text-fontColor">Menu</a>
      <a href="#" class="hover:text-fontColor">Contact</a>
    </nav>
    
    <!-- Footer Content -->
    <div class="flex flex-col md:flex-row gap-20   justify-between items-center md:items-start space-y-10 md:space-y-0">
      <!-- Location Section -->
      <div class="text-center md:text-left">
        <h3 class="text-2xl font-bold mb-4">Location</h3>
        <p>{location.split(",")[0]}</p>
        <p>{location.split(",")[1]}</p>
      </div>
      
      <!-- Image Section (3x Larger) -->
      <div class="order-last md:order-none w-[288px] h-[288px] md:w-[864px] md:h-[800px]">
        <img
          src="https://websitedemos.net/steak-house-02/wp-content/uploads/sites/841/2021/05/footer-img.jpg"
          alt="Restaurant Interior"
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- Hours Section -->
      <div class="text-center md:text-left">
        <h3 class="text-2xl font-bold mb-4">Hours</h3>
        {#each hours as { day, time }}
          <p>{day} : {time}</p>
        {/each}
      </div>
    </div>
    
    <!-- Social Links -->
    <div class="mt-12 text-center">
      <div class="flex justify-center space-x-4">
        <!-- Add social icons here -->
        <!-- Example: 
        <a href="#" class="hover:text-gray-300">
          <i class="fab fa-facebook"></i>
        </a> -->
      </div>
    </div>
  </div>
</footer>
