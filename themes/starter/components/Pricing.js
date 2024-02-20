import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

/**
 * 价格板块
 * @returns
 */
export const Pricing = () => {
  return <>
       {/* <!-- ====== Pricing Section Start --> */}
       <section
      id="pricing"
      class="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div class="mx-auto mb-[60px] max-w-[510px] text-center">
              <span class="mb-2 block text-lg font-semibold text-primary">
                {siteConfig('STARTER_PRICING_TITLE', null, CONFIG)}
              </span>
              <h2
                class="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]"
              >
                {siteConfig('STARTER_PRICING_TEXT_1', null, CONFIG)}
              </h2>
              <p class="text-base text-body-color dark:text-dark-6">
              {siteConfig('STARTER_PRICING_TEXT_2', null, CONFIG)}
              </p>
            </div>
          </div>
        </div>

        {/* 第一个付费计划 */}
        <div class="-mx-4 flex flex-wrap justify-center">
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              class="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
            >
              <span
                class="mb-5 block text-xl font-medium text-dark dark:text-white"
              >
                {siteConfig('STARTER_PRICING_1_TITLE', null, CONFIG)}
              </span>
              <h2
                class="space-x-1 mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]"
              >
                <span class="text-xl font-medium">{siteConfig('STARTER_PRICING_1_PRICE_CURRENCY', null, CONFIG)}</span>
                <span class="-ml-1 -tracking-[2px]">{siteConfig('STARTER_PRICING_1_PRICE', null, CONFIG)}</span>
                <span
                  class="text-base font-normal text-body-color dark:text-dark-6"
                >
                 {siteConfig('STARTER_PRICING_1_PRICE_PERIOD', null, CONFIG)}
                </span>
              </h2>

              <div class="mb-[50px]">
                <h5 class="mb-5 text-lg font-medium text-dark dark:text-white">
                  {siteConfig('STARTER_PRICING_1_HEADER', null, CONFIG)}
                </h5>
                <div class="flex flex-col gap-[14px]">
                  {siteConfig('STARTER_PRICING_1_FEATURES', null, CONFIG)?.split(',').map((feature, index) => {
                    return <p key={index} class="text-base text-body-color dark:text-dark-6">
                    {feature}
                  </p>
                  })}

                </div>
              </div>
              <a
                href={siteConfig('STARTER_PRICING_1_BUTTON_URL')}
                class="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition hover:bg-blue-dark"
              >
                {siteConfig('STARTER_PRICING_1_BUTTON_TEXT', null, CONFIG)}
              </a>
            </div>
          </div>

          {/* 第二个付费计划 */}
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              class="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
            >
              <p style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                class="absolute p-1 right-0 top-0 inline-block rounded-bl-md rounded-tl-md bg-primary text-base font-medium text-white tracking-wider"
              >
                {siteConfig('STARTER_PRICING_2_TAG', null, CONFIG)}
              </p>
              <span
                class="mb-5 block text-xl font-medium text-dark dark:text-white"
              >
                {siteConfig('STARTER_PRICING_2_TITLE', null, CONFIG)}
              </span>
              <h2
                class="space-x-1 mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]"
              >
                <span class="text-xl font-medium">{siteConfig('STARTER_PRICING_1_PRICE_CURRENCY', null, CONFIG)}</span>
                <span class="-ml-1 -tracking-[2px]">{siteConfig('STARTER_PRICING_1_PRICE', null, CONFIG)}</span>
                <span
                  class="text-base font-normal text-body-color dark:text-dark-6"
                >
                 {siteConfig('STARTER_PRICING_2_PRICE_PERIOD', null, CONFIG)}
                </span>
              </h2>

              <div class="mb-[50px]">
                <h5 class="mb-5 text-lg font-medium text-dark dark:text-white">
                  {siteConfig('STARTER_PRICING_2_HEADER', null, CONFIG)}
                </h5>
                <div class="flex flex-col gap-[14px]">
                  {siteConfig('STARTER_PRICING_2_FEATURES', null, CONFIG)?.split(',').map((feature, index) => {
                    return <p key={index} class="text-base text-body-color dark:text-dark-6">
                    {feature}
                  </p>
                  })}

                </div>
              </div>
              <a
                href={siteConfig('STARTER_PRICING_2_BUTTON_URL')}
                class="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition hover:bg-blue-dark"
              >
                {siteConfig('STARTER_PRICING_2_BUTTON_TEXT', null, CONFIG)}
              </a>
            </div>
          </div>

          {/* 第三个付费计划 */}
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              class="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
            >
              <span
                class="mb-5 block text-xl font-medium text-dark dark:text-white"
              >
                {siteConfig('STARTER_PRICING_3_TITLE', null, CONFIG)}
              </span>
              <h2
                class="space-x-1 mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]"
              >
                <span class="text-xl font-medium">{siteConfig('STARTER_PRICING_3_PRICE_CURRENCY', null, CONFIG)}</span>
                <span class="-ml-1 -tracking-[2px]">{siteConfig('STARTER_PRICING_3_PRICE', null, CONFIG)}</span>
                <span
                  class="text-base font-normal text-body-color dark:text-dark-6"
                >
                 {siteConfig('STARTER_PRICING_3_PRICE_PERIOD', null, CONFIG)}
                </span>
              </h2>

              <div class="mb-[50px]">
                <h5 class="mb-5 text-lg font-medium text-dark dark:text-white">
                  {siteConfig('STARTER_PRICING_3_HEADER', null, CONFIG)}
                </h5>
                <div class="flex flex-col gap-[14px]">
                  {siteConfig('STARTER_PRICING_3_FEATURES', null, CONFIG)?.split(',').map((feature, index) => {
                    return <p key={index} class="text-base text-body-color dark:text-dark-6">
                    {feature}
                  </p>
                  })}

                </div>
              </div>
              <a
                href={siteConfig('STARTER_PRICING_3_BUTTON_URL')}
                class="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition hover:bg-blue-dark"
              >
                {siteConfig('STARTER_PRICING_3_BUTTON_TEXT', null, CONFIG)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- ====== Pricing Section End --> */}

</>
}
