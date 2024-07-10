<template>
    <footer class="footer">
        <div class="footer__content">
            <p>Все права защищены &COPY;</p>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MainFooter'
})
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    height: 80px;
    padding: 0 10%;

    .footer__content {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 2px solid rgba(128, 128, 128, 0.65);
    }
}
</style>