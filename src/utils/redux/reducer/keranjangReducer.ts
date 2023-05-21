type typeInitKeranjang = {
    isKeranjang: any
}

const initKeranjang: typeInitKeranjang = {
    isKeranjang: []
}

export const keranjangReducer =  (state = initKeranjang, action: any) => {
    if (action.type === 'SET_KERANJANG') {
        return {
          ...state,
          isKeranjang: action.value,
        };
    }

    return state;

}