<template>
    <tr class="empty_tr">
        <td v-if="!isLoadedContructs" colspan="6">
            <div class="loader"></div>
            Идёт загрузка данных...
        </td>
        <td v-else colspan="6">Здесь пока ничего нет!</td>
    </tr>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';


export default defineComponent({
    name: 'EmptyRow',
    computed: {
        ...mapGetters([ 'isLoadedContructs' ]),
    }
})
</script>

<style lang="scss" scoped>
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.loader {
    margin: auto;
    margin-bottom: 10px;
    width: 40px;
    height: 40px;
    position: relative;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top-color: #3498db;
    border-radius: 50%;
    animation: spin 2s linear infinite;
}

.empty_tr {

    td {
        padding: 20px;
        text-align: center;
    }
}
</style>