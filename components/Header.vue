<template>
  <div id="head" class="header bg-white shadow-md">
    <div class="mx-auto px-4 flex justify-center items-center  gap-5">
      <!-- Logo -->
      <div id="logo" class="flex items-center mr-5">
        <img class="object-contain headerImg" src="../assets/img/logo.png" alt="logo">
      </div>

      <!-- Menu -->
      <div class="flex items-center space-x-8">
        <nav class="menuHeader flex space-x-6 items-center">
          <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:text-gray-800">Dashboard</a>
          <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800">Team</a>
          <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800">Projects</a>
          <div class="relative group">
            <a href="#" class="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800">
                Services
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    class="size-4 text-gray-800"
                >
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="m19.5 8.25-7.5 7.5-7.5-7.5" 
                    />
                </svg>
            </a>
            <!-- Dropdown -->
            <div class="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2">
              <a href="#" class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Service 1</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Service 2</a>
            </div>
          </div>
          <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800">Calendar</a>
          <a
            href="#"
            class="bg-yellow-300 text-black font-medium rounded-md px-4 py-2 hover:bg-black hover:bg-yellow-500 transition duration-300"
          >
            FREE ESTIMATE
          </a>
          <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800">EN</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>

onMounted(() => {
    console.log('header mounted')
})
</script>

<style scoped>
.header {
    min-height: 50px;
    max-height: 80px;
    padding: 7px;
    margin-bottom: 10px;
}
.headerImg {
    min-width: 40px;
    min-height: 40px;
    max-height: 65px;
}
.menuHeader {

}
.group:hover .group-hover\:block {
  display: block;
}
</style>