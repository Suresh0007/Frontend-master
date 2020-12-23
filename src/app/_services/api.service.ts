import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class APIService {
    public data = [
        {
            id: 1,
            firstName: "Wilson",
            lastName: "",
            gender: "Male",
            insuranceName: "Medicare Insurance",
            policyNo: "DD343434",
            surgeryDate: "21/08/2020",
            surgeryType: "Colonoscopy",
            status: "Pending",
            isBilled: false
        },
        {
            id: 2,
            firstName: "Jack",
            lastName: "David",
            gender: "Male",
            insuranceName: "Cigna Health Insurance",
            policyNo: "DD343434",
            surgeryDate: "23/08/2020",
            surgeryType: "Colonoscopy",
            status: "Pending",
            isBilled: false
        },
        {
            id: 3,
            firstName: "Mary",
            lastName: "Williams",
            gender: "Female",
            insuranceName: "Medicare Insurance",
            policyNo: "DD343434",
            surgeryDate: "23/08/2020",
            surgeryType: "Colonoscopy",
            status: "Pending",
            isBilled: false
        },
        {
            id: 4,
            firstName: "David",
            lastName: "Smith",
            gender: "Male",
            insuranceName: "Medicare Insurance",
            policyNo: "DD343434",
            surgeryDate: "23/08/2020",
            surgeryType: "Colonoscopy",
            status: "Pending",
            isBilled: false
        },
        {
            id: 5,
            firstName: "Sam",
            lastName: "Mendes",
            gender: "Male",
            insuranceName: "Medicare Insurance",
            policyNo: "DD343434",
            surgeryDate: "23/08/2020",
            surgeryType: "Colonoscopy",
            status: "Pending",
            isBilled: false
        },
        {
            id: 6,
            firstName: "June",
            lastName: "Manroe",
            gender: "Female",
            insuranceName: "Medicare Insurance",
            policyNo: "DD343434",
            surgeryDate: "23/08/2020",
            surgeryType: "Colonoscopy",
            status: "Pending,"
        },
        {
            id: 7,
            firstName: "Eliza",
            lastName: "Jacob",
            gender: "Female",
            insuranceName: "Medicare Insurance",
            policyNo: "DD343434",
            surgeryDate: "23/08/2020",
            surgeryType: "Colonoscopy",
            status: "Pending",
            isBilled: false
        },
        {
            id: 8,
            firstName: "George",
            lastName: "Mendes",
            gender: "Female",
            insuranceName: "Medicare Insurance",
            policyNo: "DD343434",
            surgeryDate: "23/08/2020",
            surgeryType: "Colonoscopy",
            status: "Pending",
            isBilled: false
        }
    ];
}

