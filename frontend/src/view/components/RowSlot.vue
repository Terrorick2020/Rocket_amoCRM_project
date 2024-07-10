<template>
    <tr class="castom-tr">
        <td @click="openInfoTr" class="plus">
            <svg v-if="closedInfoRow"  class="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
            </svg>
            <svg v-else  class="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
            </svg>
        </td>
        <td>{{ elem.deal_name }}</td>
        <td>{{ elem.budget }}</td>
        <td>
            <span :style="`background: ${ elem.status_color }`">{{ elem.status }}</span>
        </td>
        <td class="responsible">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"/>
            </svg>
            <p>{{ elem.responsible }}</p>
        </td>
        <td>{{ secondsToDate(elem.created_at) }}</td>
    </tr>
    <tr v-show="showInfoRow" :class="`info-tr ${!closedInfoRow ? 'visible' : 'disable'}`">
        <td></td>
        <td colspan="5">
            <svg class="persone-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/>
            </svg>
            {{ elem.contact && elem.responsible_email ? '' : 'Информация отсутствует' }}
            {{ elem.contact || '' }}
            <button v-if="elem.contact" title="Позвонить">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                </svg>
            </button>
            {{ elem.responsible_email || '' }}
            <button v-if="elem.responsible_email " title="Написать сообщение">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                </svg>
            </button>
        </td>
    </tr>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'RowSlot',
    props: {
        elem: {
            type: Object as () => {
                id: number | null,
                deal_name: string | undefined,
                budget: number | null,
                status: string | undefined,
                status_color: string | undefined,
                responsible: string | undefined,
                responsible_email: string | undefined,
                created_at: number | null,
                contact: string | undefined
            },
            required: true,
        }
    },
    data() {
        return {
            showInfoRow: false,
            closedInfoRow: true
        }
    },
    methods: {
        openInfoTr() {
            this.closedInfoRow = !this.closedInfoRow;
            if( this.showInfoRow ) {
                setTimeout(() => {
                    this.showInfoRow = !this.showInfoRow;
                    
                }, 800);
            } else {
                this.showInfoRow = !this.showInfoRow;
            }
        },
        secondsToDate(seconds: number | null) {

            if( !seconds ) {
                return 'Неизвестно';
            }

            var date = new Date( seconds * 1000 );
            
            var day = date.getDate().toString().padStart(2, '0');
            var month = (date.getMonth() + 1).toString().padStart(2, '0');
            var year = date.getFullYear();

            return `${day}.${month}.${year}`;

        }
    }
})
</script>

<style lang="scss" scoped>
tr {
    cursor: pointer;
    width: 100%;

    &.info-tr {
        transform-origin: top;
        overflow: hidden;

        @keyframes open_row {
            from {
                opacity: 0;
                transform: scaleY(0);
            }
            to {
                opacity: 1;
                transform: scaleY(1);
            }
        }

        &.visible {
            animation: open_row 0.8s forwards;
        }

        @keyframes close_row {
            from {
                opacity: 1;
                transform: scaleY(1);
            }
            to {
                opacity: 0;
                transform: scaleY(0);
            }
        }

        &.disable {
            animation: close_row 0.8s forwards;
        }
    }

    &:hover {
        background: rgba(41, 115, 175, 0.167);
    }

    &:not(:last-of-type) {
        border-bottom: 1px solid rgb(206, 206, 206);
    }

    td {
        padding: 10px 10px;
        position: relative;
        text-align: start;

        .persone-svg {
            margin-right: 10px;
            margin-top: 2px;
        }

        span {
            padding: 2px;
            border-radius: 5px;
        }

        button {
            background: transparent;
            border: none;
            cursor: pointer;
            margin-left: 10px;

            &:first-of-type {
                margin-right: 10px;
            }
        }

        svg {
            width: 20px;
            height: auto;
        }

        &.responsible {
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 15px;
        }
    }
}
</style>