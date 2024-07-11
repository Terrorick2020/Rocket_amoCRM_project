<template>
    <MainHeader />
    <QueryBlock />
    <ContractsBody />
    <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainHeader from './components/MainHeader.vue';
import QueryBlock from './components/QueryBlock.vue';
import ContractsBody from './components/ContractsBody.vue';
import MainFooter from './components/MainFooter.vue';


export default defineComponent({
    name: 'ContractsPage',
    components: { MainHeader, QueryBlock, ContractsBody, MainFooter }
});
</script>