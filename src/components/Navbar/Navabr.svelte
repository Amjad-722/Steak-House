<script>
  import Button from "../Button/button.svelte";
  export let brandName = "Steak House";
  export let links = [
    { name: "Home", href: "#", active: true },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" }
  ];

  let showMenu = false;

  function toggleMenu() {
    showMenu = !showMenu;
  }
</script>

<nav class="w-full top-0 pt-6 start-0 mx-auto dark:bg-gray-900 z-20">
  <div class="max-w-screen-xl flex flex-wrap items-center py-3 justify-between mx-auto px-4">
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
        {brandName}
      </span>
    </a>

    <div class="flex md:order-2 space-x-3 rtl:space-x-reverse">
      <Button size="md">Make Reservation</Button>

      <!-- Hamburger Menu Button for small screens -->
      <button
        class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded={showMenu}
        on:click={toggleMenu}
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M3 5h14M3 10h14m-7 5h7"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <!-- Navigation Links for both mobile and desktop -->
    <div
      class={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${showMenu ? "block" : "hidden"} md:block`}
      id="navbar-sticky"
    >
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900">
        {#each links as link}
          <li>
            <a href={link.href} class={`block py-2 px-3 text-white rounded md:bg-transparent md:p-0 ${
              link.active ? "bg-blue-700 md:hover:text-fontColor" : "hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fontColor dark:text-white dark:hover:bg-gray-700"
            }`}>
              {link.name}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

<style>
  nav {
    transition: all 0.3s;
  }
</style>
