import axios from 'axios';
import { ActionContext } from 'vuex';
import DOMPurify from 'dompurify';


interface State {
    contracts_list: any[];
    isLoadedContructs: boolean;
}

interface DynamicKeyObject {
    query: string | undefined;
  }

export default {
    actions: {
        async loadContractsList(context: ActionContext<any, any>, data: DynamicKeyObject ) {
            try {
                context.commit( 'resetLoadedStatus' );

                if( data.query ) {
                    data.query = DOMPurify.sanitize( data.query );
                }
                const response = await axios.get(`http://localhost:3000/api/leads${data.query ? '?query=' + data.query : ''}`);
                
                if( response.data._embedded ) {
                    context.commit( 'setContractsList', response.data._embedded.leads );
                } else {
                    context.commit( 'setEmptyList' );
                }
                
            } catch ( error ) {
                console.error( `Ошибка при загрузку контрактов!` );
                console.error( error );
            }
        }
    },
    mutations: {
        resetLoadedStatus( state: State ) {
            state.isLoadedContructs = false;
            state.contracts_list = [];
        },
        setContractsList( state: State, contracts: any[] ) {
            contracts.forEach( elem => {
                state.contracts_list.push( {
                    id: elem.id,
                    deal_name: elem.name,
                    budget: elem.price,
                    status: elem.status.name,
                    status_color: elem.status.color,
                    responsible: elem.user.name,
                    responsible_email: elem.user.email,
                    created_at: elem.created_at,
                    contact: '+7 (999) 333-33-33'
                } );
            });
            state.isLoadedContructs = true;
        },
        setEmptyList( state: State ) {
            state.contracts_list = [];
            state.isLoadedContructs = true;
        }
    },
    state: {
        contracts_list: [
            // {
            //     id: 0,
            //     deal_name: 'Первая сделка',
            //     budget: 12000,
            //     status: 'Закрыто и нереализовано',
            //     status_color: '#99ccff',
            //     responsible: 'Андрей Соколов',
            //     responsible_email: 'Vlad@ya.ru'
            //     created_at: 1720262125,
            //     contact: '+7 (888) 555-35-35'
            // },
            // {
            //     id: 1,
            //     deal_name: 'Вторая сделка',
            //     budget: 14000,
            //     status: 'Закрыто и нереализовано',
            //     status_color: '#99ccff',
            //     responsible: 'Андрей Соколов',
            //     responsible_email: 'Alex@ya.ru'
            //     created_at: 1720261000,
            //     contact: '+7 (888) 555-35-35'
            // }
        ],
        isLoadedContructs: false
    },
    getters: {
        getContructsList: (state: State) => state.contracts_list,
        isLoadedContructs: (state: State) => state.isLoadedContructs,
    }
}