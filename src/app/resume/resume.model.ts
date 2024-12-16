export interface Resume {
    firstname: string,
    lastname: string,
    title: string,
    phone: string,
    email: string,
    city: string,
    state: string,
    country: string,
    linkedInUrl: string,
    gitHubUrl: string,
    webside: string,
    summary:string,
    Education:{master:string, Bacholar:string},
    Certificate:{Associate:string, Certificates:string}
    Experience:{Infosys:string,AwaaabLLC:string}
}
export interface Summary {
    email:string,
    summary:string
}
export interface education{
    email: string,
    universityName: string,
    degreeType: string,
    majorName: string,
    yearOfGraduate: string
}
export interface Response{
  status: string,
  data: any
}
export interface experience{
    email: string,
    TechnologiesUsed:string,
    companyName:string,
    startYear:string,
    positionName:string,
    endYear:string,
    projectName:string,
    summary:string,
    link:string
}
