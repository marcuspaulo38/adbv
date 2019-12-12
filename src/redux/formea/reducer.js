import actions from './actions';

import uuidv4 from 'uuid/v4';

const initialEstimative = uuidv4();

const initState = {
  products: [],
  allProducts: [],
  currentEstimative: initialEstimative,
  lastAddedItem: '',
  estimatives: [
    {
      id: initialEstimative,
      name: 'Sua estimativa',
      items: []
    }
  ]
};

export default function loadProductsReducer(state = initState, action) {
  //console.log('-- current.state: ', state);
  //console.log('-- current.action: ', action);

  switch (action.type) {
    case actions.LOAD_PRODUCTS_SUCCESS:
      return { ...state, products: action.products, allProducts: [...action.products] };
    case actions.LOAD_PRODUCTS_ERROR:
      return { ...state, products: [] };
    case actions.SEARCH_PRODUCTS:
      const q = action.query;
      let products = [...state.allProducts];

      if (q.length > 0) {
        products = products.filter(product => {
          return product.label.toLocaleLowerCase().includes(action.query.toLocaleLowerCase());
        })
      }

      return {
        ...state,
        products
      }

    // Estimativas
    case actions.REQUEST_NEW_ESTIMATIVE:
      const estimativeId = uuidv4();
      let estimatives = [
        ...state.estimatives,
        {
          id: estimativeId,
          name: 'Sua estimativa',
          items: []
        }
      ];
      return { ...state, estimatives, currentEstimative: estimativeId };

    case actions.REQUEST_CHANGE_ESTIMATIVE_KEY:
      return { ...state, currentEstimative: action.estimativeKey };


    case actions.REQUEST_REMOVE_ESTIMATIVE:
      let filtered = state.estimatives.filter(e => e.id != action.estimativeKey);

      // Sempre tem de ter pelo menos uma estimativa vazia na tela
      if (filtered.length == 0) {
        filtered = [
          {
            id: uuidv4(),
            name: 'Sua estimativa',
            items: []
          }
        ]
      }

      return {
        ...state,
        estimatives: filtered,
        currentEstimative: filtered[filtered.length - 1].id
      };

    case actions.REQUEST_UPDATE_ESTIMATIVE:
      //console.log('-- req.update: ', action);

      return {
        ...state,
        estimatives: state.estimatives.map(estimative => {
          if (estimative.id == action.estimative.id)
            return {...estimative, ...action.estimative}
          return estimative;
        })
      }

    // Items
    case actions.REQUEST_REMOVE_ITEM_ESTIMATIVE:
      //console.log('-- remove-item: ', action);
      return {
        ...state,
        estimatives: state.estimatives.map(estimative => {
          if (estimative.id == action.estimative) {
            return {
              ...estimative,
              items: estimative.items.filter(item => item.id != action.itemId)
            }
          }

          return estimative;
        })
      }

    case actions.REQUEST_CLONE_ITEM_ESTIMATIVE:
      //console.log('-- clone-item: ', action);

      return {
        ...state,
        estimatives: state.estimatives.map(estimative => {
          if (estimative.id == action.estimative) {
            let idx = estimative.items.findIndex(item => item.id == action.itemId);

            if (idx > -1) {
              const newId = uuidv4();
              return {
                ...state,
                ...estimative,
                items: [
                  ...estimative.items,
                  { ...estimative.items[idx], id: newId }
                ]
              }
            }
          }

          return estimative;
        })
      }

    case actions.REQUEST_ADD_ITEM_ESTIMATIVE:
      //console.log('-- add-item: ', action);
      const itemId = uuidv4();

      let item = {
        id: itemId,
        product: action.product,
        name: '',
        expanded: true,
        basicName: action.productName,
        shortDescription: '1 D2 v3 (2 vCPU(s), 8 GB de RAM) x 730 Hours; Windows – (Somente o sistema operacional); Pago pelo uso; 0 discos gerenciados do sistema operacional – S4, 100 unidades de transação',
        value: Math.random() * 9999,
        data: []
      }

      return {
        ...state,
        lastAddedItem: {
          item: itemId,
          name: action.productName,
          product: action.product
        },
        estimatives: state.estimatives.map(estimative => {
          if (estimative.id == action.estimative) {
            return {
              ...estimative,
              items: [...estimative.items, item]
            }
          }

          return estimative;
        })
      }

    case actions.REQUEST_UPDATE_ITEM_ESTIMATIVE:
      //console.log('-- update.item.state: ', state);
      //console.log('-- update.item.action: ', action);

      return {
        ...state,
        estimatives: state.estimatives.map(estimative => {
          if (estimative.id == action.estimative) {
            let idx = estimative.items.findIndex(item => item.id == action.item.id);

            if (idx > -1) {
              let cpItens = [...estimative.items];
              let newItem = {...estimative.items[idx], ...action.item}

              cpItens.splice(idx, 1, newItem);

              //console.log('--- new item: ', newItem);

              return {
                ...estimative,
                items: cpItens
              }
            }
          }

          return estimative;
        })
      }

      case actions.REQUEST_TOOGLE_ALL_ITEMS_EXPANSION:
        return {
          ...state,
          estimatives: state.estimatives.map(estimative => {
            if (estimative.id == action.estimative) {
              return {
                ...estimative,
                items: estimative.items.map(item => {
                  item.expanded = action.expanded
                  return item;
                })
              }
            }

            return estimative;
          })
        }
    default:
      return state;
  }
}
