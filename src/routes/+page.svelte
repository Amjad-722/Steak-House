<script>
  import Bg from "../components/BG.svelte";
import Footer from "../components/footer/footer.svelte";
import Home from "../components/Home/home.svelte";
  import HoverCard from "../components/HoverCard.svelte";
import Navabr from "../components/Navbar/Navabr.svelte";
  import ReserverTable from "../components/Reservations/reserverTable.svelte";
  import Tabs from "../components/Tabs.svelte";
  import Testimonial from "../components/testimonial/testimonial .svelte";




</script>

<main>
  <section
  class="h-screen max-h-full bg-cover bg-no-repeat bg-center bg-blend-overlay relative"
  style="background-image: url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D'); background-color: #232533; opacity: 1;"
>
  <Navabr />
  <Home />
</section>

<section>
  <ReserverTable/>
</section>
<section>
  <Bg/>
</section>
<section>
  <Testimonial/>
</section>
<section>
  <Footer/>
</section>
<section class="h-screen ">
  <Tabs/>
  <h1 class="mt-48">HoveredCards</h1>
  <HoverCard/>
</section>

   
</main>