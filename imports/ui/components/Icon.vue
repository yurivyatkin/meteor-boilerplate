<template>
    <span></span>
</template>

<script>
let cache = new Map();

export default {
    props: {
        src: { type: String, required: true }
    },
    async mounted() {
        if (!cache.has(this.src)) {
            try {
                cache.set(this.src, fetch(this.src).then(r => r.text()));
            } catch (e) {
                cache.delete(this.src);
            }
        }
        if (cache.has(this.src)) {
            this.$el.innerHTML = await cache.get(this.src);

            if(this.$vnode.data.staticClass)
                this.$el.querySelector("svg").classList.add(...this.$vnode.data.staticClass.split(' '));

            this.$el.outerHTML = this.$el.innerHTML;
        }
    }
};
</script>
