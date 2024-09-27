<script>
    const testimonials = [
      {
        name: "Jessica Sommer",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/food%20testimonial-2WXxHJfUjRpG2AF8nGNIAaRpViMbfi.png",
        text: "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam."
      },
      {
        name: "Bryan Lambert",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/food%20testimonial-2WXxHJfUjRpG2AF8nGNIAaRpViMbfi.png",
        text: "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam."
      },
      {
        name: "Kristin Foster",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/food%20testimonial-2WXxHJfUjRpG2AF8nGNIAaRpViMbfi.png",
        text: "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam."
      }
    ];
  </script>
  
  <section class="bg-gray-900 text-white py-16 px-4 md:px-8">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold text-orange-400 mb-12">Loved by Many</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-4">
          <p class="text-lg">{testimonials[0].text}</p>
          <div class="flex items-center space-x-4">
            <img src={testimonials[0].image} alt={testimonials[0].name} class="w-16 h-16 rounded-full object-cover" />
            <span class="font-semibold">{testimonials[0].name}</span>
          </div>
        </div>
        <div class="space-y-8">
          {#each testimonials.slice(1) as testimonial}
            <div class="space-y-4">
              <p class="text-lg">{testimonial.text}</p>
              <div class="flex items-center space-x-4">
                <img src={testimonial.image} alt={testimonial.name} class="w-16 h-16 rounded-full object-cover" />
                <span class="font-semibold">{testimonial.name}</span>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>