const animalesPics = (() => {
    const url = 'http://localhost:3000/animales.json'
    // const url = "./dbz.json"
    const getData = async () => {
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
    return { getData }
})()

export default animalesPics