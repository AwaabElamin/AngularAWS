export interface useCase  {
    id:string | null,
    title:string | null,
    description:string | null,
    PrimaryActor:string | null,
    Preconditions:string | null,
    postCondition:string | null,
    mainSuccessScenario:string | null,
    extensions:string | null,
    frequencyOfUse:string | null,
    status:string | null,
    owner:string | null,
    priority:string | null
}