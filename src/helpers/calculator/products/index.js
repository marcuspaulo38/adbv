export default function processRawData(rawData) {
    let cp = [...rawData];

    let wrapper = new Map();

    cp.forEach(mock => {
        const categories = mock.category;
        const product = {...mock};

        delete product['category'];

        categories.forEach(category => {
            if (wrapper.has(category))
                wrapper.set(category, [...wrapper.get(category), product])
            else
                wrapper.set(category, [product])
        })
    })

    let result = [];

    for (let [k, v] of wrapper) {
        result.push({
            categoryName: k,
            products: v
        });
    }

    return result;
}