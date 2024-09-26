<script>
  import Home from "../components/Home/home.svelte";
import Navabr from "../components/Navbar/Navabr.svelte";
  import ReserverTable from "../components/Reservations/reserverTable.svelte";
  import Testimonial from "../components/testimonial/testimonial .svelte";




</script>

<main>
  <section
  class="h-screen max-h-full bg-cover bg-no-repeat bg-center bg-blend-overlay"
  style="background-image: url('https://t3.ftcdn.net/jpg/05/73/69/98/360_F_573699890_jzicI81KNwKhGY6fDXE3tcHD3ISmCd1y.jpg'); background-color: rgba(0, 0, 0, 0.6);"
>
  <Navabr />
  <Home />
</section>
<section>
  <ReserverTable/>
</section>
<section>
  <Testimonial/>
</section>

   
</main>