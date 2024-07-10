<template>
    <div class="contracts">
        <div class="contracts__content">
            <div class="content__form">
                <div class="form__head">
                    <h4>Cписок сделок</h4>
                    <div class="head__search">
                        <img v-if="getContructsList.length > 0 && query.length >= 3" src="../../asset/success.png" alt="success">
                        <img v-else-if="query" src="../../asset/warning.png" alt="warn">
                        <div class="search__input">
                            <input type="text" placeholder="Найти.." @input="querySelect" v-model="query">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="form__body">
                    <table class="body__table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Название</th>
                                <th>Бюджет</th>
                                <th>Статус</th>
                                <th>Ответственный</th>
                                <th>Дата создания</th>
                            </tr>
                        </thead>
                        <tbody>
                            <EmptyRow  v-if="getContructsList.length == 0" />
                            <RowSlot :elem="elem" v-for="elem in getContructsList" :key="elem.id" />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EmptyRow from './EmptyRow.vue';
import RowSlot from './RowSlot.vue';
import { mapGetters } from 'vuex';


export default defineComponent({
    name: 'ContractsBody',
    components: { EmptyRow, RowSlot },
    computed: {
        ...mapGetters([ 'getContructsList' ])
    },
    data() {
        return {
            query: '',
        }
    },
    methods: {
        async querySelect() {
            const data = {
                query: this.query
            }

            if( this.query.length >= 3 ) {
                await this.$store?.dispatch('loadContractsList', data );
            }
        }
    }
})
</script>

<style lang="scss" scoped>
.contracts {
    width: 100%;
    min-height: 75lvh;
    padding: 0 10%;

    @media (max-width: 499px) {
        padding: 0 6%;
    }

    .contracts__content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    
        .content__form {
            margin: 70px 0;
            border-radius: 10px;
            width: 100%;
            border: 2px solid rgb(27, 71, 112);
    
            .form__head {
                width: 100%;
                min-height: 60px;
                border-bottom: 2px solid rgb(27, 72, 117);
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                padding: 5px 20px;
    
                @media (max-width: 650px) {
                    flex-direction: column;
                    justify-content: center;
                }
    
                h4 {
                    font-size: 25px;
    
                    @media (max-width: 650px) {
                        font-size: 20px;
                        margin-top: 5px;
                    }
                }
    
                .head__search {
                    width: 40%;
                    display: flex;
                    justify-content: end;
    
                    @media (max-width: 650px) {
                        width: 100%;
                        margin-top: 10px;
                    }
    
                    img {
                        width: 20px;
                        height: 20px;
                        margin-right: 10px;
                        margin-top: 5px;
                    }
    
                    .search__input {
                        position: relative;
    
                        @media (max-width: 650px) {
                            width: 100%;
                        }
    
                        input {
                            width: 200px;
                            padding: 5px 30px 5px 10px;
                            border-radius: 7px;
                            outline: none;
    
                            @media (max-width: 650px) {
                                width: 100%;
                            }
                        }
    
                        svg {
                            position: absolute;
                            right: 5px;
                            top: 5px;
                            width: 18px;
                            height: auto;
                            cursor: pointer;
                        }
                    }
                }
            }

            .form__body {
                min-height: 20lvh;
                padding: 10px 20px;

                .body__table {
                    width: 100%;
                    border-collapse: collapse;

                    thead {
                        
                        tr {
                            border-bottom: 2px solid rgb(163, 163, 163);

                            th {
                                padding: 10px 10px;
                                position: relative;
                                text-align: start;

                                &:first-of-type {
                                    width: 40px;
                                }

                                &:not(:last-of-type) {

                                    &:not(:first-of-type) {

                                        width: 19%;

                                        &::after {
                                            content: '';
                                            position: absolute;
                                            right: 0;
                                            bottom: 5px;
                                            width: 1.5px;
                                            height: 30px;
                                            background: rgb(160, 160, 160);
                                        }
                                    }
                                }
                            }
                        }
                    }

                    tbody {
                        font-weight: 300;
                    }
                }
            }
        }
    }
}
</style>