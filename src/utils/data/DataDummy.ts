type StructureType = {
    id: number,
    nama: string,
    harga: number
}


const DataDummyMakanan: Array<StructureType> = [
    {
       id: 1,
       nama: 'Mie Ayam Bakso Cincang',
       harga:  18000
    },
    {
        id: 2,
        nama: 'Mie Ayam Bakso Urat',
        harga: 20000
    },
    {
        id: 3,
        nama: 'Mie Bakso Cincang + Telur',
        harga: 20000
    },
    {
        id: 4,
        nama: 'Mie Bakso Cincang Urat',
        harga: 20000
    },
    {
        id: 5,
        nama: 'Mie Bakso Telur',
        harga: 15000
    },
    {
        id: 6,
        nama: 'Mie Bakso Urat',
        harga: 15000
    },
    {
        id: 7,
        nama: 'Mie Bakso Cincang',
        harga: 15000
    },
    {
        id: 8,
        nama: 'Mie Yamin Bakso Urat',
        harga: 20000
    }
]

const DataDummyMinuman  = [
    {
        id: 1,
        nama: 'Es Jeruk',
        harga: 6000
    },
    {
        id: 2,
        nama: 'Es Teh Manis',
        harga: 4000
    },
    {
        id: 3,
        nama: 'Les Mineral',
        harga: 3000
    },
    {
        id: 4,
        nama: 'Teh Manis Panas',
        harga: 40000
    },
]

export{
    DataDummyMakanan,
    DataDummyMinuman
}