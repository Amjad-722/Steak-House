<script>
    const comedians = [
      {
        id: 1,
        name: "Avery McKinney",
        image: "https://avatars.githubusercontent.com/u/159441246?v=4",
        bio: "Born in Burbank California, Avery plans to die there (unless something better comes along, like getting drafted in the CFL or finding a penny...really anything...) After graduating from Emory University with a degree in Psychology and realizing he had not yet gotten his fill of the mentally imbalanced, he decided to pursue comedy."
      },
      {
        id: 2,
        name: "Aaron Monte",
        image: "https://avatars.githubusercontent.com/u/159441246?v=4",
        bio: "Aaron Monte is a rising star in the comedy world, known for his sharp wit and observational humor.",
      },
      {
        id: 3,
        name: "Hannah Romes",
        image: "https://avatars.githubusercontent.com/u/159441246?v=4",
        bio: "Hannah Romes brings a fresh perspective to stand-up comedy with her unique life experiences and clever punchlines.",
      },
      {
        id: 4,
        name: "Amanda Fritz",
        image: "https://avatars.githubusercontent.com/u/159441246?v=4",
        bio: "Amanda Fritz is known for her quick wit and sharp observations, making her a favorite among comedy club audiences.",
      },
    ];
  </script>
  
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {#each comedians as comedian (comedian.id)}
        <div class="relative group">
          
          
          <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 w-96 bg-white rounded-lg shadow-lg p-4 mb-2 transition-all duration-300 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 border-2 border-blue-600">
            
            
            <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-5 h-5 border-r-2 border-b-2 border-blue-600 bg-white rotate-45 -mt-2"></div>
            
           
            <h3 class="text-lg font-bold mb-2">{comedian.name}</h3>
            <p class="text-sm mb-2">{comedian.bio}</p>
          </div>
          
         
          <div class="bg-white rounded-lg border-2 mt-2 hover:border-blue-600 shadow-md overflow-hidden">
            <img src={comedian.image} alt={comedian.name} class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-lg font-semibold">{comedian.name}</h3>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
  