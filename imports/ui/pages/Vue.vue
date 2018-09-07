<template lang="html">
    <div class="flex flex-col items-center">
        <div class="text-center text-xl font-thin leading-normal mb-10">
            Vue is used as the frontend framework to create quick, reactive websites. It integrates with Apollo and Meteor seamlessly and also includes Vue Router.
        </div>
        <a href="https://vuejs.org"><icon src="svg/link.svg" class="w-8 h-8 text-grey hover:text-grey-darkest transition"></icon></a>
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

<style lang="css">
</style>
