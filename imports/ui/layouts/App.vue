<template>
    <div class="px-32 pt-32 flex justify-center">
        <div class="w-2/3 flex flex-col items-center font-sans text-grey-darker">
            <router-link :to="{ name:'home', exact: true }" class="mb-10">
                <icon src="svg/home.svg" class="w-12 h-12 text-grey hover:text-grey-darkest transition"></icon>
            </router-link>
            <div class="text-5xl font-hairline mb-10">
                <router-link class="no-underline text-grey-darker" :to="{ name:'meteor', exact: true }">
                    <span class="border-b-2 border-transparent hover:border-grey-darkest">Meteor</span>
                </router-link> +
                <router-link class="no-underline text-grey-darker" :to="{ name:'apollo', exact: true }">
                    <span class="border-b-2 border-transparent hover:border-grey-darkest">Apollo</span>
                </router-link> +
                <router-link class="no-underline text-grey-darker" :to="{ name:'vue', exact: true }">
                    <span class="border-b-2 border-transparent hover:border-grey-darkest">Vue</span>
                </router-link> +
                <router-link class="no-underline text-grey-darker" :to="{ name:'tailwind', exact: true }">
                    <span class="border-b-2 border-transparent hover:border-grey-darkest">Tailwind</span>
                </router-link>
            </div>

            <!-- Route content -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Icon from '/imports/ui/components/Icon.vue';

export default {
    components: {
        Icon
    }
}
</script>

<style media="screen">
    .router-link-exact-active {
        color: black;
        border-color: black!important;
    }
</style>
