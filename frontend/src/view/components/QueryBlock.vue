<template>
    <div class="query-block">
        <div class="query-block__conteiner">
            <div class="conteiner__box">
                <h2>Добавить фильтры запроса:</h2>
                <div class="query-block__form">
                    <div class="form__add-block">
                        <select class="add-block__select" name="" id="selected-box" v-model="select_val">
                            <option value="deal_name">Наименование</option>
                            <option value="budget">Бюджет</option>
                            <option value="status">Статус</option>
                            <option value="responsible">Ответственный</option>
                        </select>
                        <input v-model="input_val" type="text">
                        <button @click="addFilter">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                            </svg>
                        </button>
                    </div>
                    <p class="warn" v-if="input_val.length > 0 && input_val.length < 3">*Запрос должен содеражть не менее 3х символов!</p>
                    <h3 v-if="Object.keys( filtersDict ).length > 0">Фильтры:</h3>
                    <div class="form__filter-box">
                        <div class="filter-box__item" v-for="key in Object.keys( filtersDict )" :key="key">
                            <h5>{{ catDict[key] }}</h5>
                            <p>{{ filtersDict[key] }}</p>
                            <div class="item__btns">
                                <svg class="btn__del" @click="delFilter(key)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';



export default defineComponent({
    name: 'QueryBlock',
    data() {
        return {
            catDict: {
                'deal_name': "Наименование",
                'budget': "Бюджет",
                'status': "Статус",
                'responsible': "Ответственный",
            }  as Record<string, unknown>,
            filtersDict: {} as Record<string, any>,
            select_val: '',
            input_val: ''
        }
    },
    methods: {
        async addFilter() {
            if( this.select_val && this.input_val.length >=3 ) {
                this.filtersDict[ this.select_val ] = this.input_val;
                this.select_val = '';
                this.input_val = '';

                await this.$store?.dispatch('loadContractsList', this.filtersDict);
            }
        },
        async delFilter(key: any) {
            delete this.filtersDict[key];
            await this.$store.dispatch('loadContractsList', this.filtersDict);
        }
    }
});
</script>

<style lang="scss" scoped>
.query-block {
    width: 100%;
    margin: 60px 0;
    padding: 0 10%;

    .query-block__conteiner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .conteiner__box {
            width: 500px;
            min-height: 200px;

            h2 {
                font-size: 30px;
                letter-spacing: 1px;
                margin-bottom: 20px;
            }
    
            .query-block__form {
                width: 100%;

                .form__add-block {
                    width: 100%;
                    min-height: 40px;
                    border: 2px solid rgb(77, 77, 159);
                    border-radius: 10px;
                    padding: 5px 10px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    select {
                        cursor: pointer;
                        width: 120px;
                        height: 30px;
                        border-radius: 5px;
                    }

                    input {
                        width: 60%;
                        height: 30px;
                        padding: 0 10px;
                        outline: none;
                        border-radius: 5px;
                    }

                    button {
                        background: transparent;
                        border: none;
                        cursor: pointer;
                        height: 25px;
                        width: 25px;
                        font-size: 20px;

                        svg {
                            path {
                                fill: rgb(99, 86, 155);
                            }
                        }
                    }
                }

                .warn {
                    color: red;
                    font-size: 14px;
                    margin-top: 20px;
                }

                h3 {
                    margin-top: 20px;
                }

                .form__filter-box {
                    width: 100%;

                    .filter-box__item {
                        width: 100%;
                        height: 40px;
                        border: 2px solid silver;
                        border-radius: 7px;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        margin-top: 10px;
                        padding: 3px 10px;

                        h5 {
                            font-size: 25px;
                            font-weight: 600;
                        }

                        p {
                            font-size: 20px;
                        }

                        .item__btns {
                            align-self: self-start;

                            svg {
                                cursor: pointer;
                                margin-left: 10px;
                                width: 20px;
                                height: 20px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>