export interface LoginUser{
    password:string | null,
    firstname:string | null,
    lastname:string | null,
    email:string | null,
    phone: string | null,    
    title: string | null,
    city: string | null,
    state: string | null,
    country: string | null,
    linkedin: string | null,
    github: string | null,
    webside: string | null,
    summary: string | null,
    keySkills: string | null,
    technicalSkills: string | null,
    education: [{
        universityName: string | null
        degree: string | null,
        fieldName: string | null,
        month: string | null,
        year: string | null,
        location: string | null,
        gpa: string | null
    }],
    experience: [{
        companyName:string | null,
        jobTitle: string | null,
        startMonth: string | null,
        startYear: string | null,
        endMonth: string | null,
        endYear: string | null,
        location: string | null,
        summary: string | null
    }],
    Additional: []
}
// export class AppUserAuth {
//     password = "";
//     firstname = "";
//     lastname = "";
//     email="";
// }