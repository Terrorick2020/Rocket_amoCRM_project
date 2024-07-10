import { createStore } from "vuex";
import contractsStore from "./modules/contractsStore";


export default createStore({
    modules: { contractsStore }
});