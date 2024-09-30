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
  style="background-image: url('https://t3.ftcdn.net/jpg/05/73/69/98/360_F_573699890_jzicI81KNwKhGY6fDXE3tcHD3ISmCd1y.jpg'); background-color: #232533; opacity: 0.9;"
>
  <!-- <div class="absolute inset-0 bg-[#232533] bg-opacity-70"></div>  -->
  
  <!-- Content goes here -->
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