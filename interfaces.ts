export interface ReservationItem {
    carId : string,
    carModel: string,
    numOfDays: number,
    pickupDate: string,
    pickupLocation: string,
    returnDate: string,
    returnLocation: string
}

export interface BookingItem {
    _id: string,
    pickupDate: string,
    pickupLocation: string,
    returnDate: string,
    returnLocation: string,
    user: string,
    car: {
        _id: string,
        model: string,
        description: string,
        picture: string,
        id: string
    },
    createdAt: string,
    __v: number
}

export interface BookingJson {
    success: boolean,
    count: number,
    data: BookingItem[]
}

export interface BookingBody {
    pickupDate: string,
    pickupLocation: string,
    returnDate: string,
    returnLocation: string,
}

export interface RegisterItem {
    name: string,
    email: string,
    tel: string,
    password: string,
    role: string
}

export interface CarItem {
    id: string,
    model: string,
    picture: string
}

export interface CarJson {
    count: number,
    data: CarItem[]
}