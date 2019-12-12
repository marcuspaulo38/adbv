const actions = {
  LOAD_PRODUCTS: 'LOAD_PRODUCTS',
  LOAD_PRODUCTS_ERROR: 'LOAD_PRODUCTS_ERROR',
  LOAD_PRODUCTS_SUCCESS: 'LOAD_PRODUCTS_SUCCESS',

  SEARCH_PRODUCTS: 'SEARCH_PRODUCTS',

  loadProducts: () => { 
    return {
      type: actions.LOAD_PRODUCTS
    }
  },

  searchProducts: (query) => { 
    return {
      type: actions.SEARCH_PRODUCTS,
      query
    }
  },

  /** Gerenciamento das estimativas */

  REQUEST_NEW_ESTIMATIVE: 'REQUEST_NEW_ESTIMATIVE', // CRAIR NOVA ESTIMATIVA AO TCLICAR NO BOTÃO DE ADIÇÃO
  REQUEST_UPDATE_ESTIMATIVE: 'REQUEST_UPDATE_ESTIMATIVE', // TROCAR O TÍTULO DA ESTIMATIVA
  REQUEST_REMOVE_ESTIMATIVE: 'REQUEST_REMOVE_ESTIMATIVE', // REMOVER ESTIMATIVA
  REQUEST_CHANGE_ESTIMATIVE_KEY: 'REQUEST_CHANGE_ESTIMATIVE_KEY', // TROCAR ESTIMATIVA ATIVA

  // REFAZER O SOMATÓRIO TODA VEZ
  REQUEST_ADD_ITEM_ESTIMATIVE: 'REQUEST_ADD_ITEM_ESTIMATIVE',
  REQUEST_REMOVE_ITEM_ESTIMATIVE: 'REQUEST_REMOVE_ITEM_ESTIMATIVE',
  REQUEST_CLONE_ITEM_ESTIMATIVE: 'REQUEST_CLONE_ITEM_ESTIMATIVE',
  REQUEST_UPDATE_ITEM_ESTIMATIVE: 'REQUEST_UPDATE_ITEM_ESTIMATIVE',

  // EXPANDIR/COLLAPSAR ITEM
  REQUEST_TOOGLE_ALL_ITEMS_EXPANSION: 'REQUEST_TOOGLE_ALL_ITEMS_EXPANSION',

  requestNewEstimative: () => {
    return {
      type: actions.REQUEST_NEW_ESTIMATIVE
    }
  },

  requestChangeCurrentEstimative: (estimativeKey) => {
    return {
      type: actions.REQUEST_CHANGE_ESTIMATIVE_KEY,
      estimativeKey
    }
  },

  requestRemoveEstimative: (estimativeKey) => {
    return {
      type: actions.REQUEST_REMOVE_ESTIMATIVE,
      estimativeKey
    }
  },

  requestUpdateEstimative: (estimative) => {
    return {
      type: actions.REQUEST_UPDATE_ESTIMATIVE,
      estimative
    }
  },

  requestAddItemToEstimative: (product/* APENAS O ID DO PRODUTO PARA GERAR O JSON???? */, productName, estimative) => {
    return {
      type: actions.REQUEST_ADD_ITEM_ESTIMATIVE,
      product,
      productName,
      estimative
    }
  },

  requestCloneItemInEstimative: (itemId/* APENAS O ID DO PRODUTO PARA GERAR O JSON???? */, estimative) => {
    return {
      type: actions.REQUEST_CLONE_ITEM_ESTIMATIVE,
      itemId,
      estimative
    }
  },

  requestRemoveItemToEstimative: (itemId/* APENAS O ID DO PRODUTO PARA GERAR O JSON???? */, estimative) => {
    return {
      type: actions.REQUEST_REMOVE_ITEM_ESTIMATIVE,
      itemId,
      estimative
    }
  },

  requestUpdateItemToEstimative: (item/* APENAS O ID DO PRODUTO PARA GERAR O JSON???? */, estimative) => {
    return {
      type: actions.REQUEST_UPDATE_ITEM_ESTIMATIVE,
      item,
      estimative
    }
  },

  requestToogleAllItemsExpansion: (estimative, expanded) => {
    return {
      type: actions.REQUEST_TOOGLE_ALL_ITEMS_EXPANSION,
      estimative,
      expanded
    }
  },
};

export default actions;
