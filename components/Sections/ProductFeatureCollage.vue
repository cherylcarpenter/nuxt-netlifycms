<template>
  <section>
    <div class="container mx-auto overflow-hidden pb-20">
      <div class="flex flex-wrap items-center">
        <div class="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
          <icon-circle
            icon-class="fas fa-sitemap"
            bg-color="bg-white"
            color=""
            size-classes="large"
          />
          <h3 class="text-3xl mb-2 font-semibold leading-normal">
            CSS Components
          </h3>
          <p
            class="
              text-lg
              font-light
              leading-relaxed
              mt-4
              mb-4
              text-blueGray-600
            "
          >
            Every element that you need in a product comes built in as a
            component. All components fit perfectly with each other and can have
            different colours.
          </p>
          <div class="block pb-6">
            <span
              class="
                text-xs
                font-semibold
                inline-block
                py-1
                px-2
                uppercase
                rounded-full
                
                bg-white
                uppercase
                last:mr-0
                mr-2
                mt-2
              "
            >
              Buttons
            </span>
            <span
              class="
                text-xs
                font-semibold
                inline-block
                py-1
                px-2
                uppercase
                rounded-full
                
                bg-white
                uppercase
                last:mr-0
                mr-2
                mt-2
              "
            >
              Inputs
            </span>
            <span
              class="
                text-xs
                font-semibold
                inline-block
                py-1
                px-2
                uppercase
                rounded-full
                
                bg-white
                uppercase
                last:mr-0
                mr-2
                mt-2
              "
            >
              Labels
            </span>
            <span
              class="
                text-xs
                font-semibold
                inline-block
                py-1
                px-2
                uppercase
                rounded-full
                
                bg-white
                uppercase
                last:mr-0
                mr-2
                mt-2
              "
            >
              Menus
            </span>
            <span
              class="
                text-xs
                font-semibold
                inline-block
                py-1
                px-2
                uppercase
                rounded-full
                
                bg-white
                uppercase
                last:mr-0
                mr-2
                mt-2
              "
            >
              Navbars
            </span>
            <span
              class="
                text-xs
                font-semibold
                inline-block
                py-1
                px-2
                uppercase
                rounded-full
                
                bg-white
                uppercase
                last:mr-0
                mr-2
                mt-2
              "
            >
              Pagination
            </span>
            <span
              class="
                text-xs
                font-semibold
                inline-block
                py-1
                px-2
                uppercase
                rounded-full
                
                bg-white
                uppercase
                last:mr-0
                mr-2
                mt-2
              "
            >
              Progressbars
            </span>
            <span
              class="
                text-xs
                font-semibold
                inline-block
                py-1
                px-2
                uppercase
                rounded-full
                
                bg-white
                uppercase
                last:mr-0
                mr-2
                mt-2
              "
            >
              Typography
            </span>
          </div>
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vn-index"
            target="_blank"
            class="
              font-bold
              text-blueGray-700
              hover:
              ease-linear
              transition-all
              duration-150
            "
          >
            View All
            <i class="fa fa-angle-double-right ml-1 leading-relaxed"></i>
          </a>
        </div>

        <div class="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
          <div class="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
            <img
              alt="..."
              :src="componentBtn"
              class="
                w-full
                align-middle
                rounded
                absolute
                shadow-lg
                max-w-100-px
                left-145-px
                -top-29-px
                z-3
              "
            />
            <img
              alt="..."
              :src="componentProfileCard"
              class="
                w-full
                align-middle
                rounded-lg
                absolute
                shadow-lg
                max-w-210-px
                left-260-px
                -top-160-px
              "
            />
            <img
              alt="..."
              :src="componentInfoCard"
              class="
                w-full
                align-middle
                rounded-lg
                absolute
                shadow-lg
                max-w-180-px
                left-40-px
                -top-225-px
                z-2
              "
            />
            <img
              alt="..."
              :src="componentInfo2"
              class="
                w-full
                align-middle
                rounded-lg
                absolute
                shadow-2xl
                max-w-200-px
                -left-50-px
                top-25-px
              "
            />
            <img
              alt="..."
              :src="componentMenu"
              class="
                w-full
                align-middle
                rounded
                absolute
                shadow-lg
                max-w-580-px
                -left-20-px
                top-210-px
              "
            />
            <img
              alt="..."
              :src="componentBtnPink"
              class="
                w-full
                align-middle
                rounded
                absolute
                shadow-xl
                max-w-120-px
                left-195-px
                top-95-px
              "
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconCircle from '../Icons/IconCircle.vue'
import componentBtn from '@/assets/img/component-btn.png'
import componentProfileCard from '@/assets/img/component-profile-card.png'
import componentInfoCard from '@/assets/img/component-info-card.png'
import componentInfo2 from '@/assets/img/component-info-2.png'
import componentMenu from '@/assets/img/component-menu.png'
import componentBtnPink from '@/assets/img/component-btn-pink.png'

export default {
  components: { IconCircle },
  data() {
    return {
      componentBtn,
      componentProfileCard,
      componentInfoCard,
      componentInfo2,
      componentMenu,
      componentBtnPink
    }
  }
}
</script>
