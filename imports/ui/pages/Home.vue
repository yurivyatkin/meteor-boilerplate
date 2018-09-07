<template lang="html">
    <div class="flex flex-col items-center">
        <div class="text-center text-xl font-thin leading-normal mb-10">
            This project is intended to be used as a quickstart for building full stack Meteor web apps.
            It utilises Meteor, Vue, Apollo (GraphQL) and Tailwind to allow for rapid development.
        </div>
        <a href="https://github.com/paullj/meteor-boilerplate"><icon src="svg/github.svg" class="w-8 h-8 text-grey hover:text-grey-darkest transition"></icon></a>
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
