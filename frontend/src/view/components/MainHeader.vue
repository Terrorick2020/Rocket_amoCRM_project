<template>
    <header class="header">
        <div class="header__content">
            <div class="content__logo">
                <img src="../../asset/logo.png" alt="">
                <div class="logo__text">
                    <h1>smartContract</h1>
                    <p>Сервис по заключению договоров!</p>
                </div>
            </div>
            <div class="content__service">
                <button title="В разработке">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </button>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MainHeader'
})
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 120px;
    padding: 0 10%;
    background: rgb(54, 122, 158);

    @media (max-width: 499px) {
        height: 100px;
        padding: 0 6%;
    }

    .header__content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 5px 0;


        .content__logo {
            width: 60%;
            display: flex;
            flex-direction: row;
            align-items: center;

            @media (min-width: 500px) and (max-width: 768px) {
                transform: scale(0.9);
            }

            @media (max-width: 499px) {
                transform: scale(0.8);
            }

            img {
                user-select: none;
                width: 80px;
                height: auto;
            }

            .logo__text {
                margin-left: 10px;

                @media (max-width: 499px) {
                    margin-left: 6px;
                    scale: 0.8;
                }
            }
        }

        .content__service {

            button {
                width: 40px;
                height: 40px;
                border: none;
                background: transparent;
                cursor: pointer;

                @media (min-width: 500px) and (max-width: 768px) {
                    transform: scale(0.9);
                }
    
                @media (max-width: 499px) {
                    transform: scale(0.75);
                }
            }
        }
    }
}
</style>