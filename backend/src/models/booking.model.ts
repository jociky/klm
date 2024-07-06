export interface Booking {
    bookingCode: string;
    contactDetails: ContactDetail[];
    itinerary: Itinerary;
    passengers: Passengers;
}
export interface Passengers {
    id: number;
    firstName: string;
    lastName: string;
    title: Country;
}
export interface Itinerary {
    type: string;
    connections: Connection[];
}
export interface Connection {
    id: number;
    duration: string;
    origin: Origin;
    destination: Origin;
    segments: Segment[];
}
export interface Segment {
    id: number;
    type: string;
    informational: boolean;
    departFrom: Origin;
    arriveOn: Origin;
    marketingFlight: MarketingFlight;
}
export interface MarketingFlight {
    number: string;
    carrier: Country;
    status: Country;
    numberOfStops: number;
    sellingClass: SellingClass;
    operatingFlight: OperatingFlight;
}
export interface OperatingFlight {
    number: string;
    carrier: Country;
    duration: string;
    flown: boolean;
    checkInStart: string;
    localCheckInStart: string;
    checkInEnd: string;
    localCheckInEnd: string;
    scheduledArrival: string;
    localScheduledArrival: string;
    scheduledDeparture: string;
    localScheduledDeparture: string;
    arrivalTerminal: ArrivalTerminal;
    cabin: Country;
    equipment: Country;
}
export interface ArrivalTerminal {
    name: string;
}
export interface SellingClass {
    code: string;
}
export interface Origin {
    IATACode: string;
    name: string;
    city: City;
}
export interface City {
    IATACode: string;
    name: string;
    country: Country;
}
export interface Country {
    code: string;
    name: string;
}
export interface ContactDetail {
    '@class': string;
    address: string;
}

