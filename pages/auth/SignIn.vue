<template>
  <div
    class="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl md:shadow-lg"
  >
    <div class="flex flex-row justify-center pb-4">
      <img src="~/assets/logo_light.svg" width="280" alt="Logo" />
    </div>
    <form class="flex flex-col" @submit.prevent="handleSubmit">
      <div class="pb-2">
        <label for="email" class="block mb-2 text-sm font-medium text-[#111827]">
          Email
        </label>
        <div class="relative text-gray-400">
          <UInput
            v-model="email"
            icon="i-heroicons-envelope-20-solid"
            color="gray"
            variant="outline"
            placeholder="name@mail.com"
            size="lg"
          />
        </div>
      </div>
      <div class="pb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-[#111827]">
          Password
        </label>
        <div class="relative text-gray-400">
          <UInput
            v-model="password"
            icon="i-heroicons-lock-closed-20-solid"
            color="gray"
            variant="outline"
            placeholder="••••••••••"
            size="lg"
            :type="showPassword ? 'text' : 'password'"
            :ui="{ icon: { trailing: { pointer: '' } } }"
          >
            <template #trailing>
              <UButton
                color="gray"
                variant="link"
                :icon="showPassword ? 'i-heroicons-eye-20-solid' : 'i-heroicons-eye-slash-20-solid'"
                :padded="false"
                @click="showPassword = !showPassword"
              />
            </template>
          </UInput>
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
useSeoMeta({
  title: 'Sign In / (themainfunction)',
  description: 'Sign In page',
  keywords: 'auth, signin, page',
})

const email = ref('')
const password = ref('')
const showPassword = ref(false)

const { signIn } = useAppStore()
const toast = useToast()
const router = useRouter()

const handleSubmit = async () => {
  await signIn({ email: email.value, password: password.value })
    .then((response) => {
      router.push('/')
    })
    .catch((error) => {
      toast.add({
        title: 'Error',
        description: 'Invalid email or password',
        color: 'red',
      })
      console.error(error)
    })
}
</script>

<style></style>
