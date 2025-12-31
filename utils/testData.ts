export enum TodoStatus {
    pending ="PENDING",
    completed ="COMPLETED"
}

export interface Todo{
    id : number;
    title: string;
    completed:boolean;
    status:TodoStatus;
    description?: string;
}

export const todoTestData: Todo[]=[
    {
      id:1,
      title :"Reading",
      completed:false,
      status:TodoStatus.pending
    },
    {
      id:2,
      title :"Writing",
      completed:false,
      status:TodoStatus.pending  
    }
];

