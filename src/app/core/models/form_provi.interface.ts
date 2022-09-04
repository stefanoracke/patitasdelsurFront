export interface IProvisForm{
    name: string,
    address:{
        street: string,
        str_num: string,
        floor: string,
        door: string,
        neighborhood: string
    },
    social_net:{
        facebook: string,
        instagram: string,
    },
    family_pets: string,
    permission: string,
    alt_number: string,
    provi_of: IProviOf
}

export enum IProviOf{
    'Gato',
    'Perro',
    'Perros y Gatos'
    // agregar opcion de ambos en backend
}