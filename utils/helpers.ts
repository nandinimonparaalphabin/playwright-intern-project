export function generateRandomTodoText():string {
    const todoList: string[] =[
        "Reading",
        "Writing",
        "Learning",
        "Speaking"
    ]

    const randomIndex : number = Math.floor(Math.random() * todoList.length);

    return todoList[randomIndex];
}

export function formatString(text: string): string {
    if (text.length===0){//empty string
        return text;
    }

    return text[0].toUpperCase()+ text.slice(1);
}