<template>
  <div
    class="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl md:shadow-lg"
  >
    <div class="flex flex-row justify-center pb-4">
      <img src="~/assets/logo_light.svg" width="280" alt="Logo" />
    </div>
    <form class="flex flex-col" @submit.prevent="handleSubmit">
      <div class="pb-2">
        <label for="email" class="block mb-2 text-sm font-medium text-[#111827]"
          >Email</label
        >
        <div class="relative text-gray-400">
          <input
            v-model="email"
            type="email"
            name="email"
            id="email"
            class="pl-3 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
            placeholder="name@company.com"
            autocomplete="off"
          />
        </div>
      </div>
      <div class="pb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-[#111827]"
          >Password</label
        >
        <div class="relative text-gray-400">
          <input
            v-model="password"
            type="password"
            name="password"
            id="password"
            placeholder="••••••••••"
            class="pl-3 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
            autocomplete="new-password"
            aria-autocomplete="list"
          />
        </div>
      </div>
      <button
        type="submit"
        class="w-full text-[#FFFFFF] bg-[#4200FF] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6"
      >
        Login
      </button>
      <div class="text-sm font-light text-[#6B7280]">
        Don't have an accout yet?
        <a href="#" class="font-medium text-[#4200FF] hover:underline"
          >Sign Up</a
        >
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'auth',
})

const email = ref('')
const password = ref('')

const { signIn } = useAppStore()
const handleSubmit = async () => {
  await signIn({ email: email.value, password: password.value })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error(error)
    })
}
</script>

<style></style>
