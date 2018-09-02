<template>
    <div class="p-32 font-sans text-grey-darker flex flex-col items-center">
        <p class="text-5xl font-thin text-center mb-10">
            <a href="https://meteor.com" class="no-underline text-grey-darkest hover:underline">Meteor</a> + <a href="https://vuejs.org" class="no-underline text-grey-darkest hover:underline">Vue.js</a> +<a href="https://tailwindcss.com" class="no-underline text-grey-darkest hover:underline">Tailwind</a>
        </p>
        <div class="w-2/5 mb-10">
            <p class="text-center">
                This is a starter project which has the basic scaffolding to start making full stack web apps powered by meteor, vue and tailwind.
                It also comes with a nice vue icon svg component.
            </p>
        </div>
        <a href="https://github.com/paullj/meteor-vue-tailwind"><icon src="svg/github.svg" class="text-grey hover:text-grey-darkest"></icon></a>
    </div>
</template>

<script>

import Icon from './Icon.vue';

export default {
    components: {
        Icon
    },
    data: function() {
        return {

        }
    },
    methods: {

    }
}
</script>
