<script>
  import Bg from "../components/BG.svelte";
import Footer from "../components/footer/footer.svelte";
import Home from "../components/Home/home.svelte";
import Navabr from "../components/Navbar/Navabr.svelte";
  import ReserverTable from "../components/Reservations/reserverTable.svelte";
  import Testimonial from "../components/testimonial/testimonial .svelte";




</script>

<main>
  <section
  class="h-screen max-h-full bg-cover bg-no-repeat bg-center bg-blend-overlay relative"
  style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS127cmrUllJpcrNdkNscsZpqNUfLESi0um7z0tv-Cjjnb0b4jBijcT4J9va1rR8bbrepU&usqp=CAU'); background-color: #232533; opacity: 0.9;"
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

   
</main>