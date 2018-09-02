<template>
    <div>
        <header>
            <h1>Abee, the Meteorite</h1>
        </header>
        <div>
            <h2>Welcome {{ user }}!</h2>
            <label>
                Your name:
                <input type="text" v-model="user" autofocus />
            </label>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        user: '%username%'
    })
}
</script>
