<template>
  <section class="block relative z-1 bg-blueGray-600">
    <!-- #TODO this has negative margin for the demo section angle overlap -->
    <div class="container mx-auto">
      <div class="justify-center flex flex-wrap">
        <div class="w-full lg:w-12/12 px-4 -mt-24">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-4/12 px-4">
              <h5 class="text-xl font-semibold pb-4 text-center">Login Page</h5>
              <NuxtLink to="/auth/login">
                <div
                  class="
                    hover:-mt-4
                    relative
                    flex flex-col
                    min-w-0
                    break-words
                    bg-white
                    w-full
                    mb-6
                    shadow-lg
                    rounded-lg
                    ease-linear
                    transition-all
                    duration-150
                  "
                >
                  <img
                    alt="..."
                    class="
                      align-middle
                      border-none
                      max-w-full
                      h-auto
                      rounded-lg
                    "
                    :src="login"
                  />
                </div>
              </NuxtLink>
            </div>

            <div class="w-full lg:w-4/12 px-4">
              <h5 class="text-xl font-semibold pb-4 text-center">
                Profile Page
              </h5>
              <NuxtLink to="/profile">
                <div
                  class="
                    hover:-mt-4
                    relative
                    flex flex-col
                    min-w-0
                    break-words
                    bg-white
                    w-full
                    mb-6
                    shadow-lg
                    rounded-lg
                    ease-linear
                    transition-all
                    duration-150
                  "
                >
                  <img
                    alt="..."
                    class="
                      align-middle
                      border-none
                      max-w-full
                      h-auto
                      rounded-lg
                    "
                    :src="profile"
                  />
                </div>
              </NuxtLink>
            </div>

            <div class="w-full lg:w-4/12 px-4">
              <h5 class="text-xl font-semibold pb-4 text-center">
                Landing Page
              </h5>
              <NuxtLink to="/landing">
                <div
                  class="
                    hover:-mt-4
                    relative
                    flex flex-col
                    min-w-0
                    break-words
                    bg-white
                    w-full
                    mb-6
                    shadow-lg
                    rounded-lg
                    ease-linear
                    transition-all
                    duration-150
                  "
                >
                  <img
                    alt="..."
                    class="
                      align-middle
                      border-none
                      max-w-full
                      h-auto
                      rounded-lg
                    "
                    :src="landing"
                  />
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import login from '@/assets/img/login.jpg'
import profile from '@/assets/img/profile.jpg'
import landing from '@/assets/img/landing.jpg'

export default {
  data() {
    return {
      login,
      profile,
      landing
    }
  }
}
</script>
